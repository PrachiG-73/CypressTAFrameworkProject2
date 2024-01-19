export class LoginPage {

usernameTextbox = 'input[name = "username"]'
passwordTextbox = 'input[name = "password"]'
submitButton = 'button[type = "submit"]'

    getUsernameTextbox(username){
        cy.get(this.usernameTextbox).type(username)    
    }
    getPasswordTextbox(password){
        cy.get(this.passwordTextbox) .type(password)  
    }
    clickSubmitButton(){
        cy.get(this.submitButton).click()
    }

}