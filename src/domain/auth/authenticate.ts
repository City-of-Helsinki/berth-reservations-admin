import axios, { AxiosResponse } from 'axios';

import userManager from './userManager';
import { StoreThunk } from '../app/types/AppTypes';
import {
  startFetchingToken,
  fetchTokenSuccess,
  fetchTokenError,
} from './state/BackendAuthenticationActions';
import { TUNNISTAMO_API_TOKEN_ENDPOINT } from '../api/constants/ApiConstants';
import { BackendTokenResponse } from './types/BackendAuthenticationTypes';

export const loginTunnistamo = (path?: string) => {
  userManager.signinRedirect(
    path ? { data: { path: path } } : { data: { path: '/' } }
  );
};

export const logoutTunnistamo = (path?: string) => {
  console.log('logout: ', path);
  userManager.getUser().then(result => {
    console.log('logout result: ', result);
    if (result) {
      userManager.signoutRedirect(
        path ? { data: { path: path } } : { data: { path: '/' } }
      );
    }
  });
  /*
    userManager.signoutRedirect(
      { data: { path: '/' } }
    );
    */
};

export const authenticateWithBackend = (
  accessToken: string
): StoreThunk => async dispatch => {
  try {
    dispatch(startFetchingToken());

    const res: AxiosResponse<BackendTokenResponse> = await axios.post(
      TUNNISTAMO_API_TOKEN_ENDPOINT,
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
    // TODO: add error-handler
  }
};
