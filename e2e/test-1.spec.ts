import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bw-niss.dev-k8s.bdv.local/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('niss_superuser_test');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bdvoct@2025');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Outgoing', exact: true }).click();
  await page.getByRole('link', { name: 'Create Transaction' }).nth(1).click();
  await page.getByRole('button', { name: 'Search Customer' }).click();
  await page.getByRole('dialog', { name: 'Customer Search' }).getByLabel('Account Number').click();
  await page.getByRole('dialog', { name: 'Customer Search' }).getByLabel('Account Number').fill('8000661544');
  await page.getByLabel('Search Customer').click();
  await page.locator('td').first().click();
  await page.getByRole('button', { name: 'Fetch Accounts' }).click();
  await page.locator('div').filter({ hasText: /^No data available$/ }).click();
  await expect(page.locator('td')).toMatchAriaSnapshot(`- text: No data available`);
});