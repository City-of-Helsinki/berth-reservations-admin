import React, { useState } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { wait } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import { GraphQLError } from 'graphql';

import hdsToast from '../hdsToast';
import HDSToastContainer from '../HDSToastContainer';
import i18n from '../../../locales/i18n';

describe('HDSToastContainer', () => {
  const TestComponent = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <HDSToastContainer />
        <button
          id="toastBtn"
          onClick={() => {
            hdsToast({ type: 'error', labelText: 'labelText', text: 'text', toastId: `toast-${count}` });
            setCount(count + 1);
          }}
        />
      </div>
    );
  };

  const getWrapper = () => {
    return mount(<TestComponent />);
  };

  const simulateToast = async (wrapper: ReactWrapper) => {
    wrapper.find('#toastBtn').simulate('click');
    await act(async () => await wait(100));
    wrapper.update();
  };

  const simulateCloseToast = async (wrapper: ReactWrapper, toastId: number) => {
    wrapper.find(`#toast-${toastId}`).find('button[title="Sulje ilmoitus"]').simulate('click');
    await act(async () => await wait(1500));
    wrapper.update();
  };

  it('adds toasts to the container when hdsToast is called', async () => {
    const wrapper = getWrapper();
    await simulateToast(wrapper);
    expect(wrapper.find('#toast-0')).toHaveLength(1);
    expect(wrapper.find('.Toastify__toast')).toHaveLength(1);
  });

  it('supports multiple simultaneous toasts', async () => {
    const wrapper = getWrapper();
    await simulateToast(wrapper);
    await simulateToast(wrapper);
    expect(wrapper.find('#toast-0')).toHaveLength(1);
    expect(wrapper.find('#toast-1')).toHaveLength(1);
    expect(wrapper.find('.Toastify__toast')).toHaveLength(2);
  });

  it('closes toast when the notifications close button is clicked', async () => {
    const wrapper = getWrapper();
    await simulateToast(wrapper);
    expect(wrapper.find('#toast-0')).toHaveLength(1);
    await simulateCloseToast(wrapper, 0);
    expect(wrapper.find('#toast-0')).toHaveLength(0);
    expect(wrapper.find('.Toastify__toast')).toHaveLength(0);
  });

  describe('graphQLErrors', () => {
    const defaultMessage = 'default message';
    const graphQLErrors = [
      new GraphQLError(defaultMessage, undefined, undefined, undefined, undefined, undefined, {
        code: 'default',
      }),
      new GraphQLError(defaultMessage, undefined, undefined, undefined, undefined, undefined, undefined),
    ];

    const venepaikkaWarning = new GraphQLError(
      'warning message',
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      {
        type: 'VENEPAIKKA_WARNING',
      }
    );

    const venepaikkaError = new GraphQLError('error message', undefined, undefined, undefined, undefined, undefined, {
      type: 'VENEPAIKKA_ERROR',
    });

    const venepaikkaWarningWithCode = new GraphQLError(
      'warning message',
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      {
        type: 'VENEPAIKKA_WARNING',
        code: 'test',
      }
    );

    const GraphQLErrorsTestComponent = ({ errors }: { errors: GraphQLError[] }) => {
      return (
        <div>
          <HDSToastContainer />
          <button
            id="toastBtn"
            onClick={() => {
              hdsToast.graphQLErrors(errors);
            }}
          />
        </div>
      );
    };

    it('creates a toast from each graphQLError', async () => {
      const wrapper = mount(<GraphQLErrorsTestComponent errors={graphQLErrors} />);
      await simulateToast(wrapper);
      expect(wrapper.find('.Toastify__toast')).toHaveLength(2);
      expect(wrapper.text()).not.toContain(defaultMessage);
    });

    it('Uses message from graphQL error when extensions.type is a venepaikka error', async () => {
      const warningWrapper = mount(<GraphQLErrorsTestComponent errors={[venepaikkaWarning]} />);
      await simulateToast(warningWrapper);
      expect(warningWrapper.text()).toContain('warning message');

      const errorWrapper = mount(<GraphQLErrorsTestComponent errors={[venepaikkaError]} />);
      await simulateToast(errorWrapper);
      expect(warningWrapper.text()).toContain('error message');
    });

    it('Uses translations based on code when extensions.code is defined and a translation exists', async () => {
      const label = 'label from code';
      const description = 'description from code';

      i18n.addResourceBundle(
        'fi',
        'testNamespace',
        {
          toast: {
            graphQLErrors: {
              test: {
                label,
                description,
              },
            },
          },
        },
        true,
        true
      );
      i18n.setDefaultNamespace('testNamespace');

      const warningWrapper = mount(<GraphQLErrorsTestComponent errors={[venepaikkaWarningWithCode]} />);
      await simulateToast(warningWrapper);
      expect(warningWrapper.text()).toContain(label);
      expect(warningWrapper.text()).toContain(description);
    });
  });
});
