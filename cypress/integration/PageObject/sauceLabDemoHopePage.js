class sauceHomePage
{
    elements={

        userNameTextBox : ()=> cy.get("#user-name"),
        passTextBox : ()=> cy.get("#password"),
        loginButton : ()=> cy.get('[data-test="login-button"]')
    }

    enterUserName(username)
    {
        this.elements.userNameTextBox().type(username);

    }
    enterPasswprd(pass)
    {
        this.elements.passTextBox().type(pass);
    }

    clickLoginButton()
    {
        this.elements.loginButton().click();

    }

};

module.exports= new sauceHomePage();
