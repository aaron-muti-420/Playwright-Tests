import { Page, expect } from '@playwright/test';
import { CONFIG } from '../config/test.config';

export async function login(page: Page) {
    await page.goto(`${CONFIG.baseUrl}/login`);
    await page.getByRole('textbox', { name: 'Username' }).fill(CONFIG.credentials.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(CONFIG.credentials.password);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page).toHaveURL(/.*dashboard/);
}

export async function searchCustomer(page: Page) {
    await page.getByRole('button', { name: 'Search Customer' }).click();
    await page.getByRole('dialog', { name: 'Customer Search' }).getByLabel('Account Number')
        .fill(CONFIG.testData.accountNumber);
    await page.getByLabel('Search Customer').click();
    await expect(page.getByRole('row', { name: '12726118 MARIA - RIM#' }))
        .toBeVisible({ timeout: 10000 });
}

export async function fillTransactionDetails(page: Page) {
    await page.getByRole('textbox', { name: 'Payment Details' })
        .fill(CONFIG.testData.payment.details);
    await page.getByRole('textbox', { name: 'From Value' })
        .fill(CONFIG.testData.payment.amount);
}