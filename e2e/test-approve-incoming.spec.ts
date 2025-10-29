import { test, expect } from '@playwright/test';
import { CONFIG } from '../config/test.config';
import { login, searchCustomer, fillTransactionDetails } from '../utils/test-helpers';

test('approve-transaction', async ({ page }) => {
  // Recording...
  // Login
  await login(page);

  //Next Steps 
  await page.getByRole('button', { name: 'Incoming', exact: true }).click();
  await page.getByRole('link', { name: 'Pending Review' }).first().click();
  await page.getByRole('row', { name: '	210128 NISS12510290005 NISS' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'View Details' }).click();
  await page.getByRole('button', { name: 'Submit for Approval' }).click();
  await page.getByRole('button', { name: 'Yes, Submit for Approval' }).click();
  await page.getByRole('button', { name: 'Approve Transaction' }).click();
  await page.getByRole('button', { name: 'Yes, Approve Transaction' }).click();
  await page.getByRole('button', { name: 'Back to List' }).click();
});