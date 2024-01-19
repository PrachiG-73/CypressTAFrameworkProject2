/// </reference types = "cypress">
/// </reference types = "cypress-downloadfile">

it('uploadFile',function(){

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example')
})

it('downloadFile',function(){

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})