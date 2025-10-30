import { test, expect } from '@playwright/test';
import { CONFIG } from '../config/test.config';
import { login, searchCustomer, fillTransactionDetails } from '../utils/test-helpers';

test('create-outgoing-transaction', async ({ page }) => {
    // Login
    await login(page);
    

    // Navigate to create transaction
    await page.getByRole('button', { name: 'Outgoing', exact: true }).click();
    await page.getByRole('link', { name: 'Create Transaction' }).nth(1).click();

    // Search and select customer
    await searchCustomer(page);
    await page.getByRole('row', { name: '12726118 MARIA - RIM#' }).getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Fetch Accounts' }).click();
    await page.getByRole('row', { name: '12726118 7000287046 Account#' }).getByRole('checkbox').check();

    // Fill transaction details
    await fillTransactionDetails(page);

    // Select bank and charge type
    await page.locator('.dropdown-container.dropdown-md.has-error').first().click();
    await page.getByText(CONFIG.testData.payment.bank).click();
    await page.locator('.dropdown-container.dropdown-md.has-error').first().click();
    await page.getByText(CONFIG.testData.payment.chargeType).click();

    // Fill creditor information
    await page.getByRole('tab', { name: 'Creditor (to) Information' }).click();
    await page.getByText('Entity').click();
    await page.getByRole('textbox', { name: 'Account Number' }).fill(CONFIG.testData.accountNumber);
    await page.getByRole('textbox', { name: 'Entity Name' }).fill(CONFIG.testData.customerInfo.name);
    await page.getByRole('textbox', { name: 'Registration Number' }).fill(CONFIG.testData.customerInfo.regNumber);
    await page.getByRole('textbox', { name: 'Street Name' }).fill(CONFIG.testData.customerInfo.address);
    await page.getByRole('textbox', { name: 'City' }).fill(CONFIG.testData.customerInfo.city);

    // Submit and approve transaction
    await page.getByRole('button', { name: 'Create Transaction' }).click();
    await page.getByRole('button', { name: 'Submit for Approval' }).click();
    await page.getByRole('button', { name: 'Yes, Submit for Approval' }).click();
    await page.getByRole('button', { name: 'Approve Transaction' }).click();
    await page.getByRole('button', { name: 'Yes, Approve Transaction' }).click();
    
    // Verify and return
    await expect(page.getByRole('button', { name: 'Back to List' })).toBeVisible();
    await page.getByRole('button', { name: 'Back to List' }).click();
});