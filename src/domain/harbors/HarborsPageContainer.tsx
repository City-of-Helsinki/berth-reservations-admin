import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
// For some reason eslint import plugin is unable to detect the following type
// eslint-disable-next-line
import { Column } from 'react-table';

import { HARBORS_QUERY } from './harborsQuery';
import Table from '../../common/table/Table';
import { getHarborsData, HarborData } from './utils';
import { HARBORS } from './__generated__/HARBORS';
import Card from '../../common/card/Card';
import Text from '../../common/text/Text';
import Paragraph from '../../common/paragraph/Paragraph';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import Box from '../../common/box/Box';
import Icon from '../../common/icon/Icon';

interface Props2 {
  name?: string;
  imageFile?: string;
  streetAddress?: string;
  zipCode?: React.ReactNode;
  municipality?: string;
  wwwUrl?: string;
  servicemapId?: string;
}

interface Props {
  data: Props2;
}

const HarborDetails = ({ data }: Props) => {
  const address = `${data.streetAddress} ${data.zipCode} ${data.municipality}`;
  const servicemapUrl = `http://palvelukartta.hel.fi/unit/${data.servicemapId}`;

  const Harbor1 = () => (
    <Card>
      <Paragraph>
        <figure>
          <img src={data.imageFile} width="50%" alt={data.name}></img>
          <figcaption>{data.name}</figcaption>
        </figure>
      </Paragraph>
      <Paragraph title="Osoite">
        <Text color="brand" size="xs">
          {address}
        </Text>
      </Paragraph>
      <Paragraph>
        <Text color="brand" size="s">
          <a href={data.wwwUrl}>Toimipisteen nettisivut</a>
        </Text>
      </Paragraph>
      <Paragraph>
        <Text color="brand" size="s">
          Satamakartta (PDF)
        </Text>
      </Paragraph>
      <Paragraph>
        <Text color="brand" size="s">
          <a href={servicemapUrl}>Palvelukartta</a>
        </Text>
      </Paragraph>
    </Card>
  );

  const Harbor2 = () => (
    <Card>
      <Paragraph>
        <LabelValuePair label="Max leveys" value="2.5m - 4m" />
        <LabelValuePair
          label="Kiinnitys"
          value="Aisa-, Kävelyaisa- ja Peräpoijupaikkoja"
        />
        <LabelValuePair
          label="Päällikkö"
          value="Mikko Mallikas +358 00 000 000"
        />
        <LabelValuePair label="Huoltotiimi" value="Itäinen veneilytiimi" />
      </Paragraph>
    </Card>
  );

  const Harbor3 = () => (
    <Card>
      <Paragraph title="Viimeaikainen toiminta">
        <Text color="brand" size="xs">
          Ei mitään
        </Text>
      </Paragraph>
    </Card>
  );

  return (
    <Box>
      <Harbor1 />
      <Harbor2 />
      <Harbor3 />
    </Box>
  );
};

type ColumnType = Column<HarborData> & { accessor: keyof HarborData };

const HarborsContainer: React.FC = () => {
  const { loading, error, data } = useQuery<HARBORS>(HARBORS_QUERY);
  const { t } = useTranslation();
  const columns: ColumnType[] = [
    {
      Header: t('harbors.tableHeaders.harbor'),
      accessor: 'name',
    },
    {
      Header: t('harbors.tableHeaders.places'),
      accessor: 'numberOfPlaces',
    },
    {
      Cell: ({ cell }) => (
        <Icon name="plug" outlined color={!!cell.value ? 'gray' : 'black'} />
      ),
      Header: () => <Icon name="plug" outlined />,
      accessor: 'electricity',
    },
    {
      Cell: ({ cell }) => (
        <Icon name="fence" outlined color={!!cell.value ? 'gray' : 'black'} />
      ),
      Header: () => <Icon name="fence" outlined />,
      accessor: 'gate',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="streetLight"
          outlined
          color={!!cell.value ? 'gray' : 'black'}
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
          color={!!cell.value ? 'gray' : 'black'}
        />
      ),
      Header: () => <Icon name="waterTap" outlined />,
      accessor: 'water',
    },
    {
      Cell: ({ cell }) => (
        <Icon name="trash" outlined color={!!cell.value ? 'gray' : 'black'} />
      ),
      Header: () => <Icon name="trash" outlined />,
      accessor: 'wasteCollection',
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const tableData = getHarborsData(data);

  return (
    <Table
      data={tableData}
      columns={columns}
      renderSubComponent={row => <HarborDetails data={row.original} />}
      renderMainHeader={() => t('harbors.tableHeaders.mainHeader')}
      canSelectRows
    />
  );
};

export default HarborsContainer;
