import React from 'react';
import {
  Combobox,
  Checkbox,
  DateInput as HDSDateInput,
  DateInputProps as HDSDateInputProps,
  ComboboxProps,
} from 'hds-react';
import { useTranslation } from 'react-i18next';

import Button from '../../../common/button/Button';
import { Option, ControlledFilters } from './CustomerListTableFiltersFormContainer';
import styles from './customerListTableFilters.module.scss';
import { CustomerGroup, LeaseStatus } from '../../../@types/__generated__/globalTypes';

type Section = {
  berthSection: boolean;
  winterStorageSection: boolean;
  unmarkedWinterStorageSection: boolean;
  dateSection: boolean;
};

export interface Props {
  customerGroupOptions?: Option[];
  boatTypeOptions?: Option[];
  leaseStatusOptions?: Option[];
  harborOptions?: Option[];
  pierOptions?: Option[];
  berthOptions?: Option[];
  winterStorageGridAreaOptions?: Option[];
  winterStoragePlaceOptions?: Option[];
  winterStorageAreaOptions?: Option[];

  filters: ControlledFilters;

  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, filters: ControlledFilters) => void;
  onReset: (...fieldsToReset: (keyof ControlledFilters)[]) => void;
  onResetAll: () => void;
}

const CustomerListTableFiltersForm = ({
  customerGroupOptions,
  boatTypeOptions,
  leaseStatusOptions,
  harborOptions,
  pierOptions,
  berthOptions,
  winterStoragePlaceOptions,
  winterStorageAreaOptions,
  winterStorageGridAreaOptions,
  filters: {
    customerGroups,
    boatTypeIds,
    leaseStatuses,
    harborIds,
    pierId,
    berthId,
    winterStorageGridAreaIds,
    winterStoragePlaceId,
    winterStorageAreaIds,
    startDate,
    endDate,
    moreThanOneBerthOrWinterStorage,
  },
  onFieldChange,
  onSubmit,
  onReset,
  onResetAll,
}: Props) => {
  const { t } = useTranslation();

  const [isSectionEnabled, setSectionEnabled] = React.useState(() => ({
    berthSection: harborIds?.length > 0,
    winterStorageSection: winterStorageGridAreaIds?.length > 0,
    unmarkedWinterStorageSection: winterStorageAreaIds?.length > 0,
    dateSection: Boolean(startDate || endDate),
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    onSubmit(e, {
      customerGroups,
      boatTypeIds,
      leaseStatuses,
      harborIds,
      pierId,
      berthId,
      winterStorageGridAreaIds,
      winterStoragePlaceId,
      winterStorageAreaIds,
      startDate,
      endDate,
      moreThanOneBerthOrWinterStorage,
    });

  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sectionName = e.target.name as keyof Section;

    setSectionEnabled((prev) => {
      const nextValue = !prev[sectionName];

      if (nextValue === false) {
        const fieldResetMap: Record<keyof Section, (keyof ControlledFilters)[]> = {
          berthSection: ['harborIds', 'pierId', 'berthId'],
          winterStorageSection: ['winterStorageGridAreaIds', 'winterStoragePlaceId'],
          unmarkedWinterStorageSection: ['winterStorageAreaIds'],
          dateSection: ['startDate', 'endDate'],
        };

        onReset(...fieldResetMap[sectionName]);
      }

      return {
        ...prev,
        [sectionName]: !prev[sectionName],
      };
    });
  };

  const handleReset = () => {
    setSectionEnabled({
      berthSection: false,
      winterStorageSection: false,
      unmarkedWinterStorageSection: false,
      dateSection: false,
    });
    onResetAll();
  };

  const handleHarborIdsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onReset('pierId', 'berthId');
    onFieldChange(e);
  };

  const handlePierIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onReset('berthId');
    onFieldChange(e);
  };

  const handleWinterStorageGridAreaIdsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onReset('winterStoragePlaceId');
    onFieldChange(e);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <MultiSelect
        id="customerGroups"
        name="customerGroups"
        label={t('customerList.filters.customerGroups')}
        options={customerGroupOptions}
        placeholder={t('common.all')}
        value={customerGroupOptions?.filter((option) => customerGroups?.includes(option.value as CustomerGroup))}
        onChange={onFieldChange}
      />
      <MultiSelect
        id="boatTypeIds"
        name="boatTypeIds"
        label={t('customerList.filters.boatTypeIds')}
        options={boatTypeOptions}
        placeholder={t('common.all')}
        value={boatTypeOptions?.filter((option) => boatTypeIds?.includes(option.value))}
        onChange={onFieldChange}
      />
      <MultiSelect
        id="leaseStatuses"
        name="leaseStatuses"
        label={t('customerList.filters.leaseStatuses')}
        options={leaseStatusOptions}
        placeholder={t('common.all')}
        value={leaseStatusOptions?.filter((option) => leaseStatuses?.includes(option.value as LeaseStatus))}
        onChange={onFieldChange}
      />
      <div className={styles.filterStack}>
        <Checkbox
          id="berthSection"
          name="berthSection"
          label={t('customerList.filters.sections.berth')}
          checked={isSectionEnabled.berthSection}
          value={isSectionEnabled.berthSection.toString()}
          onChange={handleSectionChange}
        />
        <MultiSelect
          disabled={!isSectionEnabled.berthSection}
          id="harborIds"
          name="harborIds"
          label={t('customerList.filters.harborIds')}
          options={harborOptions}
          placeholder={!isSectionEnabled.berthSection ? undefined : t('common.all')}
          value={harborOptions?.filter((option) => harborIds?.includes(option.value))}
          onChange={handleHarborIdsChange}
        />
        <Select
          disabled={!isSectionEnabled.berthSection || harborIds?.length !== 1}
          id="pierId"
          name="pierId"
          label={t('customerList.filters.pierId')}
          options={pierOptions}
          placeholder={!isSectionEnabled.berthSection ? undefined : t('common.all')}
          value={pierOptions?.find((option) => pierId === option.value)}
          onChange={handlePierIdChange}
        />
        <Select
          disabled={!isSectionEnabled.berthSection || !pierId}
          id="berthId"
          name="berthId"
          label={t('customerList.filters.berthId')}
          options={berthOptions}
          placeholder={!isSectionEnabled.berthSection ? undefined : t('common.all')}
          value={berthOptions?.find((option) => berthId === option.value)}
          onChange={onFieldChange}
        />
      </div>
      <div className={styles.filterStack}>
        <Checkbox
          id="winterStorageSection"
          name="winterStorageSection"
          label={t('customerList.filters.sections.winterStorage')}
          checked={isSectionEnabled.winterStorageSection}
          value={isSectionEnabled.winterStorageSection.toString()}
          onChange={handleSectionChange}
        />
        <MultiSelect
          disabled={!isSectionEnabled.winterStorageSection}
          id="winterStorageGridAreaIds"
          name="winterStorageGridAreaIds"
          label={t('customerList.filters.winterStorageGridAreaIds')}
          options={winterStorageGridAreaOptions}
          placeholder={!isSectionEnabled.winterStorageSection ? undefined : t('common.all')}
          value={winterStorageGridAreaOptions?.filter((option) => winterStorageGridAreaIds?.includes(option.value))}
          onChange={handleWinterStorageGridAreaIdsChange}
        />
        <Select
          disabled={!isSectionEnabled.winterStorageSection || winterStorageGridAreaIds?.length !== 1}
          id="winterStoragePlaceId"
          name="winterStoragePlaceId"
          label={t('customerList.filters.winterStoragePlaceId')}
          options={winterStoragePlaceOptions}
          virtualized
          placeholder={!isSectionEnabled.winterStorageSection ? undefined : t('common.all')}
          value={winterStoragePlaceOptions?.find((option) => winterStoragePlaceId === option.value)}
          onChange={onFieldChange}
        />
      </div>
      <div className={styles.filterStack}>
        <Checkbox
          id="unmarkedWinterStorageSection"
          name="unmarkedWinterStorageSection"
          label={t('customerList.filters.sections.unmarkedWinterStorage')}
          checked={isSectionEnabled.unmarkedWinterStorageSection}
          onChange={handleSectionChange}
        />
        <MultiSelect
          disabled={!isSectionEnabled.unmarkedWinterStorageSection}
          id="winterStorageAreaIds"
          name="winterStorageAreaIds"
          label={t('customerList.filters.winterStorageAreaIds')}
          options={winterStorageAreaOptions}
          placeholder={!isSectionEnabled.unmarkedWinterStorageSection ? undefined : t('common.all')}
          value={winterStorageAreaOptions?.filter((option) => winterStorageAreaIds?.includes(option.value))}
          onChange={onFieldChange}
        />
      </div>

      <div className={styles.actionRow}>
        <div className={styles.controlsContainer}>
          <Checkbox
            id="dateSection"
            name="dateSection"
            label={`${t('customerList.filters.dateInterval')}:`}
            checked={isSectionEnabled.dateSection}
            onChange={handleSectionChange}
          />
          <DateInput
            disabled={!isSectionEnabled.dateSection}
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={onFieldChange}
            className={styles.hideDateInputLabel}
            label={t('customerList.filters.startDate')}
          />
          <DateInput
            disabled={!isSectionEnabled.dateSection}
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={onFieldChange}
            className={styles.hideDateInputLabel}
            label={t('customerList.filters.endDate')}
          />
          <Checkbox
            id="moreThanOneBerthOrWinterStorage"
            name="moreThanOneBerthOrWinterStorage"
            label={t('customerList.filters.moreThanOneBerthOrWinterStorage')}
            checked={moreThanOneBerthOrWinterStorage}
            onChange={onFieldChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button variant="secondary" onClick={handleReset}>
            {t('customerList.message.resetFilters')}
          </Button>
          <Button type="submit">{t('customerList.message.useFilters')}</Button>
        </div>
      </div>
    </form>
  );
};

