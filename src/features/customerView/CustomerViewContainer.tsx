import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { Notification } from 'hds-react';

import CustomerView from './CustomerView';
import { INDIVIDUAL_CUSTOMER_QUERY } from './queries';
import { INDIVIDUAL_CUSTOMER } from './__generated__/INDIVIDUAL_CUSTOMER';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import {
  getBerthLeases,
  getBoats,
  getApplications,
  getCustomerProfile,
  getBills,
  getWinterStorageLeases,
} from './utils';
import { Bill, Boat } from './types';
import { OrderStatus } from '../../@types/__generated__/globalTypes';
import Modal from '../../common/modal/Modal';
import BoatEditForm from './forms/boatForm/BoatEditForm';
import BillModal from './billModal/BillModal';
import BoatCreateForm from './forms/boatForm/BoatCreateForm';
import CustomerEditForm from '../customerForm/CustomerEditFormContainer';

const CustomerViewContainer = () => {
  const [boatToEdit, setBoatToEdit] = useState<Boat | null>();
  const [editCustomer, setEditCustomer] = useState<boolean>(false);
  const [creatingBoat, setCreatingBoat] = useState<boolean>(false);
  const [openBill, setOpenBill] = useState<Bill>();
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { loading, data } = useQuery<INDIVIDUAL_CUSTOMER>(INDIVIDUAL_CUSTOMER_QUERY, {
    variables: { id },
    errorPolicy: 'all',
  });

  if (loading) return <LoadingSpinner isLoading={loading} />;
  if (!data?.profile || !data?.boatTypes)
    return (
      <Notification labelText={t('common.notification.noData.label')}>
        {t('common.notification.noData.description')}
      </Notification>
    );

  const applications = getApplications(data.profile, data.boatTypes || []);
  const bills = getBills(data.profile);
  const boats = getBoats(data.profile);
  const { boatTypes } = data;
  const customerProfile = getCustomerProfile(data.profile);
  const leases = [...getBerthLeases(data.profile), ...getWinterStorageLeases(data.profile)];
  const openBills = bills.filter((bill) => bill.status === OrderStatus.WAITING);

  return (
    <>
      <CustomerView
        applications={applications}
        bills={bills}
        boats={boats}
        customerProfile={customerProfile}
        handleEditCustomer={() => setEditCustomer(true)}
        leases={leases}
        onClickCreateBoat={() => setCreatingBoat(true)}
        openBills={openBills}
        setBoatToEdit={setBoatToEdit}
        setOpenBill={setOpenBill}
      />

      <Modal isOpen={editCustomer} toggleModal={() => setEditCustomer(false)}>
        <CustomerEditForm
          customerId={id}
          onCancel={() => setEditCustomer(false)}
          onSubmit={() => setEditCustomer(false)}
          refetchQueries={[{ query: INDIVIDUAL_CUSTOMER_QUERY, variables: { id } }]}
        />
      </Modal>

      {boatToEdit && (
        <Modal isOpen={true} toggleModal={() => setBoatToEdit(null)}>
          <BoatEditForm
            boatTypes={boatTypes}
            initialValues={boatToEdit}
            onCancel={() => setBoatToEdit(null)}
            onDelete={() => setBoatToEdit(null)}
            onSubmit={() => setBoatToEdit(null)}
            refetchQueries={[{ query: INDIVIDUAL_CUSTOMER_QUERY, variables: { id } }]}
          />
        </Modal>
      )}

      <Modal isOpen={creatingBoat} toggleModal={() => setCreatingBoat(false)}>
        <BoatCreateForm
          ownerId={data.profile.id}
          boatTypes={boatTypes}
          onCancel={() => setCreatingBoat(false)}
          onSubmit={() => setCreatingBoat(false)}
          refetchQueries={[{ query: INDIVIDUAL_CUSTOMER_QUERY, variables: { id } }]}
        />
      </Modal>

      <BillModal bill={openBill} toggleModal={() => setOpenBill(undefined)} />
    </>
  );
};

export default CustomerViewContainer;
