//HOOKS
before(function(){
cy.log("Before");
})

beforeEach(function(){
cy.log("Before Each");
})

afterEach(function(){
cy.log("After Each");
})

after(function(){
cy.log("After");
})
        
//TESTS

let add = (a,b) => a+b;
let substract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;

describe('MyTestSuite1', function(){

    it('Verify 1',function(){
        expect(add(1,2)).to.equal(3);
    })

    it('Verify 2',function(){
        expect(substract(1,2)).to.equal(-1);
    })
})