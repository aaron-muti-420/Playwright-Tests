import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://bw-niss.stg-k8s.bwstg.local/login?returnUrl=%2F');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('niss_superuser_test');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bdvoct@2025');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://bw-niss.stg-k8s.bwstg.local/dashboard');
  await page.getByRole('button', { name: 'Outgoing', exact: true }).click();
  await page.getByRole('link', { name: 'Create Transaction' }).nth(1).click();
  await page.getByRole('button', { name: 'Search Customer' }).click();
  await page.getByRole('dialog', { name: 'Customer Search' }).getByLabel('Account Number').click();
  await page.getByRole('dialog', { name: 'Customer Search' }).getByLabel('Account Number').fill('8003842838');
  await page.getByLabel('Search Customer').click();
  await page.getByRole('row', { name: '12726118 Elizabeth Gowases' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Fetch Accounts' }).click();
  await page.getByRole('row', { name: '10019554 8000415394 Account-' }).getByRole('checkbox').check();
  await page.getByRole('textbox', { name: 'Payment Details' }).fill('Test Payment');
  await page.getByRole('textbox', { name: 'From Value' }).click();
  await page.getByRole('textbox', { name: 'From Value' }).fill('500000100');
  await page.locator('.dropdown-container.dropdown-md.has-error > .dropdown-trigger > .dropdown-icons > .ng-fa-icon > .svg-inline--fa > path').first().click();
  await page.locator('.dropdown-container.dropdown-md.has-error > .dropdown-trigger > .dropdown-icons > .ng-fa-icon > .svg-inline--fa').first().click();
  await page.getByText('FIRST NATIONAL BANK OF NAMIBIA').click();
  await page.locator('.dropdown-container.dropdown-md.has-error > .dropdown-trigger > .dropdown-icons > .ng-fa-icon > .svg-inline--fa').click();
  await page.getByText('CRED', { exact: true }).click();
  await page.getByRole('tab', { name: 'Creditor (to) Information' }).click();
  await page.getByRole('textbox', { name: 'Account Number' }).click();
  await page.getByRole('textbox', { name: 'Account Number' }).fill('1254896');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Test Ind');
  await page.getByRole('textbox', { name: 'Street Name' }).click();
  await page.getByRole('textbox', { name: 'Street Name' }).fill('Kasino');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Windhoek');
  await page.getByRole('button', { name: 'Create Transaction' }).click();
});