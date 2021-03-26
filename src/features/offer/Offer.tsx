import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './offer.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import HarborCard, { HarborCardProps } from '../../common/harborCard/HarborCard';
import BoatCard from '../../common/boatCard/BoatCard';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import BerthDetails from '../berthDetails/BerthDetails';
import TableFilters from '../../common/tableFilters/TableFilters';
import TableTools from './tableTools/TableTools';
import Button from '../../common/button/Button';
import InternalLink from '../../common/internalLink/InternalLink';
import { formatDimension } from '../../common/utils/format';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import { Boat } from '../../common/boatCard/types';
import ConfirmationModal from '../../common/confirmationModal/ConfirmationModal';
import { BerthData, PierTab } from './types';
import { isSuitableBerthLength } from './utils';

interface OfferProps {
  applicationDate: string;
  applicationStatus: ApplicationStatus;
  applicationType: string;
  boat: Boat | null;
  handleClickSelect: (berth: BerthData) => void;
  handleReturn: () => void;
  harbor: HarborCardProps | null;
  isSubmitting: boolean;
  piersIdentifiers: PierTab[];
  tableData: BerthData[];
}

type ColumnType = Column<BerthData>;

const LENGTH_ACCESSOR = 'length';

const Offer = ({
  applicationDate,
  applicationStatus,
  applicationType,
  boat,
  handleClickSelect,
  handleReturn,
  harbor,
  isSubmitting,
  piersIdentifiers,
  tableData,
}: OfferProps) => {
  const { t, i18n } = useTranslation();

  const [isBerthChosen, setIsBerthChosen] = useState<BerthData | null>(null);

  const columns: ColumnType[] = [
    {
      Cell: ({ row }) => (
        <Button
          onClick={useCallback(() => {
            if (isSuitableBerthLength(Number(row.original.length), Number(boat?.boatLength)))
              return handleClickSelect(row.original);

            return setIsBerthChosen(row.original);
          }, [row])}
          disabled={isSubmitting}
        >
          {t('offer.tableCells.select')}
        </Button>
      ),
      Header: t('common.terminology.selection') || '',
      accessor: 'berthId',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
      disableFilters: true,
      disableSortBy: true,
    },
    {
      Cell: ({ cell }) => <InternalLink to={`/harbors/${cell.row.original.harborId}}`}>{cell.value}</InternalLink>,
      Header: t('common.terminology.harbor') || '',
      accessor: 'harbor',
      width: COLUMN_WIDTH.XL,
      minWidth: COLUMN_WIDTH.XL,
    },
    {
      Header: t('common.terminology.pier') || '',
      accessor: 'pier',
      filter: 'exactText',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Header: t('common.terminology.berth') || '',
      accessor: 'berth',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }) => formatDimension(cell.value, i18n.language),
      Header: t('common.terminology.width') || '',
      accessor: 'width',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }) => formatDimension(cell.value, i18n.language),
      Header: t('common.terminology.length') || '',
      accessor: LENGTH_ACCESSOR,
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }) => formatDimension(cell.value, i18n.language),
      Header: t('common.terminology.draught') || '',
      accessor: 'draught',
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }) => t([`common.mooringTypes.${cell.value}`, cell.value]),
      Header: t('common.terminology.mooringType') || '',
      accessor: 'mooringType',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
  ];

  return (
    <>
      <PageContent className={styles.offer}>
        <PageTitle title={t('offer.title')} />
        {harbor && <HarborCard {...harbor} className={styles.card} />}
        {boat && <BoatCard boat={boat} />}
        <Table
          data={tableData}
          columns={columns}
          renderSubComponent={(row) => {
            const { properties, leases, comment } = row.original;
            return <BerthDetails leases={leases} comment={comment} {...properties} />;
          }}
          getCellProps={(cell) => ({
            className: classNames({
              [styles.highlight]:
                cell.column.id === LENGTH_ACCESSOR &&
                !isSuitableBerthLength(Number(cell?.value), Number(boat?.boatLength)),
            }),
          })}
          renderMainHeader={(props) => (
            <TableFilters
              activeFilters={props.state.filters.map((filter) => filter.value)}
              filters={piersIdentifiers}
              handleSetFilter={(filter) => props.setFilter('pier', filter)}
              filterPrefix={t('common.terminology.pier')}
            />
          )}
          renderTableToolsTop={() => (
            <TableTools
              applicationDate={applicationDate}
              applicationType={applicationType}
              applicationStatus={applicationStatus}
              handleReturn={handleReturn}
            />
          )}
          renderEmptyStateRow={() => <p>{t('offer.berthDetails.noSuitableBerths')}</p>}
        />
      </PageContent>
      <ConfirmationModal
        isOpen={!!isBerthChosen}
        title={t('offer.confirmation.title')}
        infoText={t('offer.confirmation.info')}
        confirmButtonVariant="primary"
        onCancelText={t('common.cancel')}
        onCancel={() => setIsBerthChosen(null)}
        onConfirmText={t('common.yes')}
        onConfirm={() => {
          isBerthChosen && handleClickSelect(isBerthChosen);
          setIsBerthChosen(null);
        }}
      />
    </>
  );
};

export default Offer;
