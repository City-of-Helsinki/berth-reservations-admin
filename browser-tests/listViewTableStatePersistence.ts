import { envUrl } from './utils/settings';
import { login } from './utils/login';
import { navigation } from './pages/navigation';
import { navigateBackAndForward } from './utils/navigation';
import { harbors } from './pages/harbors';
import { customers } from './pages/customers';
import { isColumnSorted, toggleSortColumn } from './utils/components/table';
import { applications } from './pages/applications';
import { winterStorageAreas } from './pages/winterStorageAreas';
import { unmarkedWsApplications } from './pages/unmarkedWsApplications';
import { wsApplications } from './pages/wsApplications';

const testSorting = async (t: TestController, tableSelector: Selector, column: number, timesToToggle: number) => {
  await t.expect(await isColumnSorted(tableSelector, column)).eql(true);

  for (let i = 0; i < timesToToggle; i += 1) {
    await toggleSortColumn(t, tableSelector, column);
  }

  await navigateBackAndForward();

  await t.expect(await isColumnSorted(tableSelector, column)).eql(false);
};

const testFilterText = async (t: TestController, inputSelector: Selector) => {
  const filterValue = 'a';
  await t.typeText(inputSelector, filterValue);

  await navigateBackAndForward();

  await t.expect(inputSelector.value).eql(filterValue);
};

fixture('List view table state persistence')
  .page(envUrl())
  .beforeEach(async (t) => {
    await login(t);
    // We want to push something to the history so that navigating back and forward simulates changing the page.
    await t.click(navigation.pricing);
  });

test('Application list', async (t) => {
  await t.click(navigation.applications);
  await testSorting(t, applications.applicationList.table, 4, 1);
});

test('Customer list', async (t) => {
  await t.click(navigation.customers);
  await testSorting(t, customers.customerList.table, 2, 2);
  await testFilterText(t, customers.customerList.searchInput);
});

test('Harbor list', async (t) => {
  await t.click(navigation.harbors);
  await testSorting(t, harbors.harborList.table, 2, 2);
  await testFilterText(t, harbors.harborList.globalFilterInput);
});

test('Unmarked WS notice list', async (t) => {
  await t.click(navigation.unmarkedWinterStorageApplications);
  await testSorting(t, unmarkedWsApplications.unmarkedWsApplicationsList.table, 3, 2);
});

test('Winter storage application list', async (t) => {
  await t.click(navigation.winterStorageApplications);
  await testSorting(t, wsApplications.wsApplicationsList.table, 3, 2);
});

test('Winter storage area list', async (t) => {
  await t.click(navigation.winterStorageAreas);
  await testSorting(t, winterStorageAreas.winterStorageAreaList.table, 2, 2);
  await testFilterText(t, winterStorageAreas.winterStorageAreaList.globalFilterInput);
});
