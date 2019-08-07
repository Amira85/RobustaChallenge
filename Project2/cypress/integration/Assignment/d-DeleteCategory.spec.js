describe('CypressChallenge', function() {

 it('Delete Category', function() {

    cy.viewport(1366, 584)
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
	
   //Clicks in the first row in the table
   // cy.get('.row > .col-sm-12 > #datatable-ajax > tbody > .odd:nth-child(1)').click()
  
  //Clicks in the first row, third column in the table
  // cy.get('.col-sm-12 > #datatable-ajax > tbody > .odd:nth-child(1) > td:nth-child(3)').click()
	
  //Same thing but for even rows, third column in the table
  // cy.get('.col-sm-12 > #datatable-ajax > tbody > .even:nth-child(2) > td:nth-child(3)').click()
  
  //Clicks in the first row, third column in the table
  // cy.get('.col-sm-12 > #datatable-ajax > tbody > .odd:nth-child(7) > td:nth-child(3)').click()
   cy.get('tbody > .odd:nth-child(7) > td > form > .btn').click()
 
  //Fails to view the button
  // cy.get('.odd:nth-child(1) > td > form > .btn > .la').click()
    
   cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
 })

})
