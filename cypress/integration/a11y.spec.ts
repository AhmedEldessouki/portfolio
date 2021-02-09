/// <reference types="cypress" />

import {a11yRunOnly, terminalLog} from 'utils/utils'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  console.log(err,runnable)
  return false
})
describe('A11y check', () => {
  before(() => {
    cy.clearLocalStorage('__portfolio_user__')
    window.indexedDB.deleteDatabase('firebaseLocalStorageDb')
  })
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

    cy.findAllByText(/projects/i).should('exist')
    cy.findAllByText(/messages/i).should('exist')
  })

  it('Create Project', () => {
    cy.visit('/create-project')
    cy.injectAxe()
    cy.checkA11y('#create-project-form', a11yRunOnly, terminalLog)
  })
  it('Tags', () => {
    cy.visit('/tags-control')
    cy.injectAxe()
    cy.checkA11y(undefined, a11yRunOnly, terminalLog)
  })

  it('Signup', () => {
    cy.visit('/signup')

    cy.findByText(/sign up/i).should('exist')
    cy.injectAxe()
    cy.checkA11y(undefined, a11yRunOnly, terminalLog)

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
