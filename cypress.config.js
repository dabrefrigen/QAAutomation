const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.matchingengine.com',
    specPattern: 'cypress/spanish.cy.js',
    supportFile: false
  },
})