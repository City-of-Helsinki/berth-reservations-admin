import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../card/Card';
import CardHeader from '../cardHeader/CardHeader';
import CardBody from '../cardBody/CardBody';
import Section from '../section/Section';
import InternalLink from '../internalLink/InternalLink';
import styles from './actionHistoryCard.module.scss';
import { actionHistoryFeatureFlag } from '../utils/featureFlags';

const ActionHistoryCard = () => {
  const { t } = useTranslation();

  return actionHistoryFeatureFlag() ? (
    <Card className={styles.actionHistoryCard}>
      <CardHeader title={t('actionHistoryCard.title').toUpperCase()} />
      <CardBody className={styles.cardBody}>
        <Section title={t('actionHistoryCard.recentActions').toUpperCase()} className={styles.section}>
          Placeholder
        </Section>
        <div className={styles.linkRow}>
          <InternalLink to={'/'}>{t('actionHistoryCard.showFullHistory')}</InternalLink>
        </div>
      </CardBody>
    </Card>
  ) : null;
};

export default ActionHistoryCard;
