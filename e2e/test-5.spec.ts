import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bw-niss.stg-k8s.bwstg.local/login?returnUrl=%2F');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('niss_superuser_test');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bdvoct@2025');
  await page.locator('cgp-button').click();
  await page.goto('https://bw-niss.stg-k8s.bwstg.local/login?returnUrl=%2F');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('niss_superuser_test');
  await page.goto('chrome-error://chromewebdata/');
});