import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../section/Section';
import LabelValuePair from '../labelValuePair/LabelValuePair';
import Grid from '../grid/Grid';
import styles from './applicationDetails.module.scss';
import Text from '../text/Text';
import { formatDate, formatDimension, formatWeight } from '../utils/format';
import { APPLICATION_STATUS } from '../utils/constants';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import PrivateCustomerDetails, { PrivateCustomerDetailsProps } from '../privateCustomerDetails/PrivateCustomerDetails';
import OrganizationCustomerDetails, {
  OrganizationCustomerDetailsProps,
} from '../organizationCustomerDetails/OrganizationCustomerDetails';
import Checkbox from '../checkbox/Checkbox';
import ApplicationChoicesList, {
  HarborChoice,
  WinterStorageAreaChoice,
} from './applicationChoicesList/ApplicationChoicesList';
import { berthAccessibilityFeatureFlag, queueFeatureFlag } from '../utils/featureFlags';
import DeleteButton from '../deleteButton/DeleteButton';
import { canDeleteLease } from '../utils/leaseUtils';
import BerthContractDetails from '../../features/contractDetails/BerthContractDetailsContainer';
import { ApplicationTypeEnum, BerthLease, BerthSwitch, Lease, SummaryInformation, WinterStorageLease } from './types';
import WinterStorageContractDetailsContainer from '../../features/contractDetails/WinterStorageContractDetailsContainer';

export interface ApplicationDetailsProps {
  accessibilityRequired?: boolean;
  applicant?: PrivateCustomerDetailsProps | OrganizationCustomerDetailsProps;
  applicationCode: string;
  applicationType: ApplicationTypeEnum;
  berthSwitch?: BerthSwitch | null;
  berthSwitchOffered?: boolean;
  boatDraught?: number | null;
  boatLength: number;
  boatModel: string | null;
  boatName: string | null;
  boatRegistrationNumber: string | null;
  boatType?: string | null;
  boatWeight?: number | null;
  boatWidth: number;
  choices: Array<HarborChoice> | Array<WinterStorageAreaChoice>;
  createdAt: string;
  customerId?: string;
  handleDeleteLease?: (id: string) => void;
  handleNoPlacesAvailable?: (id: string) => void;
  id: string;
  isDeletingLease?: boolean;
  lease?: Lease | null;
  queue: number;
  status: ApplicationStatus;
  summaryInformation?: SummaryInformation;
}

