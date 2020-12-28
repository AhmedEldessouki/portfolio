/// <reference types="cypress" />

describe('my portfolio', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })
  it('passes smoke tests', () => {
    cy.visit('/')
    cy.contains('Github').should('exist')
    cy.contains('Ahmed ElDessouki').should('exist')
    cy.contains(/projects/i).should('exist')
    cy.visit('/signin')
    cy.contains(/sign-in/i).should('exist')
    cy.visit('/')
    cy.contains(/contact me/i).should('exist')
  })
})
