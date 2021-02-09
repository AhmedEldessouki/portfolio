/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  console.log(err,runnable)
  return false
})
describe('onToggle desktop', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('/')
  })
  it('select a project and check its position in the DOM', () => {
    cy.findAllByText(/projects/i).should('exist')

    cy.findByText('Portfolio V1').click()

    let pos1: Cypress.ElementCoordinates
    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        pos1 = Cypress.dom.getElementCoordinatesByPosition($el, '')
      })

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el, '').fromElWindow
            .left,
        ).not.to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el, '').fromElWindow
            .left,
        ).to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('[data-testid=next-toggle]').click()
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button').contains('Portfolio V1').should('not.exist')
    cy.get('[data-testid=close-toggler]').click()
  })
  it('check focus', () => {
    cy.findAllByText(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))

    cy.findByText('Portfolio V1').click()

    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.findByText('Portfolio V2')
      .click()
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('not.have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=close-toggler]').click()
  })
})
describe('onToggle phoneLarge', () => {
  beforeEach(() => {
    cy.viewport(900, 720)
    cy.visit('/')
  })
  it('select a project and check its position in the DOM', () => {
    cy.findAllByText(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))

    cy.findByText('Portfolio V1').click()

    let pos1: Cypress.ElementCoordinates
    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        pos1 = Cypress.dom.getElementCoordinatesByPosition($el, '')
      })

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el, '').fromElWindow
            .left,
        ).not.to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el, '').fromElWindow
            .left,
        ).to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button').contains('Portfolio V1').should('not.exist')

    cy.get('[data-testid=close-toggler]').click()
  })
  it('check focus', () => {
    cy.findAllByText(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))

    cy.findByText('Portfolio V1').click()

    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.findByText('Portfolio V2')
      .click()
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('not.have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=close-toggler]').click()
  })
})
describe('onToggle ipad', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport('ipad-2')
  })
  it('select a project and check its position in the DOM', () => {
    cy.findAllByText(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))

    cy.findByText('Portfolio V1').click()

    let pos1: Cypress.ElementCoordinates
    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        pos1 = Cypress.dom.getElementCoordinatesByPosition($el, '')
      })

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el, '').fromElWindow
            .left,
        ).not.to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')
      .then($el => {
        expect(
          Cypress.dom.getElementCoordinatesByPosition($el, '').fromElWindow
            .left,
        ).to.eq(pos1.fromElWindow.left)
      })
    cy.get('[data-testid=next-toggle]').click()
    cy.get('button').contains('Portfolio V1').should('not.exist')

    cy.get('[data-testid=close-toggler]').click()
  })
  it('check focus', () => {
    cy.findAllByText(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))

    cy.findByText('Portfolio V1').click()

    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.findByText('Portfolio V2')
      .click()
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('not.have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=close-toggler]').click()
  })
})
describe('onToggle iphone', () => {
  beforeEach(() => {
    cy.viewport('iphone-7')
  })
  it('select a project and check its position in the DOM', () => {
    cy.findAllByText(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))

    cy.findByText('Portfolio V1').click()

    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button').contains('Portfolio V1').should('not.exist')

    cy.get('[data-testid=next-toggle]').click()
    cy.get('button').contains('Portfolio V1').should('exist')

    cy.get('[data-testid=next-toggle]').click()
    cy.get('button').contains('Portfolio V1').should('not.exist')

    cy.get('[data-testid=close-toggler]').click()
  })
  it('check focus', () => {
    cy.findAllByText(/projects/i).should('exist')
    // cy.wait('@getProjects').then(inc => expect(inc).to.include(/portfolio/i))

    cy.findByText('Portfolio V1').click()

    cy.get('button')
      .contains('Portfolio V1')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=next-toggle]').click()

    cy.findByText('Portfolio V2')
      .click()
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=before-toggle]').click()
    cy.get('button')
      .contains('Portfolio V1')
      .should('not.have.css', 'background-color', 'rgba(255, 255, 255, 0.74)')

    cy.get('[data-testid=close-toggler]').click()
  })
})
