describe('testando clicks na demoqa', () => {
    const seletores = {
        elementos: '#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-up',
        Buttons: '#item-4',
        doubleClickBtn: '#doubleClickBtn',
        rightClickBtn: '#rightClickBtn',
        doubleClickMessage: '#doubleClickMessage',
        rightClickMessage: '#rightClickMessage',
        dynamicClickMessage: '#dynamicClickMessage'
    }
    //Entrando no site
    beforeEach(() => {
        cy.visit('https://demoqa.com');
        // Clica no cartão "Elements" na página inicial
        cy.get(seletores.elementos).click();
        // Clica no link "Buttons" na sidebar da página de elementos
        cy.get(seletores.Buttons).click();
        // Opcional, mas boa prática: verificar se a página correta foi carregada
        cy.url().should('include', '/buttons');
        cy.get('.text-center').should('contain', 'Buttons'); // Verifica o título da página
    });

    it('deve clicar duas vezes e validar texto gerado', () => {
        cy.get(seletores.doubleClickBtn).dblclick();
        cy.get(seletores.doubleClickMessage).should('contain', 'You have done a double click');
    });

    it('deve clicar com botao direito e validar texto gerado', () => {
        cy.get(seletores.rightClickBtn).rightclick();
        cy.get(seletores.rightClickMessage).should('contain', 'You have done a right click');
    });

    it('deve clicar e validar texto gerado', () => {
        cy.contains(/^Click Me$/)
            .should('be.visible')
            .and('be.enabled')
            .click();
        cy.get(seletores.dynamicClickMessage).should('contain', 'You have done a dynamic click');
    });
})