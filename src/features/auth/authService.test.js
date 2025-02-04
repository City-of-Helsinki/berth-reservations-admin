import axios from 'axios';

import authService, { API_TOKENS } from './authService';
import AppConfig from '../../app/AppConfig';

jest.mock('axios');

describe('authService', () => {
  const userManager = authService.userManager;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem.mockClear();
    jest.restoreAllMocks();
  });

  describe('getUser', () => {
    it('should call getUser from oidc', () => {
      const getUser = jest.spyOn(userManager, 'getUser');

      authService.getUser();

      expect(getUser).toHaveBeenCalledTimes(1);
    });

    it('should resolve to the user value which has been resolved from getUser', async () => {
      expect.assertions(1);
      const mockUser = { name: 'Sam Littel' };

      jest.spyOn(userManager, 'getUser').mockResolvedValueOnce(mockUser);

      const user = await authService.getUser();

      expect(user).toBe(mockUser);
    });
  });

  describe('getTokens', () => {
    it('should get API_TOKENS from localStorage', () => {
      authService.getTokens();

      expect(localStorage.getItem).toHaveBeenNthCalledWith(3, API_TOKENS);
    });
  });

  describe('isAuthenticated', () => {
    it('should get oidc user from localStorage', () => {
      authService.isAuthenticated();

      expect(localStorage.getItem).toHaveBeenNthCalledWith(
        1,
        `oidc.user:${AppConfig.oidcAuthority}:${AppConfig.oidcClientId}`
      );
    });

    it('should call getTokens', () => {
      jest.spyOn(authService, 'getTokens');
      authService.isAuthenticated();

      expect(authService.getTokens).toHaveBeenCalledTimes(1);
    });

    it('should return false if getTokens returns null', () => {
      jest.spyOn(authService, 'getTokens').mockReturnValue(null);

      expect(authService.isAuthenticated()).toBe(false);
    });

    it("should return false if oidc user from localStorage doesn't exist", () => {
      const apiTokens = '5ed3abc5-9b65-4879-8d09-3cd8499650ef';
      jest.spyOn(authService, 'getTokens').mockReturnValue(apiTokens);
      localStorage.clear();

      expect(authService.isAuthenticated()).toBe(false);
    });

    it("should return false if oidc user from localStorage doesn't have an access_token property", () => {
      const apiTokens = '5ed3abc5-9b65-4879-8d09-3cd8499650ef';
      const invalidUser = JSON.stringify({});

      jest.spyOn(authService, 'getTokens').mockReturnValue(apiTokens);
      localStorage.setItem(`oidc.user:${AppConfig.oidcAuthority}:${AppConfig.oidcClientId}`, invalidUser);

      expect(authService.isAuthenticated()).toBe(false);
    });

    it('should return true if oidc user is valid and tokens are returned from getTokens', () => {
      const apiTokens = '5ed3abc5-9b65-4879-8d09-3cd8499650ef';
      const validUser = JSON.stringify({
        name: 'Mr. Louisa Tromp',
        /* eslint-disable-next-line @typescript-eslint/camelcase */
        access_token: '5ed3abc5-9b65-4879-8d09-3cd8499650ef',
      });

      jest.spyOn(authService, 'getTokens').mockReturnValue(apiTokens);
      localStorage.setItem(`oidc.user:${AppConfig.oidcAuthority}:${AppConfig.oidcClientId}`, validUser);

      expect(authService.isAuthenticated()).toBe(true);
    });
  });

  describe('login', () => {
    it('should call signinRedirect from oidc with the provided path', () => {
      const path = '/applications';
      const signinRedirect = jest.spyOn(userManager, 'signinRedirect');

      authService.login(path);

      // eslint-disable-next-line @typescript-eslint/camelcase
      expect(signinRedirect).toHaveBeenNthCalledWith(1, { url_state: path });
    });
  });

  describe('endLogin', () => {
    axios.mockResolvedValue({ data: {} });
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    const access_token = 'db237bc3-e197-43de-8c86-3feea4c5f886';
    const mockUser = {
      name: 'Penelope Krajcik',
      /* eslint-disable-next-line @typescript-eslint/camelcase */
      access_token,
    };

    it('should call signinRedirectCallback from oidc', () => {
      const signinRedirectCallback = jest
        .spyOn(userManager, 'signinRedirectCallback')
        .mockImplementation(() => Promise.resolve(mockUser));

      authService.endLogin();

      expect(signinRedirectCallback).toHaveBeenCalledTimes(1);
    });

    it('should return the same user object returned from signinRedirectCallback', async () => {
      expect.assertions(1);
      jest.spyOn(userManager, 'signinRedirectCallback').mockReturnValue(Promise.resolve(mockUser));

      const user = await authService.endLogin();

      expect(user).toBe(mockUser);
    });

    it('should call fetchApiToken with the user object', async () => {
      expect.assertions(2);
      jest.spyOn(authService, 'fetchApiToken');
      jest.spyOn(userManager, 'signinRedirectCallback').mockResolvedValue(mockUser);

      await authService.endLogin();

      expect(authService.fetchApiToken).toHaveBeenNthCalledWith(1, mockUser, expect.stringMatching(/^berths/));
      expect(authService.fetchApiToken).toHaveBeenNthCalledWith(2, mockUser, expect.stringMatching(/^profile/));
    });

    it('should set the user in localStorage before the function returns', async () => {
      expect.assertions(1);
      jest.spyOn(userManager, 'signinRedirectCallback').mockResolvedValue(mockUser);
      jest.spyOn(authService, 'fetchApiToken');

      await authService.endLogin();

      expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });
  });

  describe('renewToken', () => {
    it('should call signinSilent from oidc', async () => {
      const signinSilent = jest.spyOn(userManager, 'signinSilent').mockResolvedValue(null);

      await authService.renewToken();

      expect(signinSilent).toHaveBeenCalledTimes(1);
    });

    it('should resolve to the user value which has been resolved from signinSilent', async () => {
      expect.assertions(1);
      const mockUser = { name: 'Camilla Howe' };

      jest.spyOn(userManager, 'signinSilent').mockResolvedValueOnce(mockUser);

      const user = await authService.renewToken();

      expect(user).toBe(mockUser);
    });
  });

  describe('logout', () => {
    it('should call signoutRedirect from oidc', async () => {
      const signoutRedirect = jest.spyOn(userManager, 'signoutRedirect').mockResolvedValue(undefined);

      await authService.logout();

      expect(signoutRedirect).toHaveBeenCalledTimes(1);
    });

    it('should remove the tokens from localStorage', async () => {
      expect.assertions(1);
      jest.spyOn(userManager, 'signoutRedirect').mockResolvedValue(undefined);
      const apiTokens = 'a8d56df4-7ae8-4fbf-bf73-f366cd6fc479';

      localStorage.setItem(API_TOKENS, apiTokens);
      await authService.logout();

      expect(localStorage.getItem(API_TOKENS)).toBeNull();
    });

    it('should call clearStaleState', async () => {
      expect.assertions(1);
      jest.spyOn(userManager, 'signoutRedirect').mockResolvedValue(undefined);
      jest.spyOn(userManager, 'clearStaleState').mockResolvedValue();

      await authService.logout();

      expect(userManager.clearStaleState).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchApiToken', () => {
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    const access_token = 'db237bc3-e197-43de-8c86-3feea4c5f886';
    const mockUser = {
      name: 'Penelope Krajcik',
      /* eslint-disable-next-line @typescript-eslint/camelcase */
      access_token,
    };

    beforeEach(() => {
      axios.mockReset();

      axios.mockResolvedValue({
        data: {
          // eslint-disable-next-line @typescript-eslint/camelcase
          access_token: '71ffd52c-5985-46d3-b445-490554f4012a',
          // eslint-disable-next-line @typescript-eslint/camelcase
          refresh_token: 'de7c2a83-07f2-46bf-8417-8f648adbc7be',
        },
      });
    });
    it('should call axios with the right arguments', async () => {
      expect.assertions(2);
      await authService.fetchApiToken(mockUser, 'berths-api');

      expect(axios).toHaveBeenCalledTimes(1);
      expect(axios.mock.calls[0]).toMatchSnapshot();
    });

    it('should call localStorage.setItem with the right arguments', async () => {
      expect.assertions(2);
      await authService.fetchApiToken(mockUser, 'berths-api');

      expect(localStorage.setItem).toHaveBeenCalledTimes(2);
      expect(localStorage.setItem.mock.calls[0]).toMatchSnapshot();
    });
  });
});
