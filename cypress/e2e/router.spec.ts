/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unused-expressions */
/// <reference types="cypress" />

describe('Router check', () => {
  beforeEach(() => {
    cy.clearLocalStorage('__portfolio_user__')
    window.indexedDB.deleteDatabase('firebaseLocalStorageDb')
  })
  beforeEach(() => {
    cy.clearLocalStorage('__portfolio_user__')
    window.indexedDB.deleteDatabase('firebaseLocalStorageDb')
  })
  it('Router Test', () => {
    cy.clearLocalStorage().should(ls => {
      expect(ls.getItem('__portfolio_user__')).to.be.null
    })

    cy.visit('/')

    cy.findByText(/github/i).should('exist')
    cy.findAllByText(/Ahmed ElDessouki/i).should('exist')
    cy.findAllByText(/projects/i).should('exist')

    cy.findByText(/2021 Ahmed ElDessouki/i).click()

    cy.findByText(/sign-in/i).should('exist')
    cy.get('form').within(() => {
      cy.findByPlaceholderText(/email/i)
        .type(`${Cypress.env('email')}`)
        .should('have.value', `${Cypress.env('email')}`)
      cy.findByPlaceholderText(/password/i)
        .type(`${Cypress.env('password')}`)
        .should('have.value', `${Cypress.env('password')}`)
      cy.get('button').click()
    })
    cy.findByText(/contact me/i).should('exist')

    cy.findByText(/dashboard/i).click()
    cy.findAllByText(/projects/i).should('exist')
    cy.findByText(/messages/i).should('exist')
    cy.findByText(/contact me/i).should('not.exist')

    cy.findByText(/create project/i).click()
    cy.findAllByText(/create project/i).should('exist')
    cy.findByText(/accepted Images/i).should('not.exist')

    cy.findByText('Tags').click()
    cy.findAllByText(/create tag/i).should('exist')
    cy.findAllByText(/Tags Control/i).should('exist')

    cy.findByText(/signup/i).click()
    cy.findByText(/sign up/i).should('exist')

    cy.get('button')
      .findByText(/signout/i)
      .click()
    cy.visit('/404')

    cy.findByText(/home/i).click()

    cy.findByText(/signup/i).should('not.exist')
  })
})
