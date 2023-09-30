/// ＜reference types="cypress" /＞

it('passes', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Hi')
    cy.contains('Google Search').click()
})