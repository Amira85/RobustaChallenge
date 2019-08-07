Cypress.lifecycle(false) // disable everything
Cypress.lifecycle({
  clearApp: true // but always clear the app
})

describe('my suite', function () {
  before(function () {
    cy.login() // establish the session only once!
  })

  beforeEach(function () {
    cy.visit('/') // but continue to visit before each test
  })

  it('test 1')

  it('test 2')

  it('test 3')
})