/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react-hooks';
import * as Apollo from '@apollo/react-hooks';

import { useTableExport } from '../useTableExport';
import { exportClient } from '../../../app/exportClient';
import * as downloadFile from '../downloadFile';
// import { getBerthToken } from '../auth';

jest.mock('../auth');

(window as any).URL = {
  createObjectURL: jest.fn(),
};

const mockPaginationData = Array.from({ length: 5 }).map((_, i, array) => {
  return {
    count: array.length,
    edges: [{ node: { id: `id-${i}` } }],
    pageInfo: {
      endCursor: (i + 1).toString(),
      // hasNextPage is false in last page
      hasNextPage: i + 1 !== array.length,
    },
  };
});

// expected result is just list of ids
const expectedResult = mockPaginationData.flatMap((node) => node.edges).map((node) => node.node.id);

const mockUseApolloClient = () => {
  const apolloClientMock = {
    query: jest.fn(),
  } as any;
  jest.spyOn(Apollo, 'useApolloClient').mockReturnValue(apolloClientMock);
  return apolloClientMock;
};

it('callback is called correctly based on return values', async () => {
  const apolloClientMock = mockUseApolloClient();

  // mock and spy axios post and spy downloadFile that useTableExport uses
  const exportClientPostSpy = jest.spyOn(exportClient, 'post').mockResolvedValue({
    data: expectedResult,
  });
  const downloadFileSpy = jest.spyOn(downloadFile, 'downloadFile');

  let expectedAfterParam: string | null | undefined;

  // callback that normally handles the apollo queries and returns data
  // should be called as many times as there are pages
  const mockCb = jest.fn().mockImplementation(async (apolloClient, { after, first }) => {
    expect(apolloClientMock).toBe(apolloClient);
    expect(typeof first).toBe('number');

    if (expectedAfterParam) {
      // should be same as pageIndo.endCursor from last result
      expect(after).toBe(expectedAfterParam);
    }

    let data;

    // when after is not included, first page is returned
    if (!after) {
      data = mockPaginationData[0];
    } else {
      data = mockPaginationData.find((node) => node.pageInfo.endCursor === (parseInt(after) + 1).toString());
    }

    expectedAfterParam = data?.pageInfo.endCursor;

    return data;
  });

  const exportType = 'customers';
  const fileType = 'xlsx';
  const { result } = renderHook(() =>
    useTableExport({
      exportType,
      fileType,
      fetchCallback: mockCb,
    })
  );

  await result.current.exportTable();

  expect(exportClientPostSpy).toHaveBeenCalledWith(
    '/customers/xlsx/',
    { ids: expectedResult },
    { responseType: 'blob' }
  );
  expect(downloadFileSpy).toHaveBeenCalledWith(expectedResult, `${exportType}.${fileType}`);
  expect(mockCb).toHaveBeenCalledTimes(mockPaginationData.length);
});
