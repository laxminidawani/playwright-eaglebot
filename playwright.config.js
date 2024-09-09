// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');
const { on } = require('events');

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 30*1000,
  expect: {
    timeout: 5000
  },
  use: {
    browserName : 'chromium',
    headless : false,
    trace: 'on',
    screenshot : 'on'
  },
    
});

