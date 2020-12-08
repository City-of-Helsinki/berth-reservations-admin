import authService from '../../features/auth/authService';

export const getProfileToken = () => {
  const profileScope = process.env.REACT_APP_TUNNISTAMO_SCOPE_PROFILE;
  const profileToken = JSON.parse(authService.getTokens() as string)[profileScope as string];
  return profileToken;
};
