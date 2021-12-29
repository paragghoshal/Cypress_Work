class HomePage
{

HomePage(thename)
{
  this.name=thename;  
}

 getSearchBox()
{
    cy.log(this.name)
    return cy.get("#twotabsearchtextbox")//.type(this.name);
}

};
export default HomePage;