type MultiSelectProps = Omit<
  ComboboxProps<Option>,
  | 'defaultValue'
  | 'options'
  | 'value'
  | 'onChange'
  | 'toggleButtonAriaLabel'
  | 'clearButtonAriaLabel'
  | 'selectedItemRemoveButtonAriaLabel'
> & {
  id: string;
  name: keyof ControlledFilters;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: Option[];
  options?: Option[];
};

const MultiSelect = ({ name, onChange, value, options, disabled, placeholder, ...rest }: MultiSelectProps) => {
  const { t } = useTranslation();

  const handleChange = (options: Option[]) => {
    const fakeChangeEvent = ({
      target: {
        name,
        value: options.map((option: Option) => option.value),
      },
    } as unknown) as React.ChangeEvent<HTMLInputElement>;

    onChange(fakeChangeEvent);
  };

  return (
    <Combobox<Option>
      {...rest}
      multiselect={true}
      disabled={disabled || !options}
      placeholder={!disabled && !options ? t('customerList.message.loadingOptions') : placeholder}
      options={options ?? []}
      toggleButtonAriaLabel={t('common.dropdown.genericToggleButtonAriaLabel')}
      clearButtonAriaLabel={t('common.dropdown.genericClearButtonAriaLabel')}
      selectedItemRemoveButtonAriaLabel={t('common.dropdown.genericSelectedItemRemoveButtonAriaLabel')}
      value={value ?? []}
      onChange={handleChange}
    />
  );
};

