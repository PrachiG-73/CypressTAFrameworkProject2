import { LoginPage } from "./Pages/LoginPage"
// Also we can move this to e2e.js
beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/auth/login')
})

describe('Login Tests Group',()=>{

it('Login test with valid credentials',()=>{

    const loginPage = new LoginPage()
    loginPage.getUsernameTextbox('Admin')
    loginPage.getPasswordTextbox('admin123')
    loginPage.clickSubmitButton()
    cy.contains('Leave Request').click()
})

it('Login test with invalid username',()=>{

    const loginPage = new LoginPage()
    loginPage.getUsernameTextbox('Admin123')
    loginPage.getPasswordTextbox('admin123')
    loginPage.clickSubmitButton()
    cy.contains('Leave Request').click()
})
        
})

it('Login test with invalid password',()=>{

    const loginPage = new LoginPage()
    loginPage.getUsernameTextbox('Admin')
    loginPage.getPasswordTextbox('admin456')
    loginPage.clickSubmitButton()
    cy.contains('Leave Request').click()
})