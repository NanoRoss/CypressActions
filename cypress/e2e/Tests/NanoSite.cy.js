/// <reference types="cypress"/>


describe("Feature Goal: Validate Nano Site", () => {

    it("Test 1 Description", () => {
        cy.visit("https://nanoross.github.io/")
        cy.url().should("include","nano")  
        cy.wait(9999) 
        cy.url().then(url => {
            expect(url).to.include('nano')
        })
    })

    it('Validate website URL and image', () => {
        cy.visit('https://nanoross.github.io/');
        cy.url().should('include', 'nanoross.github.io');
        cy.get('img').should('exist');
    })

    it('Validate website is not down', () => {
        cy.request('https://nanoross.github.io/').its('status').should('eq', 200);
    })


    it("test falopa", () => {
        cy.visit("https://www.mercadolibre.com.ar");
        cy.get('#cb1-edit').type("iphones").type('{enter}')
        cy.get(':nth-child(1) > .ui-search-result__wrapper > .andes-card').click({force: true})
        cy.wait(5000)
        cy.get(':nth-child(1) > #buybox-form > .ui-pdp-actions > .ui-pdp-actions__container > .andes-button--loud > .andes-button__content').click
    })

    it.only('Visits Mercadolibre and search for a item', () => {    
        cy.visit('https://www.mercadolibre.com.ar/')
        cy.get('#cb1-edit').type('iphone')
        cy.get('button[class="nav-search-btn"]').click()
        cy.wait(3000)

            if (cy.get('[data-testid="action:understood-button"]').should('exist')) {
                cy.get('[data-testid="action:understood-button"]').click({force: true})
            }

        cy.get(':nth-child(1) > .ui-search-result__wrapper > .andes-card').click({force: true})
      })
        


})

