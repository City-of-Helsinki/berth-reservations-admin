import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import Table, { Column, COLUMN_WIDTH } from '../../../common/table/Table';
import BerthDetails from '../../berthDetails/BerthDetailsContainer';
import styles from './berthOffer.module.scss';
import { isSuitableBerthLength } from '../utils';
import TableFilters from '../../../common/tableFilters/TableFilters';
import TableTools from './tableTools/TableTools';
import Button from '../../../common/button/Button';
import InternalLink from '../../../common/internalLink/InternalLink';
import { formatDimension } from '../../../common/utils/format';
import { BerthData, PierTab } from '../types';
import { ApplicationStatus } from '../../../@types/__generated__/globalTypes';
import { Boat } from '../../../common/boatCard/types';

export interface BerthOfferTableProps {
  application?: {
    date: string;
    status: ApplicationStatus;
    type: string;
  } | null;
  boat?: Boat;
  isSubmitting: boolean;
  piersIdentifiers: PierTab[];
  tableData: BerthData[];
  handleClickSelect(berth: BerthData): void;
  handleReturn(): void;
  setIsBerthChosen(value: BerthData | null): void;
}

type ColumnType = Column<BerthData>;

const LENGTH_ACCESSOR = 'length';

const BerthOfferTable = ({
  application,
  boat,
  handleClickSelect,
  handleReturn,
  isSubmitting,
  piersIdentifiers,
  setIsBerthChosen,
  tableData,
}: BerthOfferTableProps) => {
  const { t, i18n } = useTranslation();

  const columns: ColumnType[] = [
    {
      Cell: ({ row }) => (
        <Button
          onClick={useCallback(() => {
            if (isSuitableBerthLength(Number(row.original.length), Number(boat?.boatLength ?? 0)))
              return handleClickSelect(row.original);

            return setIsBerthChosen(row.original);
          }, [row])}
          disabled={!row.original.isActive || isSubmitting}
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
    <Table
      data={tableData}
      columns={columns}
      renderSubComponent={(row) => <BerthDetails id={row.original.id} />}
      getCellProps={(cell) => ({
        className: classNames({
          [styles.highlight]:
            cell.column.id === LENGTH_ACCESSOR &&
            !isSuitableBerthLength(Number(cell?.value), Number(boat?.boatLength ?? 0)),
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
      renderTableToolsTop={() => <TableTools application={application} handleReturn={handleReturn} />}
      renderEmptyStateRow={() => <p>{t('offer.berthDetails.noSuitableBerths')}</p>}
    />
  );
};

export default BerthOfferTable;
