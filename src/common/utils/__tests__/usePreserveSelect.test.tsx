import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import { renderHook, act } from '@testing-library/react-hooks';
import { usePreserveSelect } from '../usePreserveSelect';

const selectedRowsAtom = atom<{ [x: string]: { id: string } }>({
  key: 'ApplicationList_selectedApplicationsAtom',
  default: {},
});

const selectedRowIds = { '1': true, '5': true };
const currentPageRows = [
  { id: '1', label: 'a' },
  { id: '2', label: 'b' },
  { id: '3', label: 'c' },
  { id: '4', label: 'd' },
  { id: '5', label: 'e' },
];

describe('usePreserveSelect', () => {
  const getWrapper = () => {
    const Wrapper = ({ children }: { children?: React.ReactNode }) => <RecoilRoot>{children}</RecoilRoot>;

    return Wrapper;
  };

  describe('selectedRows', () => {
    it('should return an array of the selected rows provided by onSelectionChange', () => {
      const { result } = renderHook(() => usePreserveSelect(selectedRowsAtom), { wrapper: getWrapper() });

      act(() => {
        result.current.onSelectionChange(selectedRowIds, currentPageRows);
      });

      expect(result.current.selectedRows).toStrictEqual([currentPageRows[0], currentPageRows[4]]);
    });
  });

  describe('selectedRowsDict', () => {
    it('should return a dictionary of the selected rows provided by onSelectionChange', () => {
      const { result } = renderHook(() => usePreserveSelect(selectedRowsAtom), { wrapper: getWrapper() });

      act(() => {
        result.current.onSelectionChange(selectedRowIds, currentPageRows);
      });

      expect(result.current.selectedRowsDict).toStrictEqual({ '1': currentPageRows[0], '5': currentPageRows[4] });
    });
  });

  describe('selectedRowIdsDict', () => {
    it('should return a dictionary of the selected rows ids provided by onSelectionChange', () => {
      const { result } = renderHook(() => usePreserveSelect(selectedRowsAtom), { wrapper: getWrapper() });

      act(() => {
        result.current.onSelectionChange(selectedRowIds, currentPageRows);
      });

      expect(result.current.selectedRowIdsDict).toStrictEqual({ '1': true, '5': true });
    });
  });

  describe('onSelectionChange', () => {
    it('should NOT update the state if the provided selection dict is not changed', () => {
      const { result } = renderHook(() => usePreserveSelect(selectedRowsAtom), { wrapper: getWrapper() });

      act(() => {
        result.current.onSelectionChange(selectedRowIds, currentPageRows);
      });

      const { selectedRowsDict } = result.current;

      act(() => {
        result.current.onSelectionChange(selectedRowIds, currentPageRows);
      });

      const { selectedRowsDict: newSelectedRowsDict } = result.current;

      expect(selectedRowsDict).toBe(newSelectedRowsDict);
    });

    it('should update the state when a new row is selected', () => {
      const { result } = renderHook(() => usePreserveSelect(selectedRowsAtom), { wrapper: getWrapper() });
      const initSelectedRowIds = { '1': true, '5': true };
      const newSelectedRowIds = { '1': true, '3': true, '5': true };

      act(() => {
        result.current.onSelectionChange(initSelectedRowIds, currentPageRows);
        result.current.onSelectionChange(newSelectedRowIds, currentPageRows);
      });

      expect(result.current.selectedRowsDict).toStrictEqual({
        '1': currentPageRows[0],
        '3': currentPageRows[2],
        '5': currentPageRows[4],
      });
    });

    it('should update the state when a selected row is deselected', () => {
      const { result } = renderHook(() => usePreserveSelect(selectedRowsAtom), { wrapper: getWrapper() });
      const initSelectedRowIds = { '1': true, '5': true };
      const newSelectedRowIds = { '1': true };

      act(() => {
        result.current.onSelectionChange(initSelectedRowIds, currentPageRows);
        result.current.onSelectionChange(newSelectedRowIds, currentPageRows);
      });

      expect(result.current.selectedRowsDict).toStrictEqual({
        '1': currentPageRows[0],
      });
    });
  });
});
