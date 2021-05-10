import { login } from './utils/login';
import { envUrl } from './utils/settings';
import { applications } from './pages/applications';
import { hasLength, hasPrice, inputHasPrice } from './utils/valueUtils';
import { navigation } from './pages/navigation';
import { harbors } from './pages/harbors';
import { customers } from './pages/customers';
import { pricing } from './pages/pricing';
import { winterStorageAreas } from './pages/winterStorageAreas';

fixture('Navigate and view').page(envUrl());

test('Berth applications', async (t) => {
  await login(t);
  await t.click(navigation.applicationsExpandable).click(navigation.applications);
  await t
    .expect(applications.applicationList.firstApplicationLink.exists)
    .ok()
    .click(applications.applicationList.firstApplicationLink)
    .expect(applications.applicationView.firstName.filter(hasLength).exists)
    .ok();
});

test('Winter storage applications', async (t) => {
  await login(t);
  await t.click(navigation.winterStorageApplications);
  await t
    .expect(applications.applicationList.firstApplicationLink.exists)
    .ok()
    .click(applications.applicationList.firstApplicationLink)
    .expect(applications.applicationView.firstName.filter(hasLength).exists)
    .ok();
});

test('Harbors', async (t) => {
  await login(t);
  await t.click(navigation.harbors);
  await t
    .expect(harbors.harborList.firstHarborLink.exists)
    .ok()
    .click(harbors.harborList.firstHarborLink)
    .expect(harbors.harborView.address.filter(hasLength).exists)
    .ok();
});

test('Winter storage areas', async (t) => {
  await login(t);
  await t.click(navigation.winterStorageAreas);
  await t.expect(winterStorageAreas.winterStorageAreaList.firstWinterStorageArea.filter(hasLength).exists).ok();
});

test('Customers', async (t) => {
  await login(t);
  await t.click(navigation.customers);
  await t
    .expect(customers.customerList.firstCustomerLink.exists)
    .ok()
    .click(customers.customerList.firstCustomerLink)
    .expect(customers.customerView.firstDataLabel.filter(hasLength).exists)
    .ok();
});

test('Pricing', async (t) => {
  await login(t);
  await t.click(navigation.pricing);
  await t.expect(pricing.berthPrices.tier1Price.filter(hasPrice).exists).ok();

  // Pricing modal
  await t
    .click(pricing.winterStoragePrices.editPriceButton)
    .expect(pricing.winterStoragePrices.priceModal.privatePrice.filter(inputHasPrice).exists)
    .ok();
});
