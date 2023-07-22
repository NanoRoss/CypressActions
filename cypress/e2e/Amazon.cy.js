/// <reference types="cypress" />

import { paths } from '../support/paths';
import { amazonPage } from '../support/Page Objects/Amazon/AmazonHome-1.Page';
import { amazonPageBis } from '../support/Page Objects/Amazon/AmazonHome-2.Page';

 
    describe('TestSuite_Amazon', function(){

        it('Verify Amazon Url POM 1',function(){
            cy.visit(paths.url.baseUrlAmazon)
            cy.wait(1000);
            amazonPage.enterSearchCriteria("Iphone");
            cy.url().should('include', 'phone');
        })  

        it('Verify Amazon Url POM 2',function(){
            cy.visit(paths.url.baseUrlAmazon)
            cy.wait(1000);
            amazonPageBis.enterSearchCriteria("Iphone");
            cy.url().should('include', 'cofee');
        })  

})  