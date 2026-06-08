describe('Download page 4 to 6', () => {
  
  it('Visita a página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Visita a página de download', () => {
    cy.visitarPaginaDownload4_6();
  })

  it('pega os números e baixa os arquivos em massa', () => {
    cy.pegarNumeros4_6();
  })

})