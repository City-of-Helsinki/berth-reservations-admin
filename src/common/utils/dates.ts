import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { DateSchema } from 'yup';

export const getToday = () => new Date(Date.now());

export const addDaysToDate = (_date: Date, days: number) => {
  const date = new Date(_date.getTime());
  date.setDate(date.getDate() + days); // magic
  return date;
};

// Date inputs use ISO 8601 Date (YYYY-MM-DD) format as value
export const mapDateToDateInputValue = (date: Date): string => {
  // .toISOString() returns YYYY-MM-DDTHH:mm:ss.sssZ
  return date.toISOString().slice(0, 10);
};

export const getDefaultDueDate = (): string => {
  return mapDateToDateInputValue(addDaysToDate(getToday(), 14));
};

export const getDueDateValidation = (t: TFunction): DateSchema => {
  return Yup.date()
    .min(new Date(getToday().toDateString()), t('forms.common.errors.date'))
    .required(t('forms.common.errors.required'));
};
