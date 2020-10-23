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
