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
  choices: Array<HarborChoice> | Array<WinterStorageAreaChoice>;
  applicationId: string;
  customerId?: string;
  handleNoPlacesAvailable?: () => void;
}

const isHarborChoice = (choice: Choice): choice is HarborChoice => (choice as HarborChoice).harbor !== undefined;

const ApplicationChoicesList = ({
  choices,
  applicationId,
  customerId,
  handleNoPlacesAvailable,
}: ApplicationChoicesListProps) => {
  const { t } = useTranslation();
  const routerQuery = new URLSearchParams(useLocation().search);

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

            routerQuery.set(isHarborChoice(choice) ? 'harbor' : 'winter-storage-area', target);

            return (
              <ListItem key={i}>
                <Text>
                  {`${t('applicationDetails.applicationChoicesList.choice')} 
                      ${i + 1}: `}
                </Text>
                {!!customerId ? (
                  <InternalLink to={`/offer/${applicationId}?${routerQuery}`}>{targetName}</InternalLink>
                ) : (
                  <Text>{targetName}</Text>
                )}
              </ListItem>
            );
          })}
      </List>
      {handleNoPlacesAvailable && (
        <div className={styles.actions}>
          <ButtonWithConfirmation
            buttonSize="small"
            buttonText={t('applicationDetails.applicationChoicesList.noPlaces')}
            buttonVariant="danger"
            infoText={t('applicationDetails.applicationChoicesList.noPlacesModalInfo')}
            modalTitle={t('applicationDetails.applicationChoicesList.noPlacesModalTitle')}
            onCancelText={t('common.cancel')}
            onConfirm={() => handleNoPlacesAvailable()}
            onConfirmText={t('common.save')}
          />
        </div>
      )}
    </Section>
  );
};

export default ApplicationChoicesList;
