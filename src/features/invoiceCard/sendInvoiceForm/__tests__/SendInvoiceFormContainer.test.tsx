import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import waitForExpect from 'wait-for-expect';
import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/react-testing';

import SendInvoiceFormContainer, { SendInvoiceFormContainerProps } from '../SendInvoiceFormContainer';
import { APPROVE_ORDERS_MUTATION } from '../../../../common/mutations/approveOrders';

const mockProps: SendInvoiceFormContainerProps = {
  orders: [
    {
      orderId: 'MOCK-ORDER',
      email: 'test@example.com',
    },
  ],
  refetchQueries: [],
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
};

// needs mock because mutation calls getProfileToken
jest.mock('../../../../common/utils/auth');

describe('SendInvoiceFormContainer', () => {
  const mockDate: Date = new Date('2020-09-23T00:00:00.000Z');
  const dateSpy = jest.spyOn(global.Date, 'now').mockImplementation(() => mockDate.valueOf());

  const getWrapper = (props?: Partial<SendInvoiceFormContainerProps>, queryMocks?: ReadonlyArray<MockedResponse>) => {
    return mount(
      <MockedProvider mocks={queryMocks ?? []}>
        <SendInvoiceFormContainer {...mockProps} {...props} />
      </MockedProvider>
    );
  };

  afterAll(() => {
    dateSpy.mockRestore();
  });

  it('renders normally', async () => {
    const wrapper = getWrapper();
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('calls the mutation correctly', async () => {
    let mutationMockCalled = false;
    const mutationMock = {
      request: {
        query: APPROVE_ORDERS_MUTATION,
        variables: {
          input: {
            dueDate: '2020-10-07',
            orders: mockProps.orders,
          },
        },
      },
      result: function () {
        mutationMockCalled = true;
        return {
          data: {
            approveOrders: {
              __typename: 'ApproveOrderMutationPayload',
              clientMutationId: '-',
            },
          },
        };
      },
    };

    const onSubmit = jest.fn();

    const wrapper = getWrapper({ onSubmit }, [mutationMock]);
    await act(async () => {
      wrapper.find('Form').simulate('submit');
      await waitForExpect(() => {
        wrapper.update();
        expect(onSubmit).toBeCalledTimes(1);
        expect(mutationMockCalled).toBe(true);
      });
    });
  });

  it('does not submit if email is null', async () => {
    let mutationMockCalled = false;
    const mutationMock = {
      request: {
        query: APPROVE_ORDERS_MUTATION,
        variables: {
          input: {
            dueDate: '2020-09-23',
            orders: mockProps.orders,
          },
        },
      },
      result: function () {
        mutationMockCalled = true;
        return {
          data: {
            approveOrders: {
              __typename: 'ApproveOrderMutationPayload',
              clientMutationId: '-',
            },
          },
        };
      },
    };

    const onSubmit = jest.fn();

    const wrapper = getWrapper({ onSubmit }, [mutationMock]);
    await act(async () => {
      wrapper.find('Form').simulate('submit');
      await waitForExpect(() => {
        wrapper.update();
        expect(onSubmit).toBeCalledTimes(0);
        expect(mutationMockCalled).toBe(false);
      });
    });
  });
});
