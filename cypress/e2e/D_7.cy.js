describe('Download page 7 to 9', () => {
  
  it('Visita a página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Visita a página de download', () => {
    cy.visitarPaginaDownload7_9();
  })

  it('pega os números e baixa os arquivos em massa', () => {
    cy.pegarNumeros7_9();
  })

})