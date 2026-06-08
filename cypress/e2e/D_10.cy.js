describe('Download page 10 to 12', () => {
  
  it('Visita a página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Visita a página de download', () => {
    cy.visitarPaginaDownload10_12();
  })

  it('pega os números e baixa os arquivos em massa', () => {
    cy.pegarNumeros10_12();
  })

})