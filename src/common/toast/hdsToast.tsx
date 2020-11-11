import React, { useEffect } from 'react';
import { Notification, NotificationProps } from 'hds-react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { GraphQLError } from 'graphql';

import i18n from '../../locales/i18n';
import { HDSToastContainerId } from './HDSToastContainer';

interface HDSToastArgs {
  autoDismiss?: boolean;
  autoDismissTime?: number;
  type: NotificationProps['type'];
  labelText: string;
  text: string;
  toastId?: string;
  translated?: boolean;
}

interface NotificationWrapperProps extends HDSToastArgs {
  toastId: string;
  translated: boolean;
}

const AUTO_DISMISS_TIME = 3000;

const NotificationWrapper = ({
  autoDismiss,
  autoDismissTime = AUTO_DISMISS_TIME,
  type,
  labelText,
  text,
  toastId,
  translated,
}: NotificationWrapperProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        toast.dismiss(toastId);
      }, autoDismissTime);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, autoDismissTime, toastId]);

  return (
    <Notification
      type={type}
      dismissible
      closeButtonLabelText={t('toast.closeToast') ?? ''}
      label={translated ? t(labelText) : labelText}
      onClose={() => toast.dismiss(toastId)}
    >
      {translated ? t(text) : text}
    </Notification>
  );
};

const hdsToast = ({
  autoDismiss = true,
  autoDismissTime = AUTO_DISMISS_TIME,
  type,
  labelText,
  text,
  toastId,
  translated = false,
}: HDSToastArgs) => {
  const id = toastId ?? uuidv4();
  return toast(
    <NotificationWrapper
      autoDismiss={autoDismiss}
      type={type}
      labelText={labelText}
      text={text}
      toastId={id}
      translated={translated}
      autoDismissTime={autoDismissTime}
    />,
    {
      toastId: id,
      containerId: HDSToastContainerId,
    }
  );
};

hdsToast.graphQLErrors = (errors: ReadonlyArray<GraphQLError>) => {
  errors.forEach((error) =>
    hdsToast({
      autoDismiss: false,
      type: 'error',
      labelText:
        error.extensions?.code && i18n.exists(`toast.graphQLErrors.${error.extensions.code}.label`)
          ? `toast.graphQLErrors.${error.extensions?.code}.label`
          : 'toast.graphQLErrors.default.label',
      text:
        error.extensions?.code && i18n.exists(`toast.graphQLErrors.${error.extensions.code}.description`)
          ? `toast.graphQLErrors.${error.extensions?.code}.description`
          : 'toast.graphQLErrors.default.description',
      translated: true,
    })
  );
};

export default hdsToast;
