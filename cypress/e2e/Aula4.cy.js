/*

Aula 4 - Curso Cypress Alura
Data: 28/01/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


//Rotina de login com validação envolvendo backend
describe('Login - Fluxos Válido', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app');
        cy.get('[href="/login"]').click();
        

        cy.intercept('POST','https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode:400, }).as('stubPost');

    }) 
    
    it('Validar mensagem de falha de login', () => {
        cy.get('button').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
        
    })


    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.get('#email').type('ana@email.com');
        cy.get('#pass').type('Senha123');
        cy.get('button').click();
        cy.wait('@stubPost', { timeout: 10000 });
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
        
 
    })

})