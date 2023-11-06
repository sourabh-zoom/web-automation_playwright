// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
 
  use: {
    browserName:'chromium',
    headless:false,
    trace: 'on-first-retry',
    screenshot:'only-on-failure',
    actionTimeout: 10000,
    navigationTimeout: 30000
  },
  
  globalTimeout: 60*60*1000,
  expect: {
    timeout: 20 * 1000,
  },
  
  testMatch:['Sahome.spec.js']
});

