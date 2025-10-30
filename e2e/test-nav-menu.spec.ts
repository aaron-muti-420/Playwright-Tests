import { test, expect } from '@playwright/test';
import { CONFIG } from '../config/test.config';
import { login} from '../utils/test-helpers';

test('navigation-menu', async ({ page }) => {

  await login(page);  

  await page.getByRole('link', { name: 'All Transactions' }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('button', { name: 'Incoming', exact:true }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Create Transaction' }).first().click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'All Inward Transactions' }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Customer Info Pending' }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Pending Review' }).first().click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Pending Approval' }).first().click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Financial Processing' }).first().click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Financial Processed' }).first().click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Financial Failed' }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Customer Repairs' }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Terminated' }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('button', { name: 'Incoming', exact:true }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('button', { name: 'Outgoing', exact:true }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Create Transaction' }).nth(1).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'All Outward Transactions' }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Pending Review' }).nth(1).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Pending Approval' }).nth(1).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Pending Liquidity' }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Financial Processing' }).nth(1).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('link', { name: 'Financial Processed' }).nth(1).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('button', { name: 'Outgoing', exact:true }).click();

});