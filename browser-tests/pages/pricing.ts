import { Selector } from 'testcafe';

export const pricing = {
  berthPrices: {
    tier1Price: Selector(
      'div[class^="pageContent"] div[class^="table_rowWrapper"] div[class^="table_tableCell"]:nth-of-type(2)'
    ).nth(0),
  },
  winterStoragePrices: {
    editPriceButton: Selector('div[class^="pageContent"] div[class^="table_rowWrapper"] button').nth(3),
    priceModal: {
      privatePrice: Selector('div[class^="ReactModal__Content"] #privateCustomer'),
    },
  },
};
