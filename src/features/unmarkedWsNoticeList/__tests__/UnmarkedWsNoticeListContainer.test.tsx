import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { HashRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import waitForExpect from 'wait-for-expect';
import { RecoilRoot } from 'recoil';

import { unmarkedWinterStorageNoticeMockData } from '../__fixtures__/mockData';
import { UNMARKED_WINTER_STORAGE_NOTICES_QUERY } from '../queries';
import UnmarkedWsNoticeListContainer from '../UnmarkedWsNoticeListContainer';
import LoadingSpinner from '../../../common/spinner/LoadingSpinner';

const queryMock = {
  request: {
    query: UNMARKED_WINTER_STORAGE_NOTICES_QUERY,
    variables: {
      first: 10,
      after: undefined,
      orderBy: 'createdAt',
    },
  },
  result: {
    data: unmarkedWinterStorageNoticeMockData,
  },
};

describe('UnmarkedWsNoticeListContainer', () => {
  const getWrapper = () => {
    return mount(
      <RecoilRoot>
        <MockedProvider mocks={[queryMock]}>
          <HashRouter>
            <UnmarkedWsNoticeListContainer />
          </HashRouter>
        </MockedProvider>
      </RecoilRoot>
    );
  };

  const waitForContent = async (wrapper: ReactWrapper) => {
    await act(async () => {
      await waitForExpect(() => {
        wrapper.update();
        expect(wrapper.contains(<LoadingSpinner isLoading={true} />)).toBeFalsy();
      });
    });
  };

  it('renders normally', async () => {
    const wrapper = getWrapper();

    await waitForContent(wrapper);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
