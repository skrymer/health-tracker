/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      loginByOkta(email: string, password: string): Chainable<void>
    }
  }
}

// cypress/support/auth-provider-commands/okta.ts
// Okta
const loginToOkta = (username: string, password: string) => {
  Cypress.log({
    displayName: 'OKTA LOGIN',
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  })

  cy.visit('/')
  cy.origin(
    Cypress.env('okta_domain'),
    { args: { username, password } },
    ({ username, password }) => {
      cy.get('input[name="identifier"]').type(username)
      cy.get('input[name="credentials.passcode"]').type(password, {
        log: false,
      })
      cy.get('[type="submit"]').click()
    }
  )

  cy.get('[data-test="sidenav-username"]').should('contain', username)
}
// right now our custom command is light. More on this later!
Cypress.Commands.add('loginByOkta', (username: string, password: string) => {
  cy.session(
    `okta-${username}`,
    () => {
      return loginToOkta(username, password)
    },
    {
      validate() {
        cy.visit('/')
        cy.get('[data-test="sidenav-username"]').should('contain', username)
      },
    }
  )
})