const ApplicationDetails = ({
  accessibilityRequired,
  applicant,
  applicationCode,
  applicationType,
  berthSwitch,
  berthSwitchOffered,
  boatDraught,
  boatLength,
  boatModel,
  boatName,
  boatRegistrationNumber,
  boatType,
  boatWeight,
  boatWidth,
  choices,
  createdAt,
  customerId,
  handleDeleteLease,
  handleNoPlacesAvailable,
  id,
  isDeletingLease,
  lease,
  queue,
  status,
  summaryInformation,
}: ApplicationDetailsProps) => {
  const { t, i18n } = useTranslation();

  const renderPlaceTitle = () => {
    switch (applicationType) {
      case ApplicationTypeEnum.BERTH:
      case ApplicationTypeEnum.BERTH_SWITCH:
        return [(lease as BerthLease).harborName, (lease as BerthLease).pierIdentifier, (lease as BerthLease).berthNum]
          .filter(Boolean)
          .join(' ');
      case ApplicationTypeEnum.WINTER_STORAGE:
        return [
          (lease as WinterStorageLease).areaName,
          (lease as WinterStorageLease).sectionIdentifier,
          (lease as WinterStorageLease).placeNum,
        ]
          .filter(Boolean)
          .join(' ');
    }
  };

  return (
    <Grid colsCount={3}>
      <div>
        <Section title={t('applicationList.applicationDetails.application')}>
          <LabelValuePair
            label={t('applicationList.applicationDetails.applicationType')}
            value={
              berthSwitch
                ? t('applicationList.applicationType.switchApplication')
                : t('applicationList.applicationType.newApplication')
            }
          />
          <LabelValuePair
            label={t('applicationList.applicationDetails.receivedDate')}
            value={formatDate(createdAt, i18n.language, true)}
          />
          {queueFeatureFlag() ? (
            <LabelValuePair label={t('applicationList.applicationDetails.queueNumber')} value={`${queue}`} />
          ) : null}
          <LabelValuePair
            label={t('applicationList.applicationDetails.status')}
            value={t(APPLICATION_STATUS[status]?.label)}
          />
          <LabelValuePair label={t('applicationList.applicationDetails.applicationCode')} value={applicationCode} />
        </Section>
        {berthSwitch && (
          <Section title={t('applicationList.applicationDetails.currentBerth')}>
            <LabelValuePair
              label={t('applicationList.applicationDetails.portAndBerth')}
              value={`${berthSwitch.harborName} ${berthSwitch.pierIdentifier} ${berthSwitch.berthNum}`}
            />
            {berthSwitch.reason !== null && (
              <LabelValuePair label={t('applicationList.applicationDetails.reason')} value={`${berthSwitch.reason}`} />
            )}
          </Section>
        )}
        {applicant &&
          ('organization' in applicant ? (
            <OrganizationCustomerDetails
              {...applicant}
              title={t('applicationList.applicationDetails.applicantCompanyInformation').toUpperCase()}
            />
          ) : (
            <PrivateCustomerDetails
              {...applicant}
              title={t('applicationList.applicationDetails.applicantInformation').toUpperCase()}
            />
          ))}
      </div>
      <div>
        <Section title={t('applicationList.applicationDetails.boatInfo')}>
          <LabelValuePair label={t('applicationList.applicationDetails.boatType')} value={boatType} />
          <LabelValuePair
            label={t('applicationList.applicationDetails.registrationNumber')}
            value={boatRegistrationNumber}
          />
        </Section>
        <Section>
          <LabelValuePair
            label={t('applicationList.applicationDetails.boatWidth')}
            value={formatDimension(boatWidth, i18n.language)}
          />
          <LabelValuePair
            label={t('applicationList.applicationDetails.boatLength')}
            value={formatDimension(boatLength, i18n.language)}
          />
          <LabelValuePair
            label={t('applicationList.applicationDetails.boatDepth')}
            value={formatDimension(boatDraught, i18n.language)}
          />
          <LabelValuePair
            label={t('applicationList.applicationDetails.boatWeight')}
            value={formatWeight(boatWeight, i18n.language)}
          />
        </Section>
        <Section>
          <LabelValuePair label={t('applicationList.applicationDetails.boatName')} value={boatName} />
          <LabelValuePair label={t('applicationList.applicationDetails.boatBrand')} value={boatModel} />
        </Section>
        {summaryInformation && (
          <Section title={t('applicationList.applicationDetails.winterStorageApplicationSummary')}>
            {summaryInformation.acceptBoatingNewsletter && (
              <div>
                <Text>{t('applicationList.applicationDetails.acceptBoatingNewsletter')}</Text>
              </div>
            )}
            {summaryInformation.acceptFitnessNews && (
              <div>
                <Text>{t('applicationList.applicationDetails.acceptFitnessNews')}</Text>
              </div>
            )}
            {summaryInformation.acceptLibraryNews && (
              <div>
                <Text>{t('applicationList.applicationDetails.acceptLibraryNews')}</Text>
              </div>
            )}
            {summaryInformation.acceptOtherCultureNews && (
              <div>
                <Text>{t('applicationList.applicationDetails.acceptOtherCultureNews')}</Text>
              </div>
            )}
          </Section>
        )}
      </div>
      <div>
        {!!lease ? (
          <>
            <Section title={t('applicationList.applicationDetails.connectedLease').toUpperCase()}>
              {renderPlaceTitle()}
              {handleDeleteLease && canDeleteLease(lease.status) && (
                <DeleteButton
                  buttonText={t('applicationList.applicationDetails.deleteLease')}
                  onConfirm={() => handleDeleteLease(lease.id)}
                  disabled={isDeletingLease}
                  buttonClassName={styles.deleteButton}
                  buttonStyle="flat"
                />
              )}
            </Section>
            {applicationType === ApplicationTypeEnum.BERTH || applicationType === ApplicationTypeEnum.BERTH_SWITCH ? (
              <BerthContractDetails leaseId={lease.id} />
            ) : (
              <WinterStorageContractDetailsContainer leaseId={lease.id} />
            )}
          </>
        ) : (
          <ApplicationChoicesList
            applicationId={id}
            applicationType={applicationType}
            choices={choices}
            customerId={customerId}
            disableChoices={berthSwitchOffered}
            handleNoPlacesAvailable={handleNoPlacesAvailable}
          />
        )}
        {berthAccessibilityFeatureFlag() && (
          <Section>
            <Checkbox
              id={'accessible'}
              label={t('applicationList.applicationDetails.accessible')}
              checked={accessibilityRequired}
              readOnly
              className={styles.accessibleCheckbox}
            />
          </Section>
        )}
      </div>
    </Grid>
  );
};

export default ApplicationDetails;
