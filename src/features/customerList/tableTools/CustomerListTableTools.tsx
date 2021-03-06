import React, { useState } from 'react';
import classNames from 'classnames';
import { TextInput } from 'hds-react';
import { useTranslation } from 'react-i18next';

import Select from '../../../common/select/Select';
import styles from './customerListTableTools.module.scss';
import Modal from '../../../common/modal/Modal';
import Text from '../../../common/text/Text';
import Button from '../../../common/button/Button';
import CustomerMessageFormContainer from '../../customerMessageForm/CustomerMessageFormContainer';
import AddCustomerFormContainer from '../../customerForm/AddCustomerFormContainer';

export interface CustomerListTableToolsProps<T> {
  className?: string;
  searchVal: string | undefined;
  searchBy: T;
  searchByOptions: Array<{ value: T; label: string }>;
  selectedCustomerIds: string[];
  refetch(): void;
  setSearchVal(val: string): void;
  setSearchBy(val: T): void;
  clearSelectedRows(): void;
}

const CustomerListTableTools = <T extends string>({
  className,
  refetch,
  searchVal,
  searchBy,
  searchByOptions,
  setSearchVal,
  setSearchBy,
  selectedCustomerIds,
  clearSelectedRows,
}: CustomerListTableToolsProps<T>) => {
  const { t } = useTranslation();
  const [messageModalOpen, setMessageModalOpen] = useState<boolean>(false);
  const [addCustomerModalOpen, setAddCustomerModalOpen] = useState<boolean>(false);
  const selectedRowsCount = selectedCustomerIds.length;

  return (
    <>
      <div className={classNames(styles.tableTools, className)}>
        <div className={styles.tableToolsLeft}>
          <Button onClick={() => setMessageModalOpen(true)} variant="secondary" disabled={selectedRowsCount <= 0}>
            {selectedRowsCount <= 0 ? t('customerList.message.selectRows') : t('customerList.message.new')}
          </Button>
          {selectedRowsCount > 0 && (
            <>
              <Text color="gray">{t('customerList.message.selectedRow', { count: selectedRowsCount })}</Text>
              <button onClick={clearSelectedRows}>
                <Text color="brand">{t('customerList.message.clearSelectedRows')}</Text>
              </button>
            </>
          )}
          <Button onClick={() => setAddCustomerModalOpen(true)}>{t('customerList.addNewCustomer')}</Button>
        </div>
        <div className={styles.tableToolsRight}>
          <Select
            className={styles.select}
            onChange={(e) => setSearchBy(e.target.value as T)}
            value={searchBy}
            options={searchByOptions}
            required
          />
          <TextInput
            className={styles.searchInput}
            id="searchSimilarCustomers"
            value={searchVal}
            onChange={(e) => setSearchVal((e.target as HTMLInputElement).value)}
          />
        </div>
      </div>

      <Modal isOpen={messageModalOpen} toggleModal={() => setMessageModalOpen(false)}>
        <CustomerMessageFormContainer
          closeModal={() => setMessageModalOpen(false)}
          handleSendMessage={() => setMessageModalOpen(false)}
          selectedCustomerIds={selectedCustomerIds}
        />
      </Modal>

      <Modal isOpen={addCustomerModalOpen} toggleModal={() => setAddCustomerModalOpen(false)}>
        <AddCustomerFormContainer
          onCancel={() => setAddCustomerModalOpen(false)}
          onSubmit={() => {
            setAddCustomerModalOpen(false);
            refetch();
          }}
        />
      </Modal>
    </>
  );
};

export default CustomerListTableTools;
