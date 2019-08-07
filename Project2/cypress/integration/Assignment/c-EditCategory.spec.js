describe('CypressChallenge', function() {

 it('Edit Category', function() {

    cy.viewport(1366, 584)
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
    //Fails to view the Link Button
    //cy.get('tbody > .odd:nth-child(1) > td > .m-portlet__nav-link > .la').click()
    //cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories/3/edit')
	
	//Sort Descending to Edit the last added Category
	cy.get('.col-sm-12 > #datatable-ajax > thead > tr > .sorting_asc').click()
	//wait for sorting to apply before clicking
	cy.wait(500)
	
	//Clicks Edit in the first row
    cy.get('#datatable-ajax > tbody > .odd:nth-child(1) > td > .m-portlet__nav-link').click()
	
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').click()
    
	//Read the Edit Data from External file cypress\fixtures\EditCategory.json
    cy.fixture('EditCategory.json').then(function(json){
	
      //Clear the textbox before entering new text
	  cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').invoke('val', '')
	  cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').type(json.EnglishName)
 

      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').click()
	  cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').invoke('val', '')
	  cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').type(json.SpanishName)
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').click()
 	  cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').invoke('val', '')
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').type(json.DeutchName)
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').click()
 	  cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').invoke('val', '')
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').type(json.FrenchName)
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').click()
 	  cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').invoke('val', '')
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').type(json.ItalianName)	
	})
    
    cy.get('.m-form > .m-portlet__body > .m-portlet__foot > .m-form__actions > .btn-accent').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
 })

})
