import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import Table, { Column, COLUMN_WIDTH } from '../../../common/table/Table';
import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import { Boat } from '../../../common/boatCard/types';
import InternalLink from '../../../common/internalLink/InternalLink';
import Button from '../../../common/button/Button';
import { formatDimension } from '../../../common/utils/format';
import styles from '../../berthOffer/components/berthOffer.module.scss';
import TableFilters from '../../../common/tableFilters/TableFilters';
import OfferTableTools from '../../../common/offerTableTools/OfferTableTools';
import { PlaceData, SectionTab } from '../types';
import WinterStoragePlaceDetailsContainer from '../../winterStoragePlaceDetails/WinterStoragePlaceDetailsContainer';
import { isPlaceSuitableForBoat } from '../utils';

export interface WinterStorageOfferTableProps {
  application?: {
    date: string;
    status: ApplicationStatus;
    type: string;
  } | null;
  boat?: Boat;
  isSubmitting: boolean;
  sectionsIdentifiers: SectionTab[];
  tableData: PlaceData[];
  handleReturn(): void;
  handleSelect(value: PlaceData | null): void;
}

type ColumnType = Column<PlaceData>;

const LENGTH_ACCESSOR = 'length';

const WinterStorageOfferTable = ({
  application,
  boat,
  handleReturn,
  handleSelect,
  isSubmitting,
  sectionsIdentifiers,
  tableData,
}: WinterStorageOfferTableProps) => {
  const { t, i18n } = useTranslation();

  const columns: ColumnType[] = [
    {
      Cell: ({ row }) => (
        <Button
          onClick={useCallback(() => {
            handleSelect(row.original);
          }, [row])}
          disabled={!row.original.isActive || !row.original.isAvailable || isSubmitting}
        >
          {t('common.select')}
        </Button>
      ),
      Header: t('common.terminology.selection') || '',
      accessor: 'id',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
      disableFilters: true,
      disableSortBy: true,
    },
    {
      Cell: ({ cell }) => (
        <InternalLink to={`/winter-storage-areas/${cell.row.original.areaId}}`}>{cell.value}</InternalLink>
      ),
      Header: t('common.terminology.winterStorageArea') || '',
      accessor: 'area',
      width: COLUMN_WIDTH.XL,
      minWidth: COLUMN_WIDTH.XL,
    },
    {
      Header: t('common.terminology.section') || '',
      accessor: 'section',
      filter: 'exactText',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Header: t('common.terminology.place') || '',
      accessor: 'number',
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
  ];

  return (
    <Table
      data={tableData}
      columns={columns}
      renderSubComponent={(row) => <WinterStoragePlaceDetailsContainer id={row.original.id} />}
      getCellProps={(cell) => ({
        className: classNames({
          [styles.highlight]: cell.column.id === LENGTH_ACCESSOR && !isPlaceSuitableForBoat(cell.row.original, boat),
        }),
      })}
      renderMainHeader={(props) => (
        <TableFilters
          activeFilters={props.state.filters.map((filter) => filter.value)}
          filters={sectionsIdentifiers}
          handleSetFilter={(filter) => props.setFilter('section', filter)}
          filterPrefix={t('common.terminology.section')}
        />
      )}
      renderTableToolsTop={() => (
        <OfferTableTools
          application={application}
          handleReturn={handleReturn}
          title={t('common.terminology.winterStoragePlaces').toUpperCase()}
        />
      )}
      renderEmptyStateRow={() => <p>{t('offer.winterStoragePlaceDetails.noSuitablePlaces')}</p>}
      loading={isSubmitting}
    />
  );
};

export default WinterStorageOfferTable;
