/*

Aula 2 - Curso Cypress Alura
Data: 20/01/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


// Cadastro de usuário
describe('Cadastro de usuários', () => {
    it('Cadastro de usuário utilizando fluxo de caminho feliz', () => {
      cy.visit('https://adopet-tau.vercel.app/cadastro');
      cy.get('#name').type('John Doe');
      cy.get('#email').type('john.doe@email.com');
      cy.get('#pass-create').type('Bella123456');
      cy.get('#pass-confirm').type('Bella123456');
      cy.get('button').click();
      
    })
  })


  // Cadastro de usuário - Dados em branco
describe('Cadastro de usuários - Fluxos alternativos', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('[href="/login"]').click();

    }) 
    
    it('Cadastro de usuário - Dados em branco', () => {
        cy.get('#email').type('john.doe@email.com');
        cy.get('#pass').type('Bella123456');
        cy.get('button').click();
      
    })
   
    describe('Cadastro de usuários - Fluxos alternativos', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('[href="/login"]').click();

    }) 
    
    it('Cadastro de usuário - Dados em branco', () => {
        cy.get('#email').type('john.doe@email.com');
        cy.get('#pass').type('Bella123456');
        cy.get('button').click();
      
    })



    })

    describe('Login - Fluxos alternativos', () => {
        beforeEach(() => {
            cy.visit('https://adopet-tau.vercel.app/');
            cy.get('[href="/login"]').click();
    
        }) 
        
        it('Login -Email formato inválido', () => {
            cy.get('#email').type('john.com');
            cy.get('#pass').type('Bella123456');
            cy.get('button').click();
            cy.contains('Por favor, verifique o email digitado').should(('be.visible'));
          
        })

        it('Login - Senha Inválida', () => {
            cy.get('#email').type('john@email.com');
            cy.get('#pass').type('123456');
            cy.get('button').click();
            cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should(('be.visible'));
          
        })
    
    
    
        })


})
