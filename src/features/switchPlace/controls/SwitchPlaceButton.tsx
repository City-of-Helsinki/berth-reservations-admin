import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonProps } from 'hds-react';

import Button from '../../../common/button/Button';

export interface SwitchPlaceButtonProps {
  onClick: ButtonProps['onClick'];
}

const SwitchPlaceButton = ({ onClick }: SwitchPlaceButtonProps) => {
  const { t } = useTranslation();

  return (
    <Button onClick={onClick} size="small">
      {t('customerView.leases.switchPlace.switchBerth')}
    </Button>
  );
};

export default SwitchPlaceButton;
