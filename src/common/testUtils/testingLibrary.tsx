import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import userEvent from '@testing-library/user-event';
import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import i18n from '../../locales/i18n';

type AllTheProvidersProps = {
  children: JSX.Element;
  mocks?: MockedResponse[];
};

const AllTheProviders = ({ children, mocks }: AllTheProvidersProps) => {
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

type ExtendedRenderOptions = RenderOptions & {
  mocks?: MockedResponse[];
};

const customRender = (ui: React.ReactElement, { mocks, ...options }: ExtendedRenderOptions) =>
  render(ui, { wrapper: (props) => <AllTheProviders {...props} mocks={mocks} />, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

// export userEvent
export { userEvent };
