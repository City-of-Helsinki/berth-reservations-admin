import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/react-testing';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import i18n from '../../locales/i18n';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const AllTheProviders = ({ children, mocks }) => {
  return (
    <RecoilRoot>
      <I18nextProvider i18n={i18n}>
        <HashRouter>
          <MockedProvider mocks={mocks}>{children}</MockedProvider>
        </HashRouter>
      </I18nextProvider>
    </RecoilRoot>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const customRender = (ui, { mocks, ...options }) =>
  render(ui, { wrapper: (props) => <AllTheProviders {...props} mocks={mocks} />, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

// export userEvent
export { userEvent };
