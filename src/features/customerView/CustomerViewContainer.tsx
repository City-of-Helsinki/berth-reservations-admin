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
import SendInvoiceFormContainer from '../invoiceCard/sendInvoiceForm/SendInvoiceFormContainer';
import { CANCEL_BERTH_LEASE_MUTATION, CANCEL_WINTER_STORAGE_LEASE_MUTATION } from './mutations';
import {
  CANCEL_BERTH_LEASE,
  CANCEL_BERTH_LEASEVariables as CANCEL_BERTH_LEASE_VARS,
} from './__generated__/CANCEL_BERTH_LEASE';
import {
  CANCEL_WINTER_STORAGE_LEASE,
  CANCEL_WINTER_STORAGE_LEASEVariables as CANCEL_WINTER_STORAGE_LEASE_VARS,
} from './__generated__/CANCEL_WINTER_STORAGE_LEASE';

const CustomerViewContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const [boatToEdit, setBoatToEdit] = useState<Boat | null>();
  const [editCustomer, setEditCustomer] = useState<boolean>(false);
  const [creatingBoat, setCreatingBoat] = useState<boolean>(false);
  const [creatingAdditionalInvoice, setCreatingAdditionalInvoice] = useState<boolean>(false);
  const [openInvoice, setOpenInvoice] = useState<Invoice>();
  const [openResendInvoice, setOpenResendInvoice] = useState<Invoice>();

  const { loading, data, refetch } = useQuery<INDIVIDUAL_CUSTOMER>(INDIVIDUAL_CUSTOMER_QUERY, {
    variables: { id },
    fetchPolicy: 'no-cache',
  });
  const [rejectApplication] = useMutation<REJECT_BERTH_APPLICATION, REJECT_BERTH_APPLICATION_VARS>(
    REJECT_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [getOperationName(BERTH_APPLICATIONS_QUERY) || 'BERTH_APPLICATIONS_QUERY'],
    }
  );
  const [cancelBerthApplication] = useMutation<CANCEL_BERTH_LEASE, CANCEL_BERTH_LEASE_VARS>(
    CANCEL_BERTH_LEASE_MUTATION
  );
  const [cancelWinterStorageApplication] = useMutation<CANCEL_WINTER_STORAGE_LEASE, CANCEL_WINTER_STORAGE_LEASE_VARS>(
    CANCEL_WINTER_STORAGE_LEASE_MUTATION
  );

  const handleNoPlacesAvailable = async (id: string) =>
    rejectApplication({
      variables: {
        input: {
          id,
        },
      },
    });
  const handleCancelLease = async (id: string, type: 'berth' | 'winterStorage') => {
    if (type === 'berth') {
      cancelBerthApplication({
        variables: {
          input: {
            id: id,
          },
        },
      });
      refetch();
    }
    if (type === 'winterStorage') {
      cancelWinterStorageApplication({
        variables: {
          input: {
            id,
          },
        },
      });
      refetch();
    }
  };

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
        cancelLease={handleCancelLease}
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
        setOpenResendInvoice={setOpenResendInvoice}
      />

      <Modal isOpen={editCustomer} toggleModal={() => setEditCustomer(false)}>
        <EditCustomerForm
          customerId={id}
          onCancel={() => setEditCustomer(false)}
          onSubmit={() => {
            refetch();
            setEditCustomer(false);
          }}
          refetchQueries={[]}
        />
      </Modal>

      {boatToEdit && (
        <Modal isOpen toggleModal={() => setBoatToEdit(null)}>
          <BoatEditForm
            boatTypes={boatTypes}
            initialValues={boatToEdit}
            onCancel={() => setBoatToEdit(null)}
            onDelete={() => {
              refetch();
              setBoatToEdit(null);
            }}
            onSubmit={() => {
              refetch();
              setBoatToEdit(null);
            }}
            refetchQueries={[]}
          />
        </Modal>
      )}

      <Modal isOpen={creatingBoat} toggleModal={() => setCreatingBoat(false)}>
        <BoatCreateForm
          ownerId={data.profile.id}
          boatTypes={boatTypes}
          onCancel={() => setCreatingBoat(false)}
          onSubmit={() => {
            refetch();
            setCreatingBoat(false);
          }}
          refetchQueries={[]}
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
          closeModal={() => {
            refetch();
            setCreatingAdditionalInvoice(false);
          }}
          refetchQueries={[]}
        />
      </Modal>

      <Modal isOpen={!!openResendInvoice} toggleModal={() => setOpenResendInvoice(undefined)}>
        <SendInvoiceFormContainer
          orderId={openResendInvoice?.orderId ?? ''}
          email={customerProfile.primaryEmail ?? null}
          isResend={true}
          refetchQueries={[]}
          onCancel={() => setOpenResendInvoice(undefined)}
          onSubmit={() => {
            refetch();
            setOpenResendInvoice(undefined);
          }}
        />
      </Modal>

      {openInvoice && <InvoiceModal isOpen invoice={openInvoice} toggleModal={() => setOpenInvoice(undefined)} />}
    </>
  );
};

export default CustomerViewContainer;
