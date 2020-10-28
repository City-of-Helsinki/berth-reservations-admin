import { Selector } from 'testcafe';

export const winterStorageAreas = {
  winterStorageAreaList: {
    table: Selector('div[class^="table_tableWrapper"]'),
    globalFilterInput: Selector('input[id="textSearchGlobalFilter"]'),
    firstWinterStorageArea: Selector(
      'div[class^="pageContent"] div[class^="table_rowWrapper"]:first-of-type div[class^="table_tableCell"]:nth-of-type(2)'
    ),
  },
};
