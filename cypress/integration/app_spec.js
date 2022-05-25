describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', { fixture: "example.json" })
    cy.visit('http://localhost:3000/')
  })

  it('should be able to visit the page and render reservations', () => {
    cy.get('.resy-card').should('have.length', 2)
  })

  it('should keep track of form inputs', () => {
    cy.get('.form__input-name').click().type('Rachel')
    cy.get('.form__input-date').click().type('2022-05-26')
    cy.get('.form__input-time').click().type('05:00')
    cy.get('.form__input-number').click().type('4')
  })

  it('should enter in information for a reservation and see their reservation rendered on the page', () => {
    cy.get('.form__input-name').click().type('Rachel')
    cy.get('.form__input-date').click().type('2022-05-26')
    cy.get('.form__input-time').click().type('05:00')
    cy.get('.form__input-number').click().type('4')
    cy.get('.make-reservation-btn').click()
    cy.get('.resy-card').last().contains('Rachel')
    cy.get('.resy-card').last().contains('2022-05-26')
    cy.get('.resy-card').last().contains('05:00')
    cy.get('.resy-card').last().contains('4')
  })
})
