Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/')
    cy.contains('h1','Sample Files for Testing and Development').should('be.visible')
})