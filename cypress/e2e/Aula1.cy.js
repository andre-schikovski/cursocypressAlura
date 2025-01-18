/*

Aula 1 - Curso Cypress Alura
Data: 18/01/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


// Teste 1 - Carregando a página principal adopet
describe('Acesso á pagina inicial Adopet', () => {
    it('steps do teste', () => {
      cy.visit('https://adopet-tau.vercel.app/')
    })
  })

// Teste 2 - Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”.
describe('Visualizar pets disponíveis para adoção', () => {
    it('steps do teste', () => {
      cy.visit('https://adopet-tau.vercel.app/');
      cy.contains('a', 'Ver pets disponíveis para adoção').click();
    })
  })

  
// Teste 3 - Visite a página de principal do AdoPet e teste os botões header.
describe('Testar Header da página principal', () => {
    it('Teste Home', () => {
      cy.visit('https://adopet-tau.vercel.app/');
      cy.get('.header__home').click();
    })

    it('Teste Mensagem', () => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('.header__message').click();
      })
  })
  

// Teste 4 - Visite a página de /login do Adopet.
describe('Acessar a área de login /Adota Pet', () => {
    it('steps do teste', () => {
      cy.visit('https://adopet-tau.vercel.app/');
      cy.contains('a', 'Fazer login').click();
    })
  })


// Teste 5 - Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
describe('Acessar a área Falar com responsável', () => {
    it('steps do teste', () => {
      cy.visit('https://adopet-tau.vercel.app/');
      cy.visit('https://adopet-tau.vercel.app/home');
      cy.get(':nth-child(1) > .card__contact');
    })
  })
  