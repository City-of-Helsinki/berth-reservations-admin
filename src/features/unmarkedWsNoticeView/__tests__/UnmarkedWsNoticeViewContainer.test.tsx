import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import waitForExpect from 'wait-for-expect';
import UnmarkedWsNoticeViewContainer from '../UnmarkedWsNoticeViewContainer';
import LoadingSpinner from '../../../common/spinner/LoadingSpinner';
import { UNMARKED_WINTER_STORAGE_NOTICE_QUERY } from '../queries';
import { mockData } from '../__fixtures__/mockData';

const queryMock = {
  request: {
    query: UNMARKED_WINTER_STORAGE_NOTICE_QUERY,
    variables: {
      id: 'V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTox',
    },
  },
  result: {
    data: mockData,
  },
};

describe('UnmarkedWsNoticeViewContainer', () => {
  const getWrapper = () => {
    return mount(
      <MockedProvider mocks={[queryMock]}>
        <MemoryRouter initialEntries={['/V2ludGVyU3RvcmFnZUFwcGxpY2F0aW9uTm9kZTox']}>
          <Route path="/:id">
            <UnmarkedWsNoticeViewContainer />
          </Route>
        </MemoryRouter>
      </MockedProvider>
    );
  };

  const waitForContent = async (wrapper: ReactWrapper) => {
    await act(async () => {
      await waitForExpect(() => {
        wrapper.update();
        expect(wrapper.contains(<LoadingSpinner />)).toBeFalsy();
      });
    });
  };

  it('renders normally', async () => {
    const wrapper = getWrapper();

    await waitForContent(wrapper);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
