describe("variable",()=>{

before(()=>{
    cy.visit("https://www.amazon.com")

})

it("validate",function(){
    cy.get('#nav-logo-sprites').then(function($data){

        const textValue= $data.text()
        cy.log("direct value :"+textValue)
        cy.wrap(textValue).as("wrapeText")
    })

})

it("morevalidate", function(){

    cy.log("this :" + this.wrapeText)
})

})



