import TestController, { Selector } from 'testcafe';

const tableHeaderCellSelector = 'div[class^="table_headerCell"]';
const sortArrowWrapperSelector = 'div[class^="table_sortArrowWrapper"]';

export const toggleSortColumn = async (t: TestController, tableSelector: Selector, column: number) => {
  await t.click(tableSelector.find(tableHeaderCellSelector).nth(column));
};

export const isColumnSorted = async (tableSelector: Selector, column: number) => {
  const classNames = await tableSelector.find(tableHeaderCellSelector).nth(column).child(sortArrowWrapperSelector)
    .classNames;

  return classNames.some((className) => className && className.startsWith('table_isSorted'));
};
