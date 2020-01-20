import axios, { AxiosResponse } from 'axios';
import * as Sentry from '@sentry/browser';

import userManager from './userManager';
import { StoreThunk } from './types/AppTypes';
import {
  startFetchingToken,
  fetchTokenSuccess,
  fetchTokenError,
} from './state/BackendAuthenticationActions';
import { BackendTokenResponse } from './types/BackendAuthenticationTypes';

export const loginTunnistamo = (path?: string) => {
  userManager.signinRedirect(
    path ? { data: { path: path } } : { data: { path: '/' } }
  );
};

const {
  REACT_APP_TUNNISTAMO_URI,
  REACT_APP_TUNNISTAMO_API_TOKEN_ENDPOINT,
} = process.env;

export const logoutTunnistamo = async () => {
  try {
    await userManager.signoutPopup();
  } catch (e) {
    Sentry.captureException(e);
  }
};
export const authenticateWithBackend = (
  accessToken: string
): StoreThunk => async dispatch => {
  try {
    dispatch(startFetchingToken());
    const res: AxiosResponse<BackendTokenResponse> = await axios.post(
      `${REACT_APP_TUNNISTAMO_URI}/${REACT_APP_TUNNISTAMO_API_TOKEN_ENDPOINT}/`,
      {},
      {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      }
    );

    dispatch(fetchTokenSuccess(res.data));
  } catch (error) {
    dispatch(fetchTokenError(error));
  }
};
