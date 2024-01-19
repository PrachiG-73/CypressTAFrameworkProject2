before(function(){
    cy.fixture('example').as('test_Data')
})

it('Read File Fixture demo',function(){

   cy.fixture('example').then((data)=>{

        cy.log(data.name);
        cy.log(data.email)

    })

    cy.log(this.test_Data.name)
    cy.fixture('example').its('name').should('eq','Using fixtures to represent data')
})

it('Read file using readFile()',function(){

    cy.readFile('./cypress/fixtures/example.json').then(function(data){
        cy.log(data.name)
        cy.fixture('example').its('name').should('eq','Using fixtures to represent data')
    })
})

it('Write file using writeFile()',function(){

    cy.writeFile('./cypress/fixtures/writeFileSample.txt','Hello World\n')   
    cy.writeFile('./cypress/fixtures/writeFileSample.txt','This is Cypress World', {flag:'a+'})
})


