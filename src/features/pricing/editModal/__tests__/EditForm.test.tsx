import React from 'react';
import { mount } from 'enzyme';
import { Form } from 'formik';
import { act } from 'react-dom/test-utils';
import EditForm, { EditPricingFormProps, EDIT_FORM_TYPE } from '../EditForm';
import WinterStorageFields from '../fields/WinterStorageFields';
import HarborServicesFields from '../fields/HarborServicesFields';
import { BerthPrice } from '../../berthPricing/BerthPricing';
import { WinterStoragePrice } from '../../winterStoragePricing/WinterStoragePricing';
import { HarborService } from '../../harborServicePricing/HarborServicePricing';
import { PeriodType, ProductServiceType, PriceUnits } from '../../../../@types/__generated__/globalTypes';

const winterStorageData: WinterStoragePrice = {
  id: '1',
  area: 'Kaisaniemi',
  privateCustomer: 8.5,
  company: 17,
  period: PeriodType.SEASON,
  productId: '4e08ff02-4a79-497e-8275-6f33fd242462',
};

const harborServicesData: HarborService = {
  id: '1',
  service: ProductServiceType.PARKING_PERMIT,
  price: 28,
  unit: PriceUnits.AMOUNT,
  period: PeriodType.SEASON,
};

describe('EditForm', () => {
  const mockProps: Pick<
    EditPricingFormProps<BerthPrice | WinterStoragePrice | HarborService>,
    'closeModal' | 'onSubmit'
  > = {
    onSubmit: jest.fn(),
    closeModal: jest.fn(),
  };

  const getWrapper = (
    props: Pick<EditPricingFormProps<BerthPrice | WinterStoragePrice | HarborService>, 'initialValues' | 'formType'>
  ) => mount(<EditForm {...mockProps} {...props} />);

  // [name, component, data, formType]
  const cases: [string, () => JSX.Element, BerthPrice | WinterStoragePrice | HarborService, EDIT_FORM_TYPE][] = [
    ['winter storage', WinterStorageFields, winterStorageData, EDIT_FORM_TYPE.WINTER_STORAGE],
    ['harbor services', HarborServicesFields, harborServicesData, EDIT_FORM_TYPE.HARBOR_SERVICES],
  ];

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe.each(cases)('with %s data and form type', (name, component, data, formType) => {
    it(`should render ${component.name}`, () => {
      const form = getWrapper({
        initialValues: data,
        formType,
      }).find(Form);

      expect(form.find(component)).toHaveLength(1);
    });

    it('should render a working cancel button', () => {
      const form = getWrapper({
        initialValues: data,
        formType,
      }).find(Form);
      const cancelButton = form.find('button#cancel');
      cancelButton.simulate('click');

      expect(mockProps.closeModal).toHaveBeenCalledTimes(1);
    });

    it('should render a working submit button', () => {
      const form = getWrapper({
        initialValues: data,
        formType,
      }).find(Form);
      const submitButton = form.find('button[type="submit"]');

      expect(submitButton).toHaveLength(1);
    });

    it('should have working onSubmit', async () => {
      const form = getWrapper({
        initialValues: data,
        formType,
      }).find(Form);

      await act(async () => {
        form.simulate('submit');
      });

      expect(mockProps.onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
