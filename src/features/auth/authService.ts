import { UserManager, Log, WebStorageStateStore } from 'oidc-client-ts';
import type { User, UserManagerSettings } from 'oidc-client-ts';
import axios from 'axios';
import * as Sentry from '@sentry/browser';
import AppConfig from '../../app/AppConfig';

const origin = window.location.origin;
export const API_TOKENS = 'apiTokens';
export const REFRESH_TOKEN = 'refreshToken';

export type ApiTokenClientProps = {
  url: string;
  queryProps?: { permission: string; grant_type: string };
  audiences?: string[];
};

class AuthService {
  private readonly userManager: UserManager;
  private readonly apiTokensClientConfig: ApiTokenClientProps;
  private readonly authServerType: 'KEYCLOAK' | 'TUNNISTAMO';
  private readonly audiences: string[];

  constructor() {
    this.authServerType = AppConfig.oidcServerType;
    this.audiences = AppConfig.oidcAudiences ?? [AppConfig.oidcBerthApiClientId];

    const settings: UserManagerSettings = {
      loadUserInfo: true,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      // eslint-disable-next-line @typescript-eslint/camelcase
      response_type: AppConfig.oidcReturnType,
      authority: AppConfig.oidcAuthority,
      // eslint-disable-next-line @typescript-eslint/camelcase
      client_id: AppConfig.oidcClientId,
      scope: AppConfig.oidcScope,
      // eslint-disable-next-line @typescript-eslint/camelcase
      redirect_uri: `${origin}/callback`,
      // eslint-disable-next-line @typescript-eslint/camelcase
      post_logout_redirect_uri: `${origin}/`,
      automaticSilentRenew: AppConfig.oidcAutomaticSilentRenew,
      checkSessionIntervalInSeconds: AppConfig.oidcSessionPollerIntervalInMs / 1000,
      // eslint-disable-next-line @typescript-eslint/camelcase
      silent_redirect_uri: `${origin}/silent-callback.html`,
      revokeTokensOnSignout: false,
    };

    if (!settings.automaticSilentRenew) {
      // eslint-disable-next-line no-console
      console.info('Auth token silent renew is disabled.');
    }

    if (process.env.NODE_ENV === 'development') {
      // Show oidc debugging info in the console only while developing
      Log.setLogger(console);
      Log.setLevel(Log.INFO);
    }

    // User Manager instance
    this.userManager = new UserManager(settings);

    // Api tokens client configuration
    this.apiTokensClientConfig = {
      url: AppConfig.oidcBerthApiTokensUrl,
      queryProps:
        this.authServerType === 'KEYCLOAK'
          ? {
              permission: '#access',
              // eslint-disable-next-line @typescript-eslint/camelcase
              grant_type: 'urn:ietf:params:oauth:grant-type:uma-ticket',
            }
          : undefined,
      audiences: this.audiences,
    };

    // Public methods
    this.getUser = this.getUser.bind(this);
    this.getTokens = this.getTokens.bind(this);
    this.getRefreshToken = this.getRefreshToken.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.login = this.login.bind(this);
    this.endLogin = this.endLogin.bind(this);
    this.renewToken = this.renewToken.bind(this);
    this.logout = this.logout.bind(this);
    this.resetAuthState = this.resetAuthState.bind(this);
    this.fetchApiToken = this.fetchApiToken.bind(this);

    // Events
    this.userManager.events.addAccessTokenExpired((e) => {
      this.logout();
    });

    this.userManager.events.addSilentRenewError(() => {
      this.logout();
    });

    this.userManager.events.addUserSignedOut(() => {
      this.userManager.clearStaleState();
      localStorage.removeItem(API_TOKENS);
    });

    this.userManager.events.addUserLoaded((user) => {
      for (const audience of this.audiences) {
        this.fetchApiToken(user, audience);
      }
    });
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public getTokens(): string | null {
    return localStorage.getItem(API_TOKENS);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  public getUserStorageKey(): string {
    return `oidc.user:${AppConfig.oidcAuthority}:${AppConfig.oidcClientId}`;
  }

  public isAuthenticated() {
    const userKey = this.getUserStorageKey();
    const oidcStorage = localStorage.getItem(userKey);
    const apiTokens = this.getTokens();

    return !!oidcStorage && !!JSON.parse(oidcStorage).access_token && !!apiTokens;
  }

  public async login(path = '/'): Promise<void> {
    try {
      // eslint-disable-next-line @typescript-eslint/camelcase
      await this.userManager.signinRedirect({ url_state: path });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      if (error instanceof Error) {
        if (error.message !== 'Network Error') {
          Sentry.captureException(error);
        }
      }
    }
  }

  public async endLogin(): Promise<User> {
    // eslint-disable-next-line no-console
    console.info('Ending the login...');
    const user = await this.userManager.signinRedirectCallback();

    await Promise.all(this.audiences.map((audience) => this.fetchApiToken(user, audience)));

    return user;
  }

  public async renewToken(): Promise<User | null> {
    // eslint-disable-next-line no-console
    console.info('Renewing the JWT token...');
    const user = await this.userManager.signinSilent();
    if (user) {
      localStorage.setItem(API_TOKENS, user.access_token);
      if (user.hasOwnProperty('refresh_token') && user.refresh_token) {
        localStorage.setItem(REFRESH_TOKEN, user.refresh_token);
      } else {
        localStorage.removeItem(REFRESH_TOKEN);
      }
    }
    return user;
  }

  public async resetAuthState() {
    // eslint-disable-next-line no-console
    console.warn('Resetting the auth state...');
    localStorage.removeItem(API_TOKENS);
    localStorage.removeItem(REFRESH_TOKEN);
    await this.userManager.clearStaleState();
  }

  public async logout(): Promise<void> {
    // eslint-disable-next-line no-console
    console.info('Logout...');
    await this.resetAuthState();
    await this.userManager.signoutRedirect();
  }

  /**
   * Query the API tokens endpoint with the given access token.
   * @param accessToken The access token to use for the API tokens endpoint query.
   * @returns For Tunnistamo should return a dictionary with the API identifiers
   * as the keys and the API tokens as the values here as data (See [1]).
   * For Keycloak should return access_token, token_type, and optionally
   * expires_in, refresh_token and scope here as data (See [2, 3]).
   *
   * [1] Tunnistamo "Obtaining the API tokens":
   * https://github.com/City-of-Helsinki/tunnistamo/blob/r211109/tokens.rst#obtaining-the-api-tokens
   *
   * [2] OIDC 1.0 "Authentication > Token Endpoint > Successful Token Response":
   * https://openid.net/specs/openid-connect-core-1_0.html#TokenResponse
   *
   * [3] OAuth 2.0 "Issuing an Access Token > Successful Response":
   * https://www.rfc-editor.org/rfc/rfc6749.html#section-5.1
   */
  private async queryApiTokensEndpoint(accessToken: string, audience: string) {
    return await axios(this.apiTokensClientConfig.url, {
      method: 'post',
      baseURL: AppConfig.oidcAuthority,
      headers: {
        Authorization: `bearer ${accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      data: new URLSearchParams(
        this.authServerType === 'KEYCLOAK'
          ? {
              audience,
              ...this.apiTokensClientConfig.queryProps,
            }
          : {}
      ).toString(),
    });
  }

  private async fetchApiToken(user: User, audience: string): Promise<void> {
    const accessToken = user.access_token;
    try {
      const { data } = await this.queryApiTokensEndpoint(accessToken, audience);
      const apiToken = this.authServerType === 'KEYCLOAK' ? data.access_token : data[AppConfig.oidcBerthApiClientId];

      // NOTE: Currently only supporting refresh tokens with Keycloak.
      // Tunnistamo does not return a refresh token from the API tokens
      // endpoint, but Keycloak does from the token endpoint.
      const refreshToken = (this.authServerType === 'KEYCLOAK' ? data.refresh_token : null) ?? user.refresh_token;

      const currentState = JSON.parse(localStorage.getItem(API_TOKENS) || '{}');
      const updatedTokens = JSON.stringify({ ...currentState, [audience]: apiToken });
      localStorage.setItem(API_TOKENS, updatedTokens);

      if (!refreshToken) {
        localStorage.removeItem(REFRESH_TOKEN);
      } else {
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch API token', error);
      Sentry.captureException(error);
    }
  }
}

const authServiceInstance = new AuthService();

export default authServiceInstance;
