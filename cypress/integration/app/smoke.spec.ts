/// <reference types="cypress" />

describe('my portfolio', () => {
  it('should check landing page', () => {
    cy.visit('/')
    cy.findByText(/github/i).should('exist')

    cy.findByText('Ahmed ElDessouki').should('exist')
    cy.findAllByText(/projects/i).should('exist')
    cy.visit('/signin')
    cy.findByText(/sign-in/i).should('exist')
    cy.visit('/')
    cy.findByText(/contact me/i).should('exist')
    cy.visit('/404')
    cy.findByText(/home/i).should('exist').click()
    cy.findByText(/github/i).should('exist')
  })
})
