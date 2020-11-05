import { Selector } from 'testcafe';

export const applications = {
  applicationList: {
    table: Selector('div[class^="table_tableWrapper"]'),
    firstApplicationLink: Selector('div[class^="pageContent"] div[class^="table_rowWrapper"]:first-of-type a'),
  },
  applicationView: {
    firstName: Selector(
      'div[class^="pageContent"] div[class^="labelValuePair_"]:first-of-type span:nth-of-type(2)'
    ).nth(0),
  },
};
