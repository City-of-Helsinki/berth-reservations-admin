import { Selector } from 'testcafe';

export const unmarkedWsApplications = {
  unmarkedWsApplicationsList: {
    table: Selector('div[class^="table_tableWrapper"]'),
    firstApplicationLink: Selector('div[class^="pageContent"] div[class^="table_rowWrapper"]:first-of-type a'),
  },
};