type SelectProps = Omit<
  ComboboxProps<Option>,
  'defaultValue' | 'options' | 'value' | 'onChange' | 'toggleButtonAriaLabel'
> & {
  id: string;
  name: keyof ControlledFilters;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: Option;
  options?: Option[];
};

const Select = ({ name, onChange, value, options, disabled, placeholder, ...rest }: SelectProps) => {
  const { t } = useTranslation();

  const handleChange = (option: Option) => {
    const fakeChangeEvent = ({
      target: {
        name,
        value: option?.value,
      },
    } as unknown) as React.ChangeEvent<HTMLInputElement>;

    onChange(fakeChangeEvent);
  };

  return (
    <Combobox<Option>
      {...rest}
      multiselect={false}
      disabled={disabled || !options}
      placeholder={!disabled && !options ? t('customerList.message.loadingOptions') : placeholder}
      options={options ?? []}
      toggleButtonAriaLabel={t('common.dropdown.genericToggleButtonAriaLabel')}
      value={value ?? null}
      onChange={handleChange}
    />
  );
};

type DateInputProps = Omit<HDSDateInputProps, 'onChange'> & {
  name: keyof ControlledFilters;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateInput = ({ name, onChange, ...delegated }: DateInputProps) => {
  const {
    i18n: { language },
  } = useTranslation();

  const handleChange = (value: string) => {
    const fakeChangeEvent = ({
      target: {
        name,
        value,
      },
    } as unknown) as React.ChangeEvent<HTMLInputElement>;

    onChange(fakeChangeEvent);
  };

  return <HDSDateInput {...delegated} language={language as 'en' | 'fi' | 'sv'} onChange={handleChange} />;
};

export default CustomerListTableFiltersForm;
