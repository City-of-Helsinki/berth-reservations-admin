import { AdditionalService, BerthPrice, HarborService, WinterStoragePrice } from './PricingPage';

const berthPrices: BerthPrice[] = [
  {
    id: '1',
    width: 2,
    privateCustomer: 116,
    company: 236,
    period: 'season',
  },
  {
    id: '2',
    width: 2.5,
    privateCustomer: 158,
    company: 326,
    period: 'month',
  },
  {
    id: '3',
    width: 2.75,
    privateCustomer: 178,
    company: 178,
    period: 'year',
  },
  {
    id: '4',
    width: 3,
    privateCustomer: 200,
    company: 200,
    period: 'season',
  },
  {
    id: '5',
    width: 3.5,
    privateCustomer: 242,
    company: 242,
    period: 'season',
  },
  {
    id: '6',
    width: 4,
    privateCustomer: 284,
    company: 284,
    period: 'season',
  },
  {
    id: '7',
    width: 4.5,
    privateCustomer: 326,
    company: 326,
    period: 'season',
  },
  {
    id: '8',
    width: 5,
    privateCustomer: 368,
    company: 368,
    period: 'season',
  },
  {
    id: '9',
    width: 5.5,
    privateCustomer: 410,
    company: 410,
    period: 'season',
  },
  {
    id: '10',
    width: 6,
    privateCustomer: 452,
    company: 452,
    period: 'season',
  },
  {
    id: '11',
    width: 7,
    privateCustomer: 536,
    company: 326,
    period: 'season',
  },
];

const winterStoragePrices: WinterStoragePrice[] = [
  {
    id: '1',
    area: 'Kaisaniemi',
    privateCustomer: 8.5,
    company: 17,
    period: 'season',
  },
  {
    id: '2',
    area: 'Lähteelä',
    privateCustomer: 8.5,
    company: 17,
    period: 'season',
  },
  {
    id: '3',
    area: 'Ruusuniemi 2',
    privateCustomer: 8.5,
    company: 17,
    period: 'season',
  },
  {
    id: '4',
    area: 'Pajalahti',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '5',
    area: 'Ruusuniemi 1',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '6',
    area: 'Jätkäsaari',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '7',
    area: 'Puotila',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '8',
    area: 'Marjaniemi',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '9',
    area: 'Strömsinlahti',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '10',
    area: 'Merisatama (läntinen)',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '11',
    area: 'Rajasaari (iso)',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '12',
    area: 'Iso-Sarvasto',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '13',
    area: 'Laivalahti',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '14',
    area: 'Porslahti',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '15',
    area: 'Merisatama (itä)',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
  {
    id: '16',
    area: 'Rajasaari (E,F,G)',
    privateCustomer: 10.6,
    company: 21.2,
    period: 'season',
  },
];

const harborServices: HarborService[] = [
  {
    id: '1',
    service: 'mooring',
    price: 28,
    unit: '€',
    period: 'season',
  },
  {
    id: '2',
    service: 'electricity',
    price: 28,
    unit: 'percentage',
    period: 'season',
  },
  {
    id: '3',
    service: 'water',
    price: 28,
    unit: '€',
    period: 'season',
  },
  {
    id: '4',
    service: 'wasteCollection',
    price: 28,
    unit: '€',
    period: 'season',
  },
  {
    id: '5',
    service: 'gate',
    price: 28,
    unit: '€',
    period: 'season',
  },
  {
    id: '6',
    service: 'lighting',
    price: 28,
    unit: '€',
    period: 'season',
  },
];

const additionalServices: AdditionalService[] = [
  {
    id: '1',
    service: 'trawlerSummerStorage',
    price: 24,
    tax: 0.24,
    period: 'season',
  },
  {
    id: '2',
    service: 'parkingPermit',
    price: 24,
    tax: 0.24,
    period: 'season',
  },
  {
    id: '3',
    service: 'parkingPermit',
    price: 24,
    tax: 0.24,
    period: 'season',
  },
  {
    id: '4',
    service: 'dinghyPlace',
    price: 24,
    tax: 0.24,
    period: 'season',
  },
];

export default {
  berthPrices,
  winterStoragePrices,
  harborServices,
  additionalServices,
};
