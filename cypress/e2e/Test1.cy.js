///<reference types = "cypress"/>

it('Google Search',()=>{
    cy.visit('https://www.google.com') 
    cy.get('#APjFqb').type('Cypress.io{Enter}')
    // cy.get('.MUFPAc > :nth-child(2) > a', {timeout:5000}).click();
    cy.wait(2000)
    // cy.get('.MUFPAc > :nth-child(2) > a').click(); //Set global time out at config.js
    const timeout =  Cypress.config().e2e.defaultCommandTimeout;
    cy.log(`timeout:${timeout}`);
  
});
