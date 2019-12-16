import React from 'react';
import { CallbackComponent } from 'redux-oidc';
import { User } from 'oidc-client';
import { RouteChildrenProps } from 'react-router';
import { useTranslation } from 'react-i18next';

import userManager from './userManager';

function OidcCallback(props: RouteChildrenProps) {
  const { t } = useTranslation();

  console.log('props: ', props);

  const onSuccess = (user: User) => {
    console.log('onSuccess: ', user);
    // props.history.push('/');
    if (user.state.path) props.history.push(user.state.path);
    else props.history.push('/');
  };
  const onError = (error: object) => {
    // TODO: do something about errors
    // alert('error!');
    console.log('error: ', error);
    // props.history.push('/');
  };
  return (
    <CallbackComponent
      successCallback={onSuccess}
      errorCallback={onError}
      userManager={userManager}
    >
      <p>{t('authentication.redirect.text')}</p>
    </CallbackComponent>
  );
}

export default OidcCallback;
