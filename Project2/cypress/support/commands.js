// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//Login before running any of the other tests
beforeEach(function () {
    
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
	cy.log('Logged in successfully')
 
 })
 