/// <reference types="cypress" />

import {a11yRunOnly, terminalLog} from 'utils/utils'

before(() => {
  cy.clearLocalStorage('__portfolio_user__')
  window.indexedDB.deleteDatabase('firebaseLocalStorageDb')
})
describe('A11y check', () => {
  beforeEach(() => {
    cy.visit('/signin')
    cy.get('form').within(() => {
      cy.findByPlaceholderText(/email/i)
        .type(`${Cypress.env('email')}`)
        .should('have.value', `${Cypress.env('email')}`)
      cy.findByPlaceholderText(/password/i)
        .type(`${Cypress.env('password')}`)
        .should('have.value', `${Cypress.env('password')}`)
      cy.get('button').click()
    })
    cy.findByText(/Github/i).should('exist')
  })

  it('HomePage', () => {
    cy.injectAxe()
    cy.checkA11y(undefined, a11yRunOnly, terminalLog)
  })

  it('DashBoard', () => {
    cy.visit('/dashboard')

    cy.injectAxe()
    cy.checkA11y(undefined, a11yRunOnly, terminalLog)

    cy.findByText(/projects/i).should('exist')
    cy.findByText(/messages/i).should('exist')
  })

  it('Create Project', () => {
    cy.visit('/create-project')

    cy.injectAxe()
    cy.checkA11y(undefined, a11yRunOnly, terminalLog)

    cy.findByText(/Create Project/i).should('exist')
  })
  it('Tags', () => {
    cy.visit('/tags')

    cy.findByText(/Create tag/i).should('exist')
    cy.findByText(/Tags Control/i).should('exist')
    cy.injectAxe()
    cy.checkA11y(undefined, a11yRunOnly, terminalLog)
  })

  it('Signup', () => {
    cy.visit('/signup')

    cy.findByText(/sign up/i).should('exist')
    cy.injectAxe()
    cy.checkA11y(undefined, a11yRunOnly, terminalLog)

    cy.get('button')
      .findByText(/signout/i)
      .click()

    cy.get('a').findByText(/home/i).click()
  })

  it('404', () => {
    cy.visit('/404')

    cy.findByText(/home/i).should('exist')

    cy.injectAxe()
    cy.checkA11y(undefined, a11yRunOnly, terminalLog)
  })
})
it('Sign In Page', () => {
  cy.visit('/signin')
  cy.injectAxe()
  cy.checkA11y(undefined, a11yRunOnly, terminalLog)
  cy.get('form').within(() => {
    cy.findByPlaceholderText(/email/i)
      .type(`${Cypress.env('email')}`)
      .should('have.value', `${Cypress.env('email')}`)
    cy.findByPlaceholderText(/password/i)
      .type(`${Cypress.env('password')}`)
      .should('have.value', `${Cypress.env('password')}`)
    cy.get('button').click()
  })
})
