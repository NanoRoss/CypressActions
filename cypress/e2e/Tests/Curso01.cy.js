describe('Suite Meli', () => {
    it('Meli Test 01', () => {
        cy.visit("https://www.mercadolibre.com.ar/");
        cy.get("input[class='nav-search-input']").type("Cafetera").type("{enter}");
        cy.url().should("eq","https://listado.mercadolibre.com.ar/cafetera#D[A:Cafetera]");
        cy.get('img').should('be.visible');
        cy.get('img').eq(1).should('be.visible'); //posicion especifica 
        // cy.get('#booking_search > form').invoke('removeAttr', 'target') // Borro el atributo para que no nevegue a otra pestaña. 
        // cy.get("#twotabsearchtextbox").should('have.attr', 'value', 'iphone 14')
        // cy.get("#twotabsearchtextbox").invoke("prop","value").should("contain", "iphone");   Cn incoke puedo remover un atributo para que no haga una nevegacion o mostrar algo que este hidden.
        // cy.get('#dropdown').select("TEXT");
        cy.log(cy.get('img'))
    });
});