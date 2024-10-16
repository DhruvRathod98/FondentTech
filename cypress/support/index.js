import '@badeball/cypress-cucumber-preprocessor';

// cypress/support/e2e.js or cypress/support/index.js
Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test on any uncaught exception
    return false;
  });
  
  // Optionally, you can suppress all `console.error` messages as well
  Cypress.on('window:before:load', (win) => {
    const originalConsoleError = win.console.error;
  
    win.console.error = (...args) => {
      // You can log the errors to the Cypress log if you want
      // Or just ignore all errors
      // Uncomment the line below to see the suppressed errors in Cypress logs:
      // Cypress.log({ name: 'console.error', message: args });
  
      // Ignore all console errors
      return null;
    };
  });
  