import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Table, { Column } from '../../common/table/Table';
import { HarborData } from './utils';
import {
  IconFence,
  IconTrash,
  IconWaterTap,
  IconPlug,
  IconStreetLight,
} from '../../common/icons';
import HarborDetails from './harborDetails/HarborDetails';
import InternalLink from '../../common/internalLink/InternalLink';
import styles from '../../common/icons/icon.module.scss';

export interface IconProps {
  disabled?: boolean;
  outlined?: boolean;
  width?: string;
  height?: string;
  size?: 'small' | 'standard' | 'large';
  color?: 'standard' | 'brand' | 'critical' | 'secondary' | 'info';
}

const IconOutline: React.SFC<IconProps> = ({ children, disabled }) => {
  return (
    <div
      className={classNames(styles.icon, styles.outlined, {
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </div>
  );
};

type ColumnType = Column<HarborData> & { accessor: keyof HarborData };

export interface HarborsPageProps {
  data?: Array<HarborData>;
}

const HarborsList: React.FC<HarborsPageProps> = ({ data = [] }) => {
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
        <IconOutline disabled={!cell.value}>
          <IconPlug
            className={classNames(styles.icon, styles.outline, {
              [styles.disabled]: !cell.value,
            })}
          />
        </IconOutline>
      ),
      Header: () => (
        <IconOutline disabled={false}>
          <IconPlug className={classNames(styles.icon, styles.outline)} />
        </IconOutline>
      ),
      accessor: 'electricity',
    },
    {
      Cell: ({ cell }) => (
        <IconOutline disabled={!cell.value}>
          <IconFence
            className={classNames(styles.icon, styles.outline, {
              [styles.disabled]: !cell.value,
            })}
          />
        </IconOutline>
      ),
      Header: () => (
        <IconOutline disabled={false}>
          <IconFence className={classNames(styles.icon, styles.outline)} />
        </IconOutline>
      ),
      accessor: 'gate',
    },
    {
      Cell: ({ cell }) => (
        <IconOutline disabled={!cell.value}>
          <IconStreetLight
            className={classNames(styles.icon, styles.outline, {
              [styles.disabled]: !cell.value,
            })}
          />
        </IconOutline>
      ),
      Header: () => (
        <IconOutline disabled={false}>
          <IconStreetLight
            className={classNames(styles.icon, styles.outline)}
          />
        </IconOutline>
      ),
      accessor: 'lighting',
    },
    {
      Cell: ({ cell }) => (
        <IconOutline disabled={!cell.value}>
          <IconWaterTap
            className={classNames(styles.icon, styles.outline, {
              [styles.disabled]: !cell.value,
            })}
          />
        </IconOutline>
      ),
      Header: () => (
        <IconOutline disabled={false}>
          <IconWaterTap className={classNames(styles.icon, styles.outline)} />
        </IconOutline>
      ),
      accessor: 'water',
    },
    {
      Cell: ({ cell }) => (
        <IconOutline disabled={!cell.value}>
          <IconTrash
            className={classNames(styles.icon, styles.outline, {
              [styles.disabled]: !cell.value,
            })}
          />
        </IconOutline>
      ),
      Header: () => (
        <IconOutline disabled={false}>
          <IconTrash className={classNames(styles.icon, styles.outline)} />
        </IconOutline>
      ),
      accessor: 'wasteCollection',
    },
  ];

  return (
    <div className={styles.harborsPage}>
      <Table
        data={data}
        columns={columns}
        renderSubComponent={row => <HarborDetails {...row.original} />}
        renderMainHeader={() => t('harbors.tableHeaders.mainHeader')}
        canSelectRows
      />
    </div>
  );
};

export default HarborsList;
