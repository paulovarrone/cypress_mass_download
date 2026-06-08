describe('Download page 1 to 3', () => {
  
  it('Visita a página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Visita a página de download', () => {
    cy.visitarPaginaDownload1_3();
  })

  it('pega os números e baixa os arquivos em massa', () => {
    cy.pegarNumeros1_3();
  })

})