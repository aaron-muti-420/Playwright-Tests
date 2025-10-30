import { test, expect } from '@playwright/test';
import { login } from '../utils/test-helpers';

test('create-terminate-outgoing', async ({ page }) => {
  // Recording...
  await login (page); 
  await page.getByRole('button', { name: 'Outgoing', exact: true }).click();
  await page.getByRole('link', { name: 'Create Transaction' }).nth(1).click();
  await page.getByRole('button', { name: 'Search Customer' }).click();
  await page.waitForTimeout(2000);
  await page.locator('div').filter({ hasText: 'Customer Information Full' }).nth(5).click();
  await page.getByRole('dialog', { name: 'Customer Search' }).getByLabel('Account Number').click();
  await page.getByRole('dialog', { name: 'Customer Search' }).getByLabel('Account Number').fill('8003842838');
  await page.getByLabel('Search Customer').click();
  await page.locator('cgp-card-body > .card-body').click();
 // This section Is Buggy - Need to run and Debug here 
  await page.getByRole('row', { name: '12726118 Elizabeth Gowases' }).getByRole('checkbox').check();
  await page.locator('.controls-section').click();
  await page.getByRole('button', { name: 'Fetch Accounts' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('RIM Account Information for Elizabeth Gowases 54 accounts found Export Selected').click();
  await page.getByRole('row', { name: '10019554 8000415394 Account-' }).getByRole('checkbox').check();
  await page.getByRole('textbox', { name: 'Payment Details' }).fill('Test Auto');
  //fix section
  await page.getByRole('textbox', { name: 'From Value' }).click();
  await page.getByRole('textbox', { name: 'From Value' }).fill('5000001000');
  await page.locator('.dropdown-container.dropdown-md.has-error > .dropdown-trigger > .dropdown-icons > .ng-fa-icon > .svg-inline--fa').first().click();
  await page.getByText('FIRST NATIONAL BANK OF NAMIBIA').click();
  await page.locator('.dropdown-container.dropdown-md.has-error > .dropdown-trigger > .dropdown-icons > .ng-fa-icon > .svg-inline--fa').click();
  await page.getByText('DEBT', { exact: true }).click();
  await page.getByRole('tab', { name: 'Creditor (to) Information' }).click();
  await page.getByRole('textbox', { name: 'Account Number' }).click();
  await page.getByRole('textbox', { name: 'Account Number' }).fill('587954532');
  await page.getByText('Entity').click();
  await page.getByRole('textbox', { name: 'Street Name' }).click();
  await page.getByRole('textbox', { name: 'Entity Name' }).click();
  await page.getByRole('textbox', { name: 'Entity Name' }).fill('TestAuto');
  await page.getByRole('textbox', { name: 'Registration Number' }).click();
  await page.getByRole('textbox', { name: 'Registration Number' }).fill('123456789');
  await page.getByRole('textbox', { name: 'Street Name' }).click();
  await page.getByRole('textbox', { name: 'Street Name' }).fill('Incopo');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Windhoek');
  await page.getByRole('button', { name: 'Create Transaction' }).click();
  await page.getByRole('button', { name: 'Submit for Approval' }).click();
  await page.getByRole('button', { name: 'Yes, Submit for Approval' }).click();
  await page.getByRole('button', { name: 'Terminate Transaction' }).click();
  await page.getByRole('button', { name: 'Yes, Terminate Transaction' }).click();

});