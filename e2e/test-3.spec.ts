import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bw-niss.dev-k8s.bdv.local/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('n');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('niss_superuser_test');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bdvoct@2025');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Incoming', exact: true }).click();
  await page.getByRole('link', { name: 'All Inward Transactions' }).click();
  await page.getByRole('link', { name: 'All Inward Transactions' }).click();
  await page.getByRole('row', { name: '210025 NISS12510280001 NISS' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'View Details' }).click();
  await page.getByRole('button', { name: 'Submit for Approval' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});