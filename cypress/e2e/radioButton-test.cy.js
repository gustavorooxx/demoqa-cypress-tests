describe('testando radio button na demoqa', () => {
    const seletores = {
        elementos: '#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-up',
        radioButton: '#item-2',
        yesButton: '#app > div > div > div > div.col-12.mt-4.col-md-6 > div:nth-child(3) > div:nth-child(2) > label',
        impressiveButton: '#app > div > div > div > div.col-12.mt-4.col-md-6 > div:nth-child(3) > div:nth-child(3)',
        noButton: '#noRadio',
        radioButtonValidation: '#app > div > div > div > div.col-12.mt-4.col-md-6 > div:nth-child(3) > p',
        
    }
    //Entrando no site
    beforeEach(() => {
        cy.visit('https://demoqa.com');
        // Clica no cartão "Elements" na página inicial
        cy.get(seletores.elementos).click();
        // Clica no link "Radio Button" na sidebar da página de elementos
        cy.get(seletores.radioButton).click();
        // Opcional, mas boa prática: verificar se a página correta foi carregada
        cy.url().should('include', '/radio-button');
        cy.get('.text-center').should('contain', 'Radio Button'); // Verifica o título da página
    });

    it('deve clicar e validar o clique no yes', () => {
        cy.get(seletores.yesButton).click();
        cy.get(seletores.radioButtonValidation).should('contain', 'You have selected Yes')
    });

    it('deve clicar e validar o clique no impressive', () => {
        cy.get(seletores.impressiveButton).click();
        cy.get(seletores.radioButtonValidation).should('contain', 'You have selected Impressive')
    });

    it('deve validar que o botao no esta desabilitado', () => {
        cy.get(seletores.noButton).should('be.disabled');
    })

})