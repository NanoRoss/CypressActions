class AmazonPage{

        //Priedades & Elementos
    get = {
        searchField: () => cy.get("#twotabsearchtextbox"),
    }

    //Funciones
    enterSearchCriteria(text){
        this.get.searchField().clear().type(text).type('{enter}');
    }


}

export const amazonPage = new AmazonPage;