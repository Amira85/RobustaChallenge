describe('CypressChallenge', function() {

 it('Delete Category', function() {

    cy.viewport(1366, 584)
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
	
   //Fails to view the button
   // cy.get('.odd:nth-child(1) > td > form > .btn > .la').click()
	
   //Sort Descending to Delete the last added Category
	cy.get('.col-sm-12 > #datatable-ajax > thead > tr > .sorting_asc').click()
   //wait for sorting to apply before deleting
	cy.wait(500)
	
   //Clicks Delete in the first row
    cy.get('tbody > .odd:nth-child(1) > td > form > .btn').click()
       
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
 })

})
