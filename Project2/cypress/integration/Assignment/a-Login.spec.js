describe('CypressChallenge', function() {

 it('Login Reading from External Files', function() {

    // Clear Cookies manually before each login to overcome cypress Cookies issue
	cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/auth/login')
	cy.clearCookies()
    cy.log('Cache cleared')	
	
    cy.viewport(1366, 584)
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/auth/login')

	//Read the Credentials from External File  under cypress\fixtures\Login.json
    cy.fixture('Login.json').then(function(json){
 
      cy.get('.m-login__container > .m-login__signin > .m-login__form > .form-group:nth-child(2) > .form-control').click()
 
      cy.get('.m-login__container > .m-login__signin > .m-login__form > .form-group:nth-child(2) > .form-control').type(json.Email)
 
      cy.get('.m-login__container > .m-login__signin > .m-login__form > .form-group > .m-login__form-input--last').click()
 
      cy.get('.m-login__container > .m-login__signin > .m-login__form > .form-group > .m-login__form-input--last').type(json.Password)
    })
 
     
    cy.get('.m-login__container > .m-login__signin > .m-login__form > .m-login__form-action > .btn').click()
 
    //cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/articles')
	//cy.log('Logged in successfully')
 
 })

})
