import { useQuery } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BERTH_ASSIGNMENT_PLANS } from './__generated__/BERTH_ASSIGNMENT_PLANS';
import { BERTH_ASSIGNMENT_PLANS_QUERY } from './queries';
import { getAssignmentPlans } from './utils';
import PageContent from '../../common/pageContent/PageContent';
import PageTitle from '../../common/pageTitle/PageTitle';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import { AssignmentPlan } from './types';
import Button from '../../common/button/Button';

const AssignmentPlanner = () => {
  const { t } = useTranslation();
  const { data, loading } = useQuery<BERTH_ASSIGNMENT_PLANS>(BERTH_ASSIGNMENT_PLANS_QUERY);
  const [assignmentPlans, setAssignmentPlans] = useState<AssignmentPlan[]>([]);

  useEffect(() => {
    setAssignmentPlans(getAssignmentPlans(data));
  }, [data]);

  const columns: Column<AssignmentPlan>[] = [
    {
      Cell: ({ cell }) => (
        <Button
          onClick={() =>
            setAssignmentPlans(
              assignmentPlans.slice(
                0,
                assignmentPlans.findIndex((plan) => plan.id === cell.row.original.id)
              )
            )
          }
        >
          {t('assignmentPlanner.remove')}
        </Button>
      ),
      Header: '',
      accessor: 'id',
      width: COLUMN_WIDTH.S,
    },
    {
      Header: t('assignmentPlanner.tableHeaders.firstName') || '',
      accessor: 'firstName',
      width: COLUMN_WIDTH.S,
    },
    {
      Header: t('assignmentPlanner.tableHeaders.lastName') || '',
      accessor: 'lastName',
      width: COLUMN_WIDTH.S,
    },
    {
      Header: t('assignmentPlanner.tableHeaders.email') || '',
      accessor: 'email',
      width: COLUMN_WIDTH.M,
    },
    {
      Header: t('assignmentPlanner.tableHeaders.harborName') || '',
      accessor: 'harborName',
      width: COLUMN_WIDTH.S,
    },
    {
      Header: t('assignmentPlanner.tableHeaders.pierIdentifier') || '',
      accessor: 'pierIdentifier',
      width: COLUMN_WIDTH.XS,
    },
    {
      Header: t('assignmentPlanner.tableHeaders.berthNumber') || '',
      accessor: 'berthNumber',
      width: COLUMN_WIDTH.XS,
    },
    {
      Header: t('assignmentPlanner.tableHeaders.priority') || '',
      accessor: 'priority',
      width: COLUMN_WIDTH.XS,
    },
  ];

  return (
    <PageContent>
      <PageTitle title={t('assignmentPlanner.pageTitle')} />
      <Table
        columns={columns}
        data={assignmentPlans}
        loading={loading}
        renderEmptyStateRow={() => t('common.notification.noData.description')}
        renderTableToolsBottom={() => <Button onClick={() => alert('!')}>{t('assignmentPlanner.assignButton')}</Button>}
      />
    </PageContent>
  );
};

export default AssignmentPlanner;
