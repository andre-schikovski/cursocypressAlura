/*

Aula 2 - Curso Cypress Alura
Exercícios de fixação de conteúdo
Data: 21/01/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


// Exercício 1 - Refatore os testes já realizados aplicando o método beforeEach()
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
   
});

// Exercício 2 - Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.

describe('Acesso a página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app/');
        //cy.get('[href="/login"]').click();

    }) 
    
    it('Validar texto do título', () => {
        cy.title().should('eq', 'AdoPet');
        
    })
});


// Exercício 3 - Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.
describe('Teste quem ama adota', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
   
    it('Verifica mensagem de texto', () =>{
        cy.contains('p', 'Quem ama adota!').should('be.visible')
    })

    it('Verifica mensagem de texto', () =>{
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    })
 
  });


//4 - Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida.
// Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.
describe('Teste quem ama adota', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
   
    it('Verifica mensagem de texto', () =>{
        cy.contains('p', 'Quem ama adota!').should('be.visible')
    })

    it('Verifica mensagem de texto', () =>{
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    })
 
  });



// 5 - Teste o login com um fluxo diferente: Visite a página principal do Adopet,
//clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.  
describe('Fluxo de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
   
    it('Verifica mensagem de texto', () =>{
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
      cy.get('[data-test="submit-button"]').click();  

    })
       
 });


   


