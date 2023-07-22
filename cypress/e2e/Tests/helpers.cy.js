export let elementExist = (css) => {
  cy.get('body').then(($body) =>{
    if ($body.find(css).length) {
      cy.log("Existe el elemento: "+css);
      return true;
    }
    else {  
      cy.log("NO Existe el elemento: "+css);
      return false;
    }
  })
}

