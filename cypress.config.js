const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'db8qyu',
  // projectId: 'p9d8j5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
