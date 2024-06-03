/// <reference types="cypress"/>

describe('Ejercicio 1 de prueba API para Demoblaze ', () => {
  const fechaActual = Date.now()
  
  it('Crear un usuario', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup', // baseUrl is prepend to URL
      body: {
        username: 'jane.'+ fechaActual,
        password: 'password123',
      },
    }).then((response) => {
      expect(response.status).to.be.equal(200)
      cy.log(response.body)
    })
  })

  it('Intentar crear un usuario ya existente', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup', // baseUrl is prepend to URL
      body: {
        username: 'jane.',
        password: 'password123',
      },
    }).then((response) => {
      expect(response.status).to.be.equal(200)
      expect(response.body.errorMessage).to.be.equal('This user already exist.')
    })
  })

  it('Usuario y password correcto en login', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login', // baseUrl is prepend to URL
      body: {
        username: 'jane.',
        password: 'password123',
      },
      }).then((response) => {
        expect(response.status).to.be.equal(200)
        expect(response.body).exist
      })
  })

  it('Usuario y password incorrecto en login', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login', // baseUrl is prepend to URL
      body: {
        username: 'jane.',
        password: 'password12',
      },
      }).then((response) => {
        expect(response.status).to.be.equal(200)
        expect(response.body.errorMessage).to.be.equal('Wrong password.')
      })
  })
})