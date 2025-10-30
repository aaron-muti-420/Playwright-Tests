import { test, expect } from '@playwright/test';
import { login } from '../utils/test-helpers';
import { CONFIG } from '../config/test.config';

test('Create and submit incoming transaction', async ({ page }) => {
  // Step 1: Login (reusable helper)
  await login(page);

  // Step 2: Navigate to Create Transaction
  const incomingButton = page.getByRole('button', { name: 'Incoming', exact: true });
  await expect(incomingButton).toBeVisible({ timeout: 10000 });
  await incomingButton.click();

  const createTransactionLink = page.getByRole('link', { name: 'Create Transaction' }).first();
  await expect(createTransactionLink).toBeVisible();
  await createTransactionLink.click();

  // Step 3: Search Customer
  const searchCustomerBtn = page
    .locator('button.cgp-button--secondary', { hasText: 'Search Customer' });
  await expect(searchCustomerBtn).toBeVisible({ timeout: 10000 });
  await searchCustomerBtn.click();

  const customerSearchDialog = page.getByRole('dialog', { name: 'Customer Search' });
  await expect(customerSearchDialog).toBeVisible();

  const accountInput = customerSearchDialog.getByLabel('Account Number');
  await accountInput.fill('8003842838');

  const confirmSearchBtn = customerSearchDialog
    .locator('button.cgp-button--primary[title="Search Customer"]'); // disambiguated
  await expect(confirmSearchBtn).toBeVisible();
  await confirmSearchBtn.click();

  // Step 4: Select Customer Row
  const customerRow = page.getByRole('row', { name: /Elizabeth Gowases/i });
  await expect(customerRow).toBeVisible({ timeout: 10000 });
  await customerRow.getByRole('checkbox').check();

  // Step 5: Fetch Accounts
  const fetchAccountsBtn = page.getByRole('button', { name: 'Fetch Accounts' });
  await expect(fetchAccountsBtn).toBeVisible();
  await fetchAccountsBtn.click();

  // Step 6: Select Account Row
  const accountRow = page.getByRole('row', { name: /8000415394/i });
  await expect(accountRow).toBeVisible({ timeout: 10000 });
  await accountRow.getByRole('checkbox').check();

  // Step 7: Fill Transaction Details
  const fromValue = page.getByRole('textbox', { name: 'From Value' });
  await fromValue.fill('458885');

  const paymentDetails = page.getByRole('textbox', { name: 'Payment Details' });
  await paymentDetails.fill('Cash Payment');

  // Step 8: Select Bank and Transaction Type
  const bankDropdown = page.locator('dropdown-container dropdown-md').first();
  await bankDropdown.click();
  await page.getByText('FIRST NATIONAL BANK OF NAMIBIA', { exact: true }).click();

  const typeDropdown = page.locator('.dropdown-trigger').nth(1);
  await typeDropdown.click();
  await page.getByText(/^CRED$/).click();

  // Step 9: Fill Debtor Information
  await page.getByRole('tab', { name: /Debtor \(to\) Information/ }).click();
  await page.getByRole('textbox', { name: 'Account Number' }).fill('8003842838');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Test Auto');
  await page.getByRole('textbox', { name: 'Street Name' }).fill('Namibia');
  await page.getByRole('textbox', { name: 'City' }).fill('Windhoek');

  // Step 10: Create & Submit Transaction
  const createTransactionBtn = page.getByRole('button', { name: 'Create Transaction' });
  await expect(createTransactionBtn).toBeEnabled();
  await createTransactionBtn.click();

  const submitApprovalBtn = page.getByRole('button', { name: 'Submit for Approval' });
  await expect(submitApprovalBtn).toBeVisible();
  await submitApprovalBtn.click();

  const confirmSubmitBtn = page.getByRole('button', { name: 'Yes, Submit for Approval' });
  await expect(confirmSubmitBtn).toBeVisible();
  await confirmSubmitBtn.click();

  // Optional: Assertion or Success Message
  await expect(page.getByText(/Transaction submitted successfully/i)).toBeVisible({ timeout: 15000 });
});
