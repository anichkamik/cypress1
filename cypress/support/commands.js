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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('registration', () => {
    cy.visit("https://automationteststore.com/")
    let random=(Math.random())
    cy.log(random)
    //verify that home page is visible
    cy.get('.nav-pills > :nth-child(1) > .active')
    //registration
    //Click on 'Signup / Login' button
    cy.get('#customer_menu_top > li > a').click()
    //verify that new user registration is visible
    cy.get('.newcustomer > .heading2').should("have.text","I am a new customer.")
    //click continue button
    cy.get('#accountFrm > fieldset > .btn').click()
    //verify that create account is visible
    cy.get('.maintext').should("have.text"," Create Account")
    //enter personal detales: first name,last name,e-mail,telephone,fax
    const email = "anisamnidze@gmail.com" + random
    cy.get('#AccountFrm_firstname').type("anichka")
    cy.get('#AccountFrm_lastname').type("mikadze")
    cy.get('#AccountFrm_email').type("anisamnidze" + random + "@gmail.com")
    cy.get('#AccountFrm_telephone').type("603259661")
    cy.get('#AccountFrm_fax').type("123456")
    //enter adress: company,adress1,adress2,city,region/state,zip code,country
    cy.get('#AccountFrm_company').type("Sept")
    cy.get('#AccountFrm_address_1').type("alicante,alicante")
    cy.get('#AccountFrm_address_2').type("alicante,alicante,123")
    cy.get('#AccountFrm_city').type("Alicante")
    cy.get('#AccountFrm_country_id').select("Spain")
    cy.get('#AccountFrm_zone_id').select("Alicante")
    cy.get('#AccountFrm_postcode').type("03001")
    //enter login detales
    const loginname = "anichkamik" + random
    cy.get('#AccountFrm_loginname').type(loginname)
    cy.get('#AccountFrm_password').type("ani12345")
    cy.get('#AccountFrm_confirm').type("ani12345")
    //finalize registration
    cy.get('#AccountFrm_agree').click()
    cy.get('.col-md-2 > .btn').click()
    //verify that account has been created
    cy.get('.maintext').should("have.text"," Your Account Has Been Created!")
    cy.get('.mb40 > .btn').click()
    

})


Cypress.Commands.add('login', () => {
    cy.visit("https://automationteststore.com/")
    cy.get('#customer_menu_top > li > a').click()
    cy.get('.returncustomer > .heading2').should("have.text", "Returning Customer")
    cy.get('#loginFrm_loginname').type("anichka")
    cy.get('#loginFrm_password').type("12345678")
    cy.get('#loginFrm > fieldset > .btn').click()
      })



