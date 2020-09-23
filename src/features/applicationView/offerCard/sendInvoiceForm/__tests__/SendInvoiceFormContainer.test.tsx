import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import waitForExpect from 'wait-for-expect';
import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/react-testing';

import SendInvoiceFormContainer, { SendInvoiceFormContainerProps } from '../SendInvoiceFormContainer';
import { APPROVE_ORDERS_MUTATION } from '../mutations';

const mockDate = new Date('2020-09-23T00:00:00.000Z');
const mockProps: SendInvoiceFormContainerProps = {
  email: 'test@example.com',
  refetchQueries: [],
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
  orderId: 'MOCK-ORDER',
};

const realDateNow = Date.now.bind(global.Date);

beforeAll(() => {
  global.Date.now = jest.fn(() => mockDate.valueOf());
});

afterAll(() => {
  global.Date.now = realDateNow;
});

describe('SendInvoiceFormContainer', () => {
  const getWrapper = (props?: Partial<SendInvoiceFormContainerProps>, queryMocks?: ReadonlyArray<MockedResponse>) => {
    return mount(
      <MockedProvider mocks={queryMocks ?? []}>
        <SendInvoiceFormContainer {...mockProps} {...props} />
      </MockedProvider>
    );
  };

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
            dueDate: mockDate,
            orders: [
              {
                email: mockProps.email,
                orderId: mockProps.orderId,
              },
            ],
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
            dueDate: mockDate,
            orders: [
              {
                email: null,
                orderId: mockProps.orderId,
              },
            ],
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

    const wrapper = getWrapper({ onSubmit, email: null }, [mutationMock]);
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
