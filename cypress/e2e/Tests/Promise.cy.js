import * as helper from './helpers.cy';


describe("Promesas En Cypress", () => {
    function hablar(){
        return new Cypress.Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("HOLA HOLA!");
            }, 3000);
        });
    }

  it('Prueba que usa Cypress.Promise con cy.wrap() y then()', () => {
    cy.wrap(hablar()).then(palabra => {
      const valor = palabra;
      cy.log(`El valor de la promesa es: ${valor}`);
      expect(valor).to.equal("HOLA HOLA!");
    });
  });









})






