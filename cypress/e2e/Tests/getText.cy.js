beforeEach(function(){
    cy.visit("https://www.amazon.com");
    cy.wait(2000);  
    })


describe('TestSuite_GetText', function(){
    it('Print Text 1...',function(){
        cy.get('span[class="hm-icon-label"]').then(($text)=>{
            var txt = $text.text()
            cy.log("El Texto Obtenido 2: "+txt)
        })
    })



    it.only('Print Text 2...',function(){

        cy.get('span[class="hm-icon-label"]').should((a) => {
            const text = a.text()
          
            expect(text).to.include('All')



    })
})





























})