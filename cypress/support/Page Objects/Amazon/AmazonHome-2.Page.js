class AmazonPageBis{

    constructor() {
        this.searchField = '#twotabsearchtextbox';
    }
   

    enterSearchCriteria(text){
        cy.get(this.searchField).clear().type(text).type('{enter}');
    }


}

export const amazonPageBis = new AmazonPageBis;