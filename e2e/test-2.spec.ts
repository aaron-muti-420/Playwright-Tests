import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bw-niss.dev-k8s.bdv.local/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('hksahdkakjd');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('an,snd,sad');
  await page.locator('cgp-button').click();
});