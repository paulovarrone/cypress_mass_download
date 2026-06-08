Cypress.Commands.add('visitarPaginaDownload10_12', () => {
    cy.visit('/samples/search/?sort=name_asc&per_page=50&page=10')
    cy.contains('h2','Search Results').should('be.visible')
})

Cypress.Commands.add('pegarNumeros10_12', () => {

    const totalPaginas = 3 

    for (let i = 1; i <= totalPaginas; i++) {
            
        cy.get('.sf-action-row').each(($row) => {
            cy.wrap($row).find('a').contains('Download').click();
        });


        if (i < totalPaginas) {
            cy.contains('a', 'Next').click();
        }
    }

});



