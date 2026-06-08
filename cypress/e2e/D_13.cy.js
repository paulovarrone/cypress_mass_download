describe('Download page 13 to 15', () => {
  
  it('Visita a página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Visita a página de download', () => {
    cy.visitarPaginaDownload13_15();
  })

  it('pega os números e baixa os arquivos em massa', () => {
    cy.pegarNumeros13_15();
  })

})