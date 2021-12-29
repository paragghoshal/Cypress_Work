import HomeSaucePage from "../PageObject/sauceLabDemoHopePage";
import ProductPage from "../PageObject/sauceLabProductPage";

describe("sauceLab Home",()=>{

    // before(()=>{
    //     cy.visit("https://www.saucedemo.com/");

    // });

    it("Login Page",()=>{
        cy.visit("https://www.saucedemo.com");
        HomeSaucePage.enterUserName("standard_user");
        HomeSaucePage.enterPasswprd("secret_sauce");
        HomeSaucePage.clickLoginButton();
        ProductPage.elements.getProductLogo().should("have.text","Products");



    })



})
