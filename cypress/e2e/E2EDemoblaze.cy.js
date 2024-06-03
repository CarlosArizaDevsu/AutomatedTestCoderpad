/// <reference types="cypress"/>

describe('Flujo de compra en www.demoblaze.com', () => {
  beforeEach('Borrar cookies y localstorage', ()=>{
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
  })

  it('Visitar la web y agregar 2 productos al carrito', () => {
    cy.visit('https://www.demoblaze.com/')
    // Selecciono el primer producto
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#nava').click()

    // Selecciono el segundo producto
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()

    // Visito el carrito
    cy.get('#cartur').click()

    // Completo el formulario de compra
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('Carlos Test')
    cy.get('#country').type('Colombia')
    cy.get('#city').type('Medellin')
    cy.get('#card').type('123456789')
    cy.get('#month').type('06')
    cy.get('#year').type('2024')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
})