describe('Download page 16 to 18', () => {
  
  it('Visita a página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Visita a página de download', () => {
    cy.visitarPaginaDownload16_18();
  })

  it('pega os números e baixa os arquivos em massa', () => {
    cy.pegarNumeros16_18();
  })

})