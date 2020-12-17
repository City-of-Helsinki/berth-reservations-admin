import { login } from './utils/login';
import { envUrl } from './utils/settings';
import { navigation } from './pages/navigation';
import { customers } from './pages/customers';
import { inputHasLength } from './utils/valueUtils';

fixture('Customer list view').page(envUrl());

test('Selection of customers', async (t) => {
  await login(t);

  // Select all customers from first page
  await t
    .click(navigation.customers)
    .expect(customers.customerList.firstCustomerLink)
    .ok()
    .click(customers.customerList.selectAllToggle)
    .click(customers.customerList.paginationNextButton)
    .expect(customers.customerList.selectedCount.textContent)
    .contains('10');

  // Select one customer from the second page
  await t
    .click(customers.customerList.selectFirstCustomer)
    .expect(customers.customerList.selectedCount.textContent)
    .contains('11');

  // Unselect all customers
  await t.click(customers.customerList.deselectAll).expect(customers.customerList.selectedCount.exists).notOk();
});

test('Pagination', async (t) => {
  await login(t);

  // Stay on the same page after reloading the browser
  await t.click(navigation.customers).click(customers.customerList.paginationNextButton);
  await t.eval(() => window.location.reload());
  await t.expect(customers.customerList.selectedPage.textContent).contains('2');
});

test('Editing customers', async (t) => {
  await login(t);

  await t
    .click(navigation.customers)
    .click(customers.customerList.firstCustomerLink)
    .click(customers.customerView.editButton)
    .expect(customers.customerView.editForm.firstNameField.filter(inputHasLength).exists)
    .ok();
});
