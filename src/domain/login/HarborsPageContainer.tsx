import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
// For some reason eslint import plugin is unable to detect the following type
// eslint-disable-next-line
import { Column } from 'react-table';

import { HARBORS_QUERY } from '../harbors/harborsQuery';
import Table from '../../common/table/Table';
import { getHarborsData, HarborData } from '../harbors/utils';
import { HARBORS } from '../harbors/__generated__/HARBORS';
import Icon from '../../common/icon/Icon';
import HarborDetails from '../harbors/harborDetails/HarborDetails';
import HarborsPage from '../harbors/HarborsPage';
import InternalLink from '../../common/internalLink/InternalLink';
import { TOGGLE_CART } from '../../apollo/resolvers';
import { GET_LOCAL_STATE } from '../debugPage/DebugPage';

type ColumnType = Column<HarborData> & { accessor: keyof HarborData };

const HarborsContainer: React.FC = () => {
  const { loading, error, data } = useQuery<HARBORS>(HARBORS_QUERY);

  const { t } = useTranslation();
  const columns: ColumnType[] = [
    {
      Cell: ({ cell }) => (
        <InternalLink to={`harbors/${cell.row.original.id}}`}>
          {cell.value}
        </InternalLink>
      ),
      Header: t('harbors.tableHeaders.harbor'),
      accessor: 'name',
    },
    {
      Cell: ({ cell }) => {
        const [mutate] = useMutation(TOGGLE_CART, {
          refetchQueries: [
            {
              query: GET_LOCAL_STATE,
              variables: { launchId: cell.row.original.id },
            },
          ],
          variables: { launchId: cell.row.original.id },
        });

        return <button onClick={() => mutate()}>select</button>;
      },
      Header: t('harbors.tableHeaders.places'),
      accessor: 'numberOfPlaces',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="plug"
          outlined
          color={!!cell.value ? 'secondary' : 'standard'}
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
          color={!!cell.value ? 'secondary' : 'standard'}
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
          color={!!cell.value ? 'secondary' : 'standard'}
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
          color={!!cell.value ? 'secondary' : 'standard'}
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
          color={!!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="trash" outlined />,
      accessor: 'wasteCollection',
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const tableData = getHarborsData(data);

  return (
    <HarborsPage>
      <Table
        data={tableData}
        columns={columns}
        renderSubComponent={row => <HarborDetails {...row.original} />}
        renderMainHeader={() => t('harbors.tableHeaders.mainHeader')}
        canSelectRows
      />
    </HarborsPage>
  );
};

export default HarborsContainer;
