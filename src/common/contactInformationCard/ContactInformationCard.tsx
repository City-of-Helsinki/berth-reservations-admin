import React from 'react';
import { useTranslation } from 'react-i18next';

import CardHeader from '../cardHeader/CardHeader';
import CardBody from '../cardBody/CardBody';
import Card from '../card/Card';
import styles from './contactInformation.module.scss';
import ContactInformationDetails from './ContactInformationDetails';

export type ContactInformationCardProps = {};

// TODO
const ContactInformationCard = (props: ContactInformationCardProps) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader title={t('common.terminology.contactInformation').toUpperCase()} />
      <CardBody>
        <ContactInformationDetails className={styles.section} />
      </CardBody>
    </Card>
  );
};

export default ContactInformationCard;
