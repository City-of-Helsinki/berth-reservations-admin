import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Notification } from 'hds-react';
import { getOperationName } from 'apollo-link';

import CustomerView from './CustomerView';
import { INDIVIDUAL_CUSTOMER_QUERY } from './queries';
import { INDIVIDUAL_CUSTOMER } from './__generated__/INDIVIDUAL_CUSTOMER';
import LoadingSpinner from '../../common/spinner/LoadingSpinner';
import {
  getBerthLeases,
  getBoats,
  getApplications,
  getCustomerProfile,
  getInvoices,
  getWinterStorageLeases,
} from './utils';
import { Invoice, Boat, BerthLease } from './types';
import { OrderStatus } from '../../@types/__generated__/globalTypes';
import Modal from '../../common/modal/Modal';
import BoatEditForm from './forms/boatForm/BoatEditForm';
import InvoiceModal from './invoiceModal/InvoiceModal';
import BoatCreateForm from './forms/boatForm/BoatCreateForm';
import EditCustomerForm from '../customerForm/EditCustomerFormContainer';
import {
  REJECT_BERTH_APPLICATION,
  REJECT_BERTH_APPLICATIONVariables as REJECT_BERTH_APPLICATION_VARS,
} from '../applicationView/__generated__/REJECT_BERTH_APPLICATION';
import { REJECT_BERTH_APPLICATION_MUTATION } from '../applicationView/mutations';
import { BERTH_APPLICATIONS_QUERY } from '../applicationList/queries';
import CreateAdditionalInvoiceContainer from '../createAdditionalInvoice/CreateAdditionalInvoiceContainer';

const CustomerViewContainer = () => {
  const [boatToEdit, setBoatToEdit] = useState<Boat | null>();
  const [editCustomer, setEditCustomer] = useState<boolean>(false);
  const [creatingBoat, setCreatingBoat] = useState<boolean>(false);
  const [creatingAdditionalInvoice, setCreatingAdditionalInvoice] = useState<boolean>(false);
  const [openInvoice, setOpenInvoice] = useState<Invoice>();
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { loading, data } = useQuery<INDIVIDUAL_CUSTOMER>(INDIVIDUAL_CUSTOMER_QUERY, { variables: { id } });
  const [rejectApplication] = useMutation<REJECT_BERTH_APPLICATION, REJECT_BERTH_APPLICATION_VARS>(
    REJECT_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [getOperationName(BERTH_APPLICATIONS_QUERY) || 'BERTH_APPLICATIONS_QUERY'],
    }
  );

  const handleNoPlacesAvailable = async (id: string) =>
    rejectApplication({
      variables: {
        input: {
          id,
        },
      },
    });

  if (loading) return <LoadingSpinner isLoading={loading} />;
  if (!data?.profile || !data?.boatTypes)
    return (
      <Notification
        size="large"
        closeButtonLabelText={t('toast.closeToast') ?? ''}
        label={t('common.notification.noData.label')}
      >
        {t('common.notification.noData.description')}
      </Notification>
    );

  const applications = getApplications(data.profile, data.boatTypes || []);
  const invoices = getInvoices(data.profile);
  const boats = getBoats(data.profile);
  const { boatTypes } = data;
  const customerProfile = getCustomerProfile(data.profile);
  const berthLeases = getBerthLeases(data.profile);
  const leases = [...berthLeases, ...getWinterStorageLeases(data.profile)];
  const openInvoices = invoices.filter((invoice) => invoice.status === OrderStatus.WAITING);

  return (
    <>
      <CustomerView
        applications={applications}
        boats={boats}
        customerProfile={customerProfile}
        handleEditCustomer={() => setEditCustomer(true)}
        handleNoPlacesAvailable={handleNoPlacesAvailable}
        invoices={invoices}
        leases={leases}
        onClickCreateBoat={() => setCreatingBoat(true)}
        onClickCreateAdditionalInvoice={() => setCreatingAdditionalInvoice(true)}
        openInvoices={openInvoices}
        setBoatToEdit={setBoatToEdit}
        setOpenInvoice={setOpenInvoice}
      />

      <Modal isOpen={editCustomer} toggleModal={() => setEditCustomer(false)}>
        <EditCustomerForm
          customerId={id}
          onCancel={() => setEditCustomer(false)}
          onSubmit={() => setEditCustomer(false)}
          refetchQueries={[{ query: INDIVIDUAL_CUSTOMER_QUERY, variables: { id } }]}
        />
      </Modal>

      {boatToEdit && (
        <Modal isOpen toggleModal={() => setBoatToEdit(null)}>
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

      <Modal
        isOpen={creatingAdditionalInvoice}
        toggleModal={() => setCreatingAdditionalInvoice(false)}
        shouldCloseOnOverlayClick={false}
      >
        <CreateAdditionalInvoiceContainer
          customerId={id}
          email={customerProfile.primaryEmail}
          berthLeases={berthLeases as BerthLease[]}
          closeModal={() => setCreatingAdditionalInvoice(false)}
          refetchQueries={[{ query: INDIVIDUAL_CUSTOMER_QUERY, variables: { id } }]}
        />
      </Modal>

      {openInvoice && <InvoiceModal isOpen invoice={openInvoice} toggleModal={() => setOpenInvoice(undefined)} />}
    </>
  );
};

export default CustomerViewContainer;
