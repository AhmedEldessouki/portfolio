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
  it(
    'Router Test',
    {
      env: {
        email: 'nemoahmed@hotmail.co.uk',
        password: '123456',
      },
    },
    () => {
      cy.clearLocalStorage().should(ls => {
        expect(ls.getItem('__portfolio_user__')).to.be.null
      })

      cy.visit('/')

      cy.contains('Github').should('exist')
      cy.contains('Ahmed ElDessouki').should('exist')
      cy.contains(/projects/i).should('exist')
      cy.get('a')
        .contains(/2019 Ahmed ElDessouki/i)
        .click()

      cy.contains(/sign-in/i).should('exist')
      cy.get('form').within(() => {
        cy.get('#email')
          .type(`${Cypress.env('email')}`)
          .should('have.value', `${Cypress.env('email')}`)
        cy.get('#password')
          .type(`${Cypress.env('password')}`)
          .should('have.value', `${Cypress.env('password')}`)
        cy.wait(3000)
        cy.get('button').click()
      })
      cy.wait(1000)
      cy.contains(/contact me/i).should('exist')

      cy.get('a')
        .contains(/dashboard/i)
        .click()
      cy.wait(1000)
      cy.contains(/projects/i).should('exist')
      cy.contains(/messages/i).should('exist')
      cy.contains(/contact me/i).should('not.exist')

      cy.get('a')
        .contains(/create project/i)
        .click()
      cy.wait(1000)
      cy.contains(/Create Project/i).should('exist')
      cy.contains(/New Images/i).should('exist')

      cy.get('a').contains(/tags/i).click()
      cy.wait(1000)
      cy.contains(/Create tag/i).should('exist')
      cy.contains(/Tags Control/i).should('exist')

      cy.get('a')
        .contains(/signup/i)
        .click()
      cy.wait(1000)
      cy.contains(/sign up/i).should('exist')

      cy.get('a')
        .contains(/signout/i)
        .click()
      cy.visit('/404')
      cy.wait(1000)

      cy.get('a').contains(/home/i).click()
    },
  )
})
