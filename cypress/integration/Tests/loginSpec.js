/// <reference types="Cypress" />

import HomePage from "../PageObject/HomePage";




describe("suite",()=>{
let localdata;
const homepage=new HomePage("Hello");

    before(function(){  
        cy.fixture("searchData").then(function(data){
        localdata=data;
        //return localdata;
               
        })
        })
 

it("Login",function(){
cy.visit("http://www.amazon.com");
//cy.visit("https://www.saucedemo.com");
//cy.get("#twotabsearchtextbox").type(localdata.product)
homepage.getSearchBox().type(localdata.product);
cy.get('#nav-search-submit-button').click();
//cy.get('#nav-search-submit-button')

})


})