describe('CypressChallenge', function() {

function FileListItem(a) {
  a = [].slice.call(Array.isArray(a) ? a : arguments)
  for (var c, b = c = a.length, d = !0; b-- && d;) d = a[b] instanceof File
  if (!d) throw new TypeError("expected argument to FileList is File or array of File objects")
  for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(a[c])
  return b.files
}

 it('Add Category and Upload Images', function() {

    cy.viewport(1366, 584)
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/articles')
 
    cy.get('.m-menu__item:nth-child(1) > .m-menu__submenu > .m-menu__subnav > .m-menu__item:nth-child(3) > .m-menu__link > .m-menu__link-text').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
    cy.get('.row > .col-xl-4 > .btn > span > span').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories/create')
 
  
    cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').click()
 
    //Read the Add data from External file cypress\fixtures\AddCategory.json
	cy.fixture('AddCategory.json').then(function(json){
	  
	  cy.get('.m-portlet__body > .form-body > .form-group:nth-child(1) > .col-md-6 > #name').type(json.EnglishName)
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').click()
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(2) > .col-md-6 > #name').type(json.SpanishName)
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').click()
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(3) > .col-md-6 > #name').type(json.DeutchName)
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').click()
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(4) > .col-md-6 > #name').type(json.FrenchName)
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').click()
 
      cy.get('.m-portlet__body > .form-body > .form-group:nth-child(5) > .col-md-6 > #name').type(json.ItalianName)
	   
   })
  
    //Upload Images from External file  
    cy.fixture('/Colored.svg').as('attachment').get('#category-image-file').then(function(el) {
		return Cypress.Blob.base64StringToBlob(window.btoa(this.attachment), 'image/png')
		  .then(blob => {
			  
				el[0].files = new FileListItem(new File([blob], 'Colored.svg')) 
				
				
				el[0].dispatchEvent(new Event('change', {bubbles: true}))
			  
		  })
	  })
	  
	cy.fixture('/BlackWhite.jpg').as('attachment').get('#category-color-image-file').then(function(el) {
		return Cypress.Blob.base64StringToBlob(this.attachment, 'image/jpeg')
		  .then(blob => {
			  
				el[0].files = new FileListItem(new File([blob], 'BlackWhite.jpg')) 
				
				
				el[0].dispatchEvent(new Event('change', {bubbles: true}))
			  
		  })
	  })
  
    cy.get('.m-form > .m-portlet__body > .m-portlet__foot > .m-form__actions > .btn-accent').click()
 
    cy.visit('http://shoppinglist.dev.app.hd.digital/dashboard/categories')
 
 })

})
