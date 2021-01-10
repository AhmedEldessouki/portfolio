/// <reference types="cypress" />

describe('onToggle desktop', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })
  it('select a project and check its position in the DOM', () => {
    cy.visit('/')
    cy.contains(/projects/i).should('exist')

    cy.wait(2000)

    cy.get('button')
      .contains(/portfolio v1/i)
      .click()

    let pos1
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        pos1 = Cypress.dom.getElementCoordinatesByPosition($el)
      })

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el).fromElWindow.left,
        ).not.to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el).fromElWindow.left,
        ).to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('[data-testid=next-toggle]').click()
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('not.exist')
    cy.get('[data-testid=close-toggler]').click()
  })
  it('check focus', () => {
    cy.visit('/')
    cy.contains(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))
    cy.wait(2000)
    cy.get('button')
      .contains(/portfolio v1/i)
      .click()

    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('button')
      .contains(/portfolio v2/i)
      .click()
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('not.have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=close-toggler]').click()
  })
})
describe('onToggle phoneLarge', () => {
  beforeEach(() => {
    cy.viewport(900, 720)
  })
  it('select a project and check its position in the DOM', () => {
    cy.visit('/')
    cy.contains(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))
    cy.wait(2000)
    cy.get('button')
      .contains(/portfolio v1/i)
      .click()

    let pos1
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        pos1 = Cypress.dom.getElementCoordinatesByPosition($el)
      })

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el).fromElWindow.left,
        ).not.to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el).fromElWindow.left,
        ).to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('not.exist')

    cy.get('[data-testid=close-toggler]').click()
  })
  it('check focus', () => {
    cy.visit('/')
    cy.contains(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))
    cy.wait(2000)
    cy.get('button')
      .contains(/portfolio v1/i)
      .click()

    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('button')
      .contains(/portfolio v2/i)
      .click()
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('not.have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=close-toggler]').click()
  })
})
describe('onToggle ipad', () => {
  beforeEach(() => {
    cy.viewport('ipad-2')
  })
  it('select a project and check its position in the DOM', () => {
    cy.visit('/')
    cy.contains(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))
    cy.wait(2000)
    cy.get('button')
      .contains(/portfolio v1/i)
      .click()

    let pos1
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        pos1 = Cypress.dom.getElementCoordinatesByPosition($el)
      })

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el).fromElWindow.left,
        ).not.to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el).fromElWindow.left,
        ).to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('not.exist')

    cy.get('[data-testid=close-toggler]').click()
  })
  it('check focus', () => {
    cy.visit('/')
    cy.contains(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))
    cy.wait(2000)
    cy.get('button')
      .contains(/portfolio v1/i)
      .click()

    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('button')
      .contains(/portfolio v2/i)
      .click()
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('not.have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=close-toggler]').click()
  })
})
describe('onToggle iphone', () => {
  beforeEach(() => {
    cy.viewport('iphone-7')
  })
  it('select a project and check its position in the DOM', () => {
    cy.visit('/')
    cy.contains(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))
    cy.wait(2000)
    cy.get('button')
      .contains(/portfolio v1/i)
      .click()

    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('not.exist')

    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('exist')

    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('not.exist')

    cy.get('[data-testid=close-toggler]').click()
  })
  it('check focus', () => {
    cy.visit('/')
    cy.contains(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))
    cy.wait(2000)
    cy.get('button')
      .contains(/portfolio v1/i)
      .click()

    cy.get('button')
      .contains(/portfolio v1/i)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=next-toggle]').click()

    cy.get('button')
      .contains(/portfolio v2/i)
      .click()
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains(/portfolio v1/i)
      .should('not.have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=close-toggler]').click()
  })
})
