Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/')
    cy.contains('h1','Sample Files for Testing and Development').should('be.visible')
})

Cypress.Commands.add('pegarNumeros', () => {

    cy.contains('Search Library').click();

    cy.get('.mb-0.text-muted.sf-search-results-copy').invoke('text').then((texto) => {

        const totalPaginas = texto.match(/Page \d+ of (\d+)/)[1]; 

        for (let i = 1; i <= totalPaginas; i++) {
            
            cy.get('.sf-action-row').each(($row) => {
                cy.wrap($row).find('a').contains('Download').click();
            });


            if (i < totalPaginas) {
                cy.contains('a', 'Next').click();
            }
        }


    });

});



