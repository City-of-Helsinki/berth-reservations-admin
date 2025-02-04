import AppConfig from '../../app/AppConfig';
import authService from '../../features/auth/authService';

/** Get token for the given client. */
const getClientToken = (clientId: string) => {
  return JSON.parse(authService.getTokens() ?? '{}')[clientId];
};

export const getProfileToken = () => {
  return getClientToken(AppConfig.oidcProfileApiClientId);
};

export const getBerthToken = () => {
  return getClientToken(AppConfig.oidcBerthApiClientId);
};
