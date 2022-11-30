import React from 'react';
import { DateInputProps } from 'hds-react';

// Replace DateInput implementation because it increases test completion time
// by tends of seconds.
//
// This DateInput doesn't have the calendar component which is the root cause
// for the performance issues.
export const FastDateInput = ({ onChange, value, label, id, name }: DateInputProps) => {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type="text"
        id={id}
        name={name}
        value={value ?? ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;

          onChange?.(value, new Date());
        }}
      />
    </label>
  );
};

// Re-export everything
export * from 'hds-react';

// Override DateInput
export { FastDateInput as DateInput };
