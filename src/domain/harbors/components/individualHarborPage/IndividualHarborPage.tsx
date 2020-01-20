import React from 'react';
import { TFunction } from 'i18next';
import { Column } from 'react-table';

import styles from './individualHarborPage.module.scss';
import Table from '../../../../common/table/Table';
import HarborProperties from '../harborProperties/HarborProperties';
import { IndividualHarborData } from '../../harborUtils';

export type Berth = {
  number: string;
  identifier: string;
  length: string;
  width: string;
  mooring: string;
};

type ColumnType = Column<Berth> & {
  accessor: keyof Berth;
};

interface Props {
  tableData: Berth[];
  t: TFunction;
  harbor: IndividualHarborData;
}

const IndividualHarborPage: React.SFC<Props> = ({ tableData, t, harbor }) => {
  const columns: ColumnType[] = [
    {
      Header: t('individualHarbor.tableHeaders.number'),
      accessor: 'number',
    },
    {
      Header: t('individualHarbor.tableHeaders.identifier'),
      accessor: 'identifier',
    },
    {
      Header: t('individualHarbor.tableHeaders.length'),
      accessor: 'length',
    },
    {
      Header: t('individualHarbor.tableHeaders.width'),
      accessor: 'width',
    },
    {
      Header: t('individualHarbor.tableHeaders.mooring'),
      accessor: 'mooring',
    },
  ];

  return (
    <div className={styles.individualHarborPage}>
      <div className={styles.harborsPage}>
        <HarborProperties
          name={harbor.name || ''}
          imageUrl={harbor.imageFile || ''}
          servicemapId={harbor.servicemapId || ''}
          address={`${harbor.streetAddress} ${harbor.zipCode} ${harbor.municipality}`}
          properties={{
            electricity: harbor.electricity !== undefined,
            gate: harbor.gate !== undefined,
            lighting: harbor.lighting !== undefined,
            maximumWidth: harbor.maximumWidth || 0,
            numberOfPlaces: harbor.numberOfPlaces || 0,
            wasteCollection: harbor.wasteCollection !== undefined,
            water: harbor.water !== undefined,
          }}
        />
        <Table
          data={tableData}
          columns={columns}
          renderMainHeader={() => t('individualHarbor.tableHeaders.mainHeader')}
          canSelectRows
        />
      </div>
    </div>
  );
};

export default IndividualHarborPage;
