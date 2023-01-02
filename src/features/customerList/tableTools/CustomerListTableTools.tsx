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

type CustomerListTableToolsSearchByOptionOption = {
  label: string;
  value: string;
};

export interface CustomerListTableToolsProps<T> {
  className?: string;
  searchVal: string | undefined;
  searchBy: T;
  searchByOptions: Array<{
    value: T;
    label: string;
    options?: CustomerListTableToolsSearchByOptionOption[];
    placeholder?: string;
  }>;
  selectedCustomerIds: string[];
  isExporting: boolean;
  handleCustomersExport: () => Promise<void>;
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
  handleCustomersExport,
  isExporting,
}: CustomerListTableToolsProps<T>) => {
  const { t } = useTranslation();
  const [messageModalOpen, setMessageModalOpen] = useState<boolean>(false);
  const [addCustomerModalOpen, setAddCustomerModalOpen] = useState<boolean>(false);
  const selectedRowsCount = selectedCustomerIds.length;
  const selectedSearchByOption = searchByOptions.find((option) => option.value === searchBy);

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
          <Button isLoading={isExporting} loadingText={t('common.exporting')} onClick={handleCustomersExport}>
            {t('common.export')}
          </Button>
        </div>
        <div className={styles.tableToolsRight}>
          <Select
            className={styles.select}
            onChange={(e) => {
              const nextSearchBy = e.target.value as T;
              const option = searchByOptions.find((option) => option.value === nextSearchBy);
              const firstOptionValue = option?.options?.[0]?.value;

              if (firstOptionValue) {
                // If the next search by options has options, select the value
                // of the first option by default.
                setSearchVal(firstOptionValue);
              }

              setSearchBy(nextSearchBy);
            }}
            value={searchBy}
            options={searchByOptions}
            required
          />
          {selectedSearchByOption?.options ? (
            <Select
              className={styles.select}
              id="searchSimilarCustomers"
              options={selectedSearchByOption?.options}
              value={searchVal}
              onChange={(e) => setSearchVal((e.target as HTMLSelectElement).value)}
            />
          ) : (
            <TextInput
              className={styles.searchInput}
              id="searchSimilarCustomers"
              value={searchVal}
              placeholder={selectedSearchByOption?.placeholder}
              onChange={(e) => setSearchVal((e.target as HTMLInputElement).value)}
            />
          )}
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
