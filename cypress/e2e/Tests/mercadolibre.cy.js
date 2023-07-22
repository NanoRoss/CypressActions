import * as helper from './helpers.cy';


describe("Feature Goal: Validate Mercadolibre AR Site", () => {

    beforeEach( () => {
        cy.visit("https://www.mercadolibre.com.ar/");
    })
 
    it('Search for a item in Meli', () => {    
            cy.get('#cb1-edit');
            cy.wait(2000);
            
            if ((helper.elementExist("#cb1-edit"))==true){
              cy.log("WIIIIIN");
            }
            else {
              cy.log("FAIL");
            }
   
        })   

})

