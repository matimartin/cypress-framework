class homeSaucePage {
  elements = {
    usernameInput: () => cy.get("#spree_user_email"),
    passwordInput: () => cy.get("#spree_user_password"),
    loginBtn: () => cy.get(".login__form-login"),
    errorMessage: () => cy.get(".field-error-message"),
    //Mapeo de campo custom
    //errorMessage: () => cy.get('h3[data-test="error"]'),
  };

  typeUsername(username) {
    
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

module.exports = new homeSaucePage();
