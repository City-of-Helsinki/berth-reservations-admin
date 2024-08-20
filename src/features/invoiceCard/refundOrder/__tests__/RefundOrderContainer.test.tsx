import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import waitForExpect from 'wait-for-expect';
import { act } from 'react-dom/test-utils';
import RefundOrderContainer, { RefundOrderContainerProps } from '../RefundOrderContainer';
import RefundOrder from '../RefundOrder';
import { REFUND_ORDER_MUTATION } from '../mutations';
import { OrderRefundStatus, OrderStatus } from '../../../../@types/__generated__/globalTypes';

describe('RefundOrderContainer', () => {
  const initialProps: RefundOrderContainerProps = {
    orderId: '5999e366-6db6-46b0-a728-a150a8b5b8f3',
    amount: 220,
    refetchQueries: [],
    onClose: jest.fn(),
  };

  const getWrapper = (props: Partial<RefundOrderContainerProps> = {}, queryMocks?: ReadonlyArray<MockedResponse>) =>
    mount(
      <MockedProvider mocks={queryMocks ?? []}>
        <RefundOrderContainer {...initialProps} {...props} />
      </MockedProvider>
    );

  it('renders RefundOrder', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(RefundOrder)).toHaveLength(1);
  });

  it('calls the mutation correctly', async () => {
    let mutationMockCalled = false;
    const mutationMock = {
      request: {
        query: REFUND_ORDER_MUTATION,
        variables: {
          input: {
            orderId: initialProps.orderId,
          },
        },
      },
      result: function () {
        mutationMockCalled = true;
        return {
          data: {
            refundOrder: {
              __typename: 'RefundOrderMutationPayload',
              orderRefund: {
                __typename: 'OrderRefundNode',
                order: {
                  __typename: 'OrderNode',
                  status: OrderStatus.PAID,
                },
                status: OrderRefundStatus.PENDING,
                amount: initialProps.amount,
              },
            },
          },
        };
      },
    };

    const wrapper = getWrapper(undefined, [mutationMock]);
    await act(async () => {
      const handleSubmit = wrapper.find(RefundOrder).prop('onSubmit');

      handleSubmit();

      await waitForExpect(() => {
        wrapper.update();
        expect(mutationMockCalled).toBe(true);
      });
    });
  });
});
