import React from 'react';
import { shallow } from 'enzyme';

import ApplicationCard from './ApplicationCard';

const mockProps = {
  applicationType: 'Vaihtohakemus',
  receivedDate: '23.8.2019, klo 21.06',
  queueNumber: 245,
  status: 'Ei käsitelty',
  boatType: 'Purjevene / moottoripursi',
  registrationNumber: 'A 12345',
  boatWidth: '3,2 m',
  boatLength: '6 m',
  boatDepth: '0,8 m',
  boatWeight: '350 kg',
  boatName: 'Cama la Yano',
  boatBrand: 'Marine',
  selectedPorts: [
    { title: 'Pursilahdenranta', id: '123' },
    { title: 'Pursilahdenranta', id: '123' },
  ],
  accessible: true,
};

describe('ApplicationCard', () => {
  const getWrapper = (props = mockProps) =>
    shallow(<ApplicationCard {...props} />);

  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
