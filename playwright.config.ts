import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is used */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Run tests with 1 worker on CI for stability */
  workers: process.env.CI ? 1 : undefined,

  /* Increase default test timeout (was 30s → now 90s) */
  timeout: 90000,

  /* Set expect timeout for assertions (default: 5s → now 10s) */
  expect: {
    timeout: 10000,
  },

  /* Use HTML report */
  reporter: 'html',

  /* Shared settings for all projects */
  use: {
    /* Headless browser (set to false if you want to see browser actions) */
    headless: true,

    /* Base URL (optional if you use page.goto('/')) */
    // baseURL: 'http://localhost:3000',

    /* Record trace for all tests — helps debug hangs */
    trace: 'on',

    /* Record video for failed tests only */
    video: 'retain-on-failure',

    /* Capture screenshots for failed tests */
    screenshot: 'only-on-failure',

    /* Waits longer for navigation (useful for slow-loading pages) */
    navigationTimeout: 45000,
  },

  /* Configure browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment below if needed
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  /* Optionally run local dev server before tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
