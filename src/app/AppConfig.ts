/**
 * Centralized configuration for the application.
 * Fetches configuration values from environment variables.
 */
class AppConfig {
  /**
   * The Graphql API URL (e.g., 'https://venepaikat-federation-gateway.api.hel.fi/').
   *
   * @throws {Error} If the `REACT_APP_API_URL` environment variable is not defined.
   */
  static get apiUrl() {
    return getEnvOrError(process.env.REACT_APP_API_URL, 'REACT_APP_API_URL');
  }
  /**
   * The OIDC (OpenID Connect) authority URL.
   *
   * @throws {Error} If the `REACT_APP_OIDC_AUTHORITY` environment variable is not defined.
   */
  static get oidcAuthority() {
    const origin = getEnvOrError(process.env.REACT_APP_OIDC_AUTHORITY, 'REACT_APP_OIDC_AUTHORITY');
    return new URL(origin).href;
  }
  /**
   * The audiences for OIDC tokens.
   * Can be a string or a comma-separated list of strings.
   *
   * @example
   * - Tunnistamo: undefined (leave the env var empty)
   * - Keycloak: 'berths-api-test,profile-api-test'
   */
  static get oidcAudiences() {
    return getEnvAsList(process.env.REACT_APP_OIDC_AUDIENCES);
  }

  /**
   * OIDC client id for (this) berth-admin-ui client.
   * Read env variable `REACT_APP_OIDC_CLIENT_ID`.
   */
  static get oidcClientId() {
    return getEnvOrError(process.env.REACT_APP_OIDC_CLIENT_ID, 'REACT_APP_OIDC_CLIENT_ID');
  }

  /**
   * OIDC auth scope.
   * Read env variable `REACT_APP_OIDC_SCOPE`.
   */
  static get oidcScope() {
    return getEnvOrError(process.env.REACT_APP_OIDC_SCOPE, 'REACT_APP_OIDC_SCOPE,');
  }

  /**
   * OIDC authorization code grant type.
   * Read env variable `REACT_APP_OIDC_RETURN_TYPE`.
   * Defaults to 'code' which is for "authorization code flow".
   * @see https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.
   */
  static get oidcReturnType() {
    // "code" for authorization code flow.
    return process.env.REACT_APP_OIDC_RETURN_TYPE ?? 'code';
  }

  static get oidcBerthApiClientId() {
    return getEnvOrError(process.env.REACT_APP_OIDC_BERTH_API_CLIENT_ID, 'REACT_APP_OIDC_BERTH_API_CLIENT_ID');
  }

  static get oidcProfileApiClientId() {
    return getEnvOrError(process.env.REACT_APP_OIDC_PROFILE_API_CLIENT_ID, 'REACT_APP_OIDC_PROFILE_API_CLIENT_ID');
  }

  /**
   * URL for obtaining access tokens for the Berth API.
   *
   * This dynamically determines the correct endpoint based on the `oidcServerType`:
   * - If the OIDC server is Keycloak, it uses the `/protocol/openid-connect/token` endpoint.
   * - If the OIDC server is Tunnistamo, it uses the `/api-tokens/` endpoint.
   *
   * @returns {string} The URL for obtaining Berth API access tokens.
   */
  static get oidcBerthApiTokensUrl(): string {
    return this.oidcServerType === 'KEYCLOAK'
      ? `${this.oidcAuthority}protocol/openid-connect/token`
      : `${this.oidcAuthority}api-tokens/`;
  }

  /**
   * Indicates the type of OIDC server being used.
   *
   * This is not a standard OIDC client attribute; it's used internally to determine
   * the appropriate configuration for the login provider.
   *
   * @throws {Error} If the `REACT_APP_OIDC_SERVER_TYPE` environment variable is not defined
   *                or has an invalid value (not 'KEYCLOAK' or 'TUNNISTAMO').
   */
  static get oidcServerType(): 'KEYCLOAK' | 'TUNNISTAMO' {
    const oidcServerType = process.env.REACT_APP_OIDC_SERVER_TYPE;
    if (oidcServerType !== 'KEYCLOAK' && oidcServerType !== 'TUNNISTAMO') {
      throw new Error(`Invalid OIDC server type: ${oidcServerType}`);
    }
    return oidcServerType;
  }

  /**
   * Read env variable `REACT_APP_OIDC_AUTOMATIC_SILENT_RENEW_ENABLED`.
   * Defaults to true.
   * */
  static get oidcAutomaticSilentRenew(): boolean {
    return Boolean(process.env.REACT_APP_OIDC_AUTOMATIC_SILENT_RENEW_ENABLED ?? true);
  }

  /**
   * Read env variable `REACT_APP_OIDC_SESSION_POLLING_INTERVAL_MS`.
   * Defaults to 1 minute.
   * */
  static get oidcSessionPollerIntervalInMs(): number {
    return Number(process.env.REACT_APP_OIDC_SESSION_POLLING_INTERVAL_MS) || 60_000;
  }

  /**
   * Read env variable `REACT_APP_IDLE_TIMEOUT_IN_MS`.
   * Defaults to 60 minutes.
   * */
  static get userIdleTimeoutInMs(): number {
    return Number(process.env.REACT_APP_IDLE_TIMEOUT_IN_MS) || 3_600_000;
  }
}
// Accept both variable and name so that variable can be correctly replaced
// by build.
// process.env.VAR => value
// process.env["VAR"] => no value
// Name is used to make debugging easier.
function getEnvOrError(variable?: string, name?: string) {
  if (!variable) {
    throw Error(`Environment variable with name ${name} was not found`);
  }
  return variable;
}

function getEnvAsList(variable?: string) {
  if (!variable) {
    return undefined;
  }
  return variable.split(',').map((e) => e.trim());
}

export default AppConfig;
