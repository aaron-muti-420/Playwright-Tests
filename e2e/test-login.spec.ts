import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bw-niss.dev-k8s.bdv.local/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('niss_superuser_test');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bdvoct@2025');
  await page.locator('cgp-button').click();
  await expect(page).toHaveURL('https://bw-niss.dev-k8s.bdv.local/dashboard');
}
);

