import {
  createAddressAndOrganizationProperties,
  createEmailProperties,
  createPhoneProperties,
  createSensitivedataInputs,
  createUpdateInputs,
  getCustomerFormValues,
  getIdentifiers,
  mapCustomerGroupAsOrganizationType,
} from '../utils';
import {
  mockOrganizationCustomerFormIdentifiers as orgIds,
  mockOrganizationCustomerFormValues as orgFormValues,
  mockOrganizationCustomerProfile as orgProfile,
  mockPrivateCustomerFormIdentifiers as privateIds,
  mockPrivateCustomerFormValues as privateFormValues,
  mockPrivateCustomerProfile as privateProfile,
} from '../__fixtures__/mockData';
import { CustomerGroup } from '../../../@types/__generated__/globalTypes';

describe('utils', () => {
  describe('getCustomerFormValues', () => {
    it('maps a private customer correctly', () => {
      expect(getCustomerFormValues(privateProfile)).toMatchSnapshot();
    });

    it('maps a private customer with minimum data correctly', () => {
      expect(
        getCustomerFormValues({
          ...privateProfile,
          comment: null,
          primaryAddress: null,
          primaryPhone: null,
          primaryEmail: null,
          sensitivedata: null,
        })
      ).toMatchSnapshot();
    });

    it('maps an organization customer correctly', () => {
      expect(getCustomerFormValues(orgProfile)).toMatchSnapshot();
    });

    it('maps an organization customer with minimum data correctly', () => {
      expect(
        getCustomerFormValues({
          ...orgProfile,
          comment: null,
          primaryAddress: null,
          primaryPhone: null,
          primaryEmail: null,
        })
      ).toMatchSnapshot();
    });
  });

  describe('getIdentifiers', () => {
    it('maps a private customer correctly', () => {
      expect(getIdentifiers(privateProfile)).toMatchSnapshot();
    });

    it('maps an organization customer correctly', () => {
      expect(getIdentifiers(orgProfile)).toMatchSnapshot();
    });
  });

  describe('mapCustomerGroupAsOrganizationType', () => {
    it('should map each organization customer group to an organization type', () => {
      const orgCustomerGroups = Object.values(CustomerGroup).filter((value) => value !== CustomerGroup.PRIVATE);
      expect.assertions(orgCustomerGroups.length);

      orgCustomerGroups.forEach((customerGroup) => {
        expect(mapCustomerGroupAsOrganizationType(customerGroup)).toBeDefined();
      });
    });

    it('should map CustomerGroup.PRIVATE as "undefined"', () => {
      expect(mapCustomerGroupAsOrganizationType(CustomerGroup.PRIVATE)).toBeUndefined();
    });
  });

  describe('createEmailProperties', () => {
    it('should return "updateEmails" if email is not empty and previously existed', () => {
      expect(createEmailProperties('test@example.com', 'TEST-EMAIL')).toEqual({
        updateEmails: [
          {
            email: 'test@example.com',
            id: 'TEST-EMAIL',
            primary: true,
          },
        ],
      });
    });

    it('should return "addEmails" if email is not empty and did not previously exist', () => {
      expect(createEmailProperties('test@example.com', '')).toEqual({
        addEmails: [
          {
            email: 'test@example.com',
            emailType: 'NONE',
            primary: true,
          },
        ],
      });
    });

    it('should return "removeEmails" if email is empty and previously existed', () => {
      expect(createEmailProperties('', 'TEST-EMAIL')).toEqual({
        removeEmails: ['TEST-EMAIL'],
      });
    });

    it('should return an empty object if email is empty and did not previously exist', () => {
      expect(createEmailProperties('', '')).toEqual({});
    });
  });

  describe('createPhoneProperties', () => {
    it('should return "updatePhones" if phone is not empty and previously existed', () => {
      expect(createPhoneProperties('test@example.com', 'TEST-PHONE')).toEqual({
        updatePhones: [
          {
            phone: 'test@example.com',
            id: 'TEST-PHONE',
            primary: true,
          },
        ],
      });
    });

    it('should return "addPhones" if phone is not empty and did not previously exist', () => {
      expect(createPhoneProperties('test@example.com', '')).toEqual({
        addPhones: [
          {
            phone: 'test@example.com',
            phoneType: 'NONE',
            primary: true,
          },
        ],
      });
    });

    it('should return "removePhones" if phone is empty and previously existed', () => {
      expect(createPhoneProperties('', 'TEST-PHONE')).toEqual({
        removePhones: ['TEST-PHONE'],
      });
    });

    it('should return an empty object if phone is empty and did not previously exist', () => {
      expect(createPhoneProperties('', '')).toEqual({});
    });
  });

  describe('createAddressAndOrganizationProperties', () => {
    it('should handle switch from organization customer to private customer', () => {
      const [addressProperties, organizationProperties] = createAddressAndOrganizationProperties(
        privateFormValues,
        orgIds
      );

      expect(addressProperties.addAddresses).toBeDefined();
      expect(organizationProperties.deleteOrganization).toBeDefined();

      expect(addressProperties.removeAddresses).toBeUndefined();
      expect(addressProperties.updateAddresses).toBeUndefined();
      expect(organizationProperties.organization).toBeUndefined();
    });

    describe('should handle switch from private customer to organization customer', () => {
      test('with pre-existing address', () => {
        const [addressProperties, organizationProperties] = createAddressAndOrganizationProperties(
          orgFormValues,
          privateIds
        );

        expect(addressProperties.removeAddresses).toBeDefined();
        expect(organizationProperties.organization).toBeDefined();

        expect(addressProperties.addAddresses).toBeUndefined();
        expect(addressProperties.updateAddresses).toBeUndefined();
        expect(organizationProperties.deleteOrganization).toBeUndefined();
      });

      test('with no pre-existing address', () => {
        const [addressProperties, organizationProperties] = createAddressAndOrganizationProperties(orgFormValues, {
          ...privateIds,
          primaryAddressId: undefined,
        });

        expect(addressProperties.removeAddresses).toEqual([]);
        expect(organizationProperties.organization).toBeDefined();

        expect(addressProperties.addAddresses).toBeUndefined();
        expect(addressProperties.updateAddresses).toBeUndefined();
        expect(organizationProperties.deleteOrganization).toBeUndefined();
      });
    });

    describe('should handle updating a private customer', () => {
      test('with pre-existing address', () => {
        const [addressProperties, organizationProperties] = createAddressAndOrganizationProperties(
          privateFormValues,
          privateIds
        );

        expect(addressProperties.updateAddresses).toBeDefined();

        expect(addressProperties.addAddresses).toBeUndefined();
        expect(addressProperties.removeAddresses).toBeUndefined();
        expect(organizationProperties.deleteOrganization).toBeUndefined();
        expect(organizationProperties.organization).toBeUndefined();
      });

      test('with no pre-existing address', () => {
        const [addressProperties, organizationProperties] = createAddressAndOrganizationProperties(privateFormValues, {
          ...privateIds,
          primaryAddressId: undefined,
        });

        expect(addressProperties.addAddresses).toBeDefined();

        expect(addressProperties.removeAddresses).toBeUndefined();
        expect(addressProperties.updateAddresses).toBeUndefined();
        expect(organizationProperties.deleteOrganization).toBeUndefined();
        expect(organizationProperties.organization).toBeUndefined();
      });
    });

    it('should handle updating an organization customer', () => {
      const [addressProperties, organizationProperties] = createAddressAndOrganizationProperties(orgFormValues, orgIds);

      expect(organizationProperties.organization).toBeDefined();

      expect(addressProperties.addAddresses).toBeUndefined();
      expect(addressProperties.removeAddresses).toBeUndefined();
      expect(addressProperties.updateAddresses).toBeUndefined();
      expect(organizationProperties.deleteOrganization).toBeUndefined();
    });
  });

  describe('createSensitivedataInputs', () => {
    describe('for private customers', () => {
      it('should set sensitivedata.ssn if ssn is filled and sensitivedata exists', () => {
        expect(createSensitivedataInputs(CustomerGroup.PRIVATE, '000000-0000', true)).toEqual({
          sensitivedata: {
            ssn: '000000-0000',
          },
        });
      });

      it('should set sensitivedata.ssn if ssn is filled and sensitivedata does not exist', () => {
        expect(createSensitivedataInputs(CustomerGroup.PRIVATE, '000000-0000', false)).toEqual({
          sensitivedata: {
            ssn: '000000-0000',
          },
        });
      });

      it('should set empty sensitivedata.ssn if ssn is empty sensitivedata exists', () => {
        expect(createSensitivedataInputs(CustomerGroup.PRIVATE, '', true)).toEqual({
          sensitivedata: {
            ssn: '',
          },
        });
      });

      it('should not set sensitivedata if ssn is empty and sensitivedata does not exist', () => {
        expect(createSensitivedataInputs(CustomerGroup.PRIVATE, '', false)).toBeUndefined();
      });
    });

    describe('for organization customers', () => {
      it('should set empty sensitivedata.ssn if sensitivedata exists', () => {
        expect(createSensitivedataInputs(CustomerGroup.COMPANY, '000000-0000', true)).toEqual({
          sensitivedata: {
            ssn: '',
          },
        });
        expect(createSensitivedataInputs(CustomerGroup.COMPANY, '', true)).toEqual({
          sensitivedata: {
            ssn: '',
          },
        });
      });

      it('should not set sensitivedata if sensitivedata does not exist', () => {
        expect(createSensitivedataInputs(CustomerGroup.COMPANY, '000000-0000', false)).toBeUndefined();
        expect(createSensitivedataInputs(CustomerGroup.COMPANY, '', false)).toBeUndefined();
      });
    });
  });

  describe('createUpdateInputs', () => {
    it('should handle switch from organization customer to private customer', () => {
      expect(createUpdateInputs(privateFormValues, orgIds)).toMatchSnapshot();
    });

    it('should handle switch from private customer to organization customer', () => {
      expect(createUpdateInputs(orgFormValues, privateIds)).toMatchSnapshot();
    });

    it('should handle updating a private customer', () => {
      expect(createUpdateInputs(privateFormValues, privateIds)).toMatchSnapshot();
    });

    it('should handle updating an organization customer', () => {
      expect(createUpdateInputs(orgFormValues, orgIds)).toMatchSnapshot();
    });
  });
});
