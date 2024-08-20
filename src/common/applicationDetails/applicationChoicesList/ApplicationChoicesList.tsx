import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import Section from '../../section/Section';
import List from '../../list/List';
import ListItem from '../../list/ListItem';
import Text from '../../text/Text';
import InternalLink from '../../internalLink/InternalLink';
import ButtonWithConfirmation from '../../buttonWithConfirmation/ButtonWithConfirmation';
import styles from './applicationChoicesList.module.scss';
import { ApplicationTypeEnum } from '../types';

interface Choice {
  priority: number;
}

export interface HarborChoice extends Choice {
  harborName: string;
  harbor: string;
}

export interface WinterStorageAreaChoice extends Choice {
  winterStorageAreaName: string;
  winterStorageArea: string;
}

interface ApplicationChoicesListProps {
  applicationId: string;
  applicationType: ApplicationTypeEnum;
  choices: Array<HarborChoice> | Array<WinterStorageAreaChoice>;
  customerId?: string;
  disableChoices?: boolean;
  handleNoPlacesAvailable?: (id: string) => void;
}

const isHarborChoice = (choice: Choice): choice is HarborChoice => (choice as HarborChoice).harbor !== undefined;

const ApplicationChoicesList = ({
  applicationId,
  applicationType,
  choices,
  customerId,
  disableChoices,
  handleNoPlacesAvailable,
}: ApplicationChoicesListProps) => {
  const { t } = useTranslation();
  const routerQuery = new URLSearchParams(useLocation().search);
  const getOfferPageUrl = () => {
    switch (applicationType) {
      case ApplicationTypeEnum.BERTH:
        return '/berth-offer';
      case ApplicationTypeEnum.BERTH_SWITCH:
        return '/berth-switch-offer';
      case ApplicationTypeEnum.WINTER_STORAGE:
        return '/winter-storage-offer';
    }
  };

  if (choices.length === 0) {
    return null;
  }

  return (
    <Section
      title={
        isHarborChoice(choices[0])
          ? t('applicationDetails.applicationChoicesList.selectedPorts')
          : t('applicationDetails.applicationChoicesList.selectedWinterStorageAreas')
      }
    >
      <List noBullets>
        {[...choices]
          .sort((choiceA, choiceB) => choiceA.priority - choiceB.priority)
          .map((choice, i) => {
            const target = isHarborChoice(choice) ? choice.harbor : choice.winterStorageArea;
            const targetName = isHarborChoice(choice) ? choice.harborName : choice.winterStorageAreaName;

            routerQuery.set('application', applicationId);
            routerQuery.set(isHarborChoice(choice) ? 'harbor' : 'winterStorageArea', target);

            return (
              <ListItem key={i} className={styles.listItem}>
                <Text>
                  {`${t('applicationDetails.applicationChoicesList.choice')} 
                      ${i + 1}: `}
                </Text>
                {!!customerId && !disableChoices ? (
                  <InternalLink to={`${getOfferPageUrl()}?${routerQuery}`}>{targetName}</InternalLink>
                ) : (
                  <Text>{targetName}</Text>
                )}
              </ListItem>
            );
          })}
      </List>
      {customerId && handleNoPlacesAvailable && !disableChoices && (
        <div className={styles.actions}>
          <ButtonWithConfirmation
            buttonSize="small"
            buttonText={t('applicationDetails.applicationChoicesList.noPlaces')}
            buttonVariant="danger"
            infoText={t('applicationDetails.applicationChoicesList.noPlacesModalInfo')}
            modalTitle={t('applicationDetails.applicationChoicesList.noPlacesModalTitle')}
            onCancelText={t('common.cancel')}
            onConfirm={() => handleNoPlacesAvailable(applicationId)}
            onConfirmText={t('common.save')}
          />
        </div>
      )}
    </Section>
  );
};

export default ApplicationChoicesList;
