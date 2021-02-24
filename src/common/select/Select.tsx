import React from 'react';
import { Select as HDSSelect } from 'hds-react';
import classNames from 'classnames';

import styles from './select.module.scss';

type OptionValue = string | number;

type Option<T extends OptionValue> = {
  label: string;
  value: T;
};

type ConstructedChangeEvent<T extends OptionValue> = {
  target: {
    id?: string;
    value: T | null;
  };
};

export type SelectProps<T extends OptionValue = string> = {
  className?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  onChange: (e: ConstructedChangeEvent<T>) => void;
  options: Option<T>[];
  placeholder?: string;
  required?: boolean;
  value?: T | null;
  visibleOptions?: number;
};

const Select = <T extends OptionValue = string>({
  className,
  disabled,
  id,
  label,
  onChange,
  options,
  placeholder,
  required,
  value,
  visibleOptions,
}: SelectProps<T>) => {
  const selectedOption = options.find((option) => option.value === value) ?? null;

  const handleChange = (option: Option<T> | null) => {
    if (!selectedOption || option?.value !== selectedOption.value) {
      const event: ConstructedChangeEvent<T> = {
        target: {
          id,
          value: option ? option.value : null,
        },
      };

      onChange(event);
    }
  };

  return (
    <HDSSelect
      className={classNames(styles.select, className)}
      disabled={disabled}
      id={id}
      label={label}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      required={required}
      value={selectedOption}
      visibleOptions={visibleOptions}
    />
  );
};

export default Select;
