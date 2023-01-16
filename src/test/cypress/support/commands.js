/*Cypress.Commands.add('login',({username,password})=>{
    cy.request('POST','http://localhost:1367/login',{
        username,
        password
    }).then(response =>{
        localStorage.setItem('loggedAppUser',JSON.stringify(response.body))
        cy.visit('http://localhost/1367')
    })
})*/
Cypress.Commands.add('login',({username,password})=>{
    cy.viewport(1280, 720)
    cy.visit('http://localhost:1367')
    cy.get('input[id="username"]').type(username)
    cy.get('input[id="password"]').type(password)
    cy.get('[test-id="Login"]').click()
})