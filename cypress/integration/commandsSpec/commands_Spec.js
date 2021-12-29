describe("Commands Demo",()=>{

    beforeEach(()=>{
        
        cy.visit("https://www.saucedemo.com");
        cy.cmdlogin("standard_user","secret_sauce");


    })

    it("command demo",()=>{

        cy.log("Hi")
    })

})