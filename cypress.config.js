const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 2000,
  viewportHeight: 1500,
  retries: 0,
  projectId: '5rwr1c',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '**/examples/*.js',
    baseUrl: 'https://preprod.onemedtest.com/',
    specPattern: 'cypress/e2e/**/*.spec.*',
  },
})
