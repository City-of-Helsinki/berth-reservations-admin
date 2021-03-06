import React from 'react';
import { shallow } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import CustomerProfileCard, { CustomerProfileCardProps } from '../CustomerProfileCard';
import { privateCustomerProfile } from '../../privateCustomerDetails/__fixtures__/mockData';
import { organizationCustomerProfile } from '../../organizationCustomerDetails/__fixtures__/mockData';
import { CustomerGroup } from '../../../@types/__generated__/globalTypes';

describe('CustomerProfileCard', () => {
  const getWrapper = (props: CustomerProfileCardProps) =>
    shallow(
      <HashRouter>
        <CustomerProfileCard {...props} />
      </HashRouter>
    );

  describe('with the minimum private customer profile fields', () => {
    it('renders normally', () => {
      const wrapper = getWrapper({
        firstName: 'Testi',
        lastName: 'Käyttäjä',
        language: null,
      });
      expect(wrapper.render()).toMatchSnapshot();
    });
  });

  describe('with a private customer profile', () => {
    it('renders normally', () => {
      const wrapper = getWrapper(privateCustomerProfile);
      expect(wrapper.render()).toMatchSnapshot();
    });

    it('does not show the customer name as link if not specified', () => {
      const wrapper = getWrapper({
        ...privateCustomerProfile,
        showCustomerNameAsLink: false,
      });
      expect(wrapper.render().find('a.internalLink[href="#/customers/0"]').length).toEqual(0);
    });

    it('shows the customer name as link if specified', () => {
      const wrapper = getWrapper({
        ...privateCustomerProfile,
        showCustomerNameAsLink: true,
      });
      // 3: firstName, lastName
      expect(wrapper.render().find('a.internalLink[href="#/customers/0"]').length).toEqual(2);
    });
  });

  describe('with the minimum organization customer profile fields', () => {
    it('renders normally', () => {
      const wrapper = getWrapper({
        firstName: 'Testi',
        lastName: 'Käyttäjä',
        organization: organizationCustomerProfile.organization,
        language: null,
        customerGroup: CustomerGroup.COMPANY,
      });
      expect(wrapper.render()).toMatchSnapshot();
    });
  });

  describe('with an organization customer profile', () => {
    it('renders normally', () => {
      const wrapper = getWrapper(organizationCustomerProfile);
      expect(wrapper.render()).toMatchSnapshot();
    });

    it('does not show the customer name as link if not specified', () => {
      const wrapper = getWrapper({
        ...organizationCustomerProfile,
        showCustomerNameAsLink: false,
      });
      expect(wrapper.render().find('a.internalLink[href="#/customers/0"]').length).toEqual(0);
    });

    it('shows the customer name as link if specified', () => {
      const wrapper = getWrapper({
        ...organizationCustomerProfile,
        showCustomerNameAsLink: true,
      });
      // 3: firstName, lastName, ssn
      expect(wrapper.render().find('a.internalLink[href="#/customers/0"]').length).toEqual(2);
    });
  });
});
