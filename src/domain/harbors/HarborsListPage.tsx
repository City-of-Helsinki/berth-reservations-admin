import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import { HARBORS_QUERY } from './harborQueries';
import Table, { Column } from '../../common/table/Table';
import { getHarborsData, HarborData } from './harborUtils';
import { HARBORS } from './__generated__/HARBORS';
import Icon from '../../common/icon/Icon';
import HarborDetails from './components/harborDetails/HarborDetails';
import InternalLink from '../../common/internalLink/InternalLink';
import styles from './harbor.module.scss';

type ColumnType = Column<HarborData> & { accessor: keyof HarborData };

const HarborsPage: React.SFC = ({ children }) => {
  return <div className={styles.harborsPage}>{children}</div>;
};

const HarborsContainer: React.FC = () => {
  const { loading, error, data } = useQuery<HARBORS>(HARBORS_QUERY);
  const { t } = useTranslation();
  const columns: ColumnType[] = [
    {
      Cell: ({ cell }) => (
        <InternalLink to={`/harbors/${cell.row.original.id}}`}>
          {cell.value}
        </InternalLink>
      ),
      Header: t('harbors.tableHeaders.harbor'),
      accessor: 'name',
    },
    {
      Header: t('harbors.tableHeaders.places'),
      accessor: 'numberOfPlaces',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="plug"
          outlined
          color={!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="plug" outlined />,
      accessor: 'electricity',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="fence"
          outlined
          color={!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="fence" outlined />,
      accessor: 'gate',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="streetLight"
          outlined
          color={!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="streetLight" outlined />,
      accessor: 'lighting',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="waterTap"
          outlined
          color={!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="waterTap" outlined />,
      accessor: 'water',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="trash"
          outlined
          color={!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="trash" outlined />,
      accessor: 'wasteCollection',
    },
  ];

  if (error) return <p>Error</p>;

  const tableData = getHarborsData(data);

  return (
    <LoadingSpinner isLoading={loading}>
      <HarborsPage>
        <Table
          data={tableData}
          columns={columns}
          renderSubComponent={row => <HarborDetails {...row.original} />}
          renderMainHeader={() => t('harbors.tableHeaders.mainHeader')}
          canSelectRows
        />
      </HarborsPage>
    </LoadingSpinner>
  );
};

export default HarborsContainer;
