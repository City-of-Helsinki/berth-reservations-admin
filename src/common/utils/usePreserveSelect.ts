import { TableState } from 'react-table';
import { RecoilState, useRecoilState } from 'recoil';

export const usePreserveSelect = <D extends { id: string }>(atom: RecoilState<{ [x: string]: D }>) => {
  const [selectedRowsDict, setSelectedRowsDict] = useRecoilState(atom);

  const onSelectionChange = (selectedRowIds: TableState['selectedRowIds'], currentPageRows: D[]) => {
    const selectedRowIdsArr = Object.keys(selectedRowIds);
    const selectedRowsArr = Object.keys(selectedRowsDict);

    if (
      selectedRowIdsArr.every((rowId) => selectedRowsArr.includes(rowId)) &&
      selectedRowIdsArr.length === selectedRowsArr.length
    )
      return;

    setSelectedRowsDict((prevSelectedRowsDict) => {
      const prevSelectedRowsArr = Object.keys(prevSelectedRowsDict);

      // removing
      const updatedSelectedRows = prevSelectedRowsArr.reduce((acc, selectedRow) => {
        if (selectedRowIds[selectedRow] !== true) {
          const { [selectedRow]: id, ...rest } = acc;
          return rest;
        }

        return acc;
      }, prevSelectedRowsDict);

      // adding
      const newSelectedRowsDict = currentPageRows.reduce((acc, row) => {
        if (selectedRowIds[row.id] === true) return { ...acc, [row.id]: row };

        return acc;
      }, {});

      return { ...updatedSelectedRows, ...newSelectedRowsDict };
    });
  };

  const selectedRows = Object.values(selectedRowsDict);
  const selectedRowIdsDict = Object.keys(selectedRowsDict).reduce((acc, selectedRow) => {
    return { [selectedRow]: true, ...acc };
  }, {});

  return {
    selectedRows,
    selectedRowsDict,
    selectedRowIdsDict,
    onSelectionChange,
  };
};
