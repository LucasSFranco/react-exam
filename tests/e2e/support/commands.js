Cypress.Commands.add('getBy', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args)
})
