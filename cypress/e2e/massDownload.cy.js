describe('template spec', () => {
  
  it('Visita a página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('pega os números e baixa os arquivos em massa', () => {
    cy.pegarNumeros();
  })

})