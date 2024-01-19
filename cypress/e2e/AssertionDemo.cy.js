it('Assertion Demo',() => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    //Implicit Assertions 
    cy.get('#query-btn').should('have.class','query-btn')
    .should('contain','Button')
    .should('be.visible')
    .and('be.enabled')
    .invoke('attr','id').should('equal','query-btn')
    //Explicit Assertions
    expect(true,'Condition is true').to.be.true
    assert.equal(14,14,'NOT EQUAL')
    assert.strictEqual('ABC','ABC','Not Equal Strings')
    assert.strictEqual('ABC','abc','Not Equal Strings')    
})