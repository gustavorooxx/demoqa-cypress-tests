describe('testando formulario na demoqa', () => {
    const seletores = {
      elementos: '#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-up',
      textBox: '#item-0',
      nome: '#userName',
      email: '#userEmail',
      enderecoAtual: '#currentAddress-wrapper > div.col-md-9.col-sm-12',
      enderecoPermanente: '#permanentAddress-wrapper > div.col-md-9.col-sm-12',
      submitButton: '#submit',
      nomeValidado: '#name',
      emailValidado: '#email',
      enderecoAtualValidado: '.border > #currentAddress',
      enderecoPermanentelValidado: '.border > #permanentAddress',
    }
    //Entrando no site
  beforeEach(() => {
    cy.visit('https://demoqa.com');
    // Clica no cartão "Elements" na página inicial
    cy.get(seletores.elementos).click();
    // Clica no link "Text Box" na sidebar da página de elementos
    cy.get(seletores.textBox).click();
    // Opcional, mas boa prática: verificar se a página correta foi carregada
    cy.url().should('include', '/text-box');
    cy.get('.text-center').should('contain', 'Text Box'); // Verifica o título da página
  });
    //Preenchendo e validando texto gerado do formulário
    it('deve preencher e validar todos os campos do formulário', () => {
      //Guardando dados que serão inseridos em uma const
      const testData = {
        name: 'Gustavo Chagas Souto',
        email: 'gustavo.chagas@example.com',
        currentAddress: 'Rua A, 123 - Bairro B',
        permanentAddress: 'Av. C, 456 - Cidade D',
      };
      // Preenchendo os campos
      cy.get(seletores.nome).type(testData.name);
      cy.get(seletores.email).type(testData.email);
      cy.get(seletores.enderecoAtual).type(testData.currentAddress)
      cy.get(seletores.enderecoPermanente).type(testData.permanentAddress);

      // Clicar em Submit
      cy.get(seletores.submitButton).click();

      // Validado os textos de saída
      cy.get(seletores.nomeValidado).should('have.text', `Name:${testData.name}`);
      cy.get(seletores.emailValidado).should('have.text', `Email:${testData.email}`);
      cy.get(seletores.enderecoAtualValidado).should('have.text', `Current Address :${testData.currentAddress} `);
      cy.get(seletores.enderecoPermanentelValidado).should('have.text', `Permananet Address :${testData.permanentAddress}`);
    });

  
})