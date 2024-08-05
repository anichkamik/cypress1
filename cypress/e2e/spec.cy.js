describe('registration user', () => {
  it('passes', () => {
    cy.visit('http://automationexercise.com')
    cy.get('a > img').should("be.visible")
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').should("be.visible")
    cy.get('[data-qa="signup-name"]').type("user")
    cy.get('[data-qa="signup-email"]').type("ejhfnmtail@email.ma")
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(1) > b').should("be.visible")
    cy.get('#id_gender2').click()
    cy.get('[data-qa="name"]').type("user")
    cy.get('[data-qa="password"]').type("ppassword")
    cy.get('[data-qa="days"]').select("6")
    cy.get('[data-qa="months"]').select("November")
    cy.get('[data-qa="years"]').select("2000")
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('[data-qa="first_name"]').type("ana")
    cy.get('[data-qa="last_name"]').type("mikadze")
    cy.get('[data-qa="company"]').type("sept")
    cy.get('[data-qa="address"]').type("Tbilisi,Javakhishvili 73")
    cy.get('[data-qa="address2"]').type("avakhishvili 73")
    cy.get('[data-qa="country"]').select("Singapore")
    cy.get('[data-qa="state"]').type("Tbilisi")
    cy.get('[data-qa="city"]').type("tbilisi")
    cy.get('[data-qa="zipcode"]').type("03001")
    cy.get('[data-qa="mobile_number"]').type("12345678")
    cy.get('[data-qa="create-account"]').click()
    cy.get('b').should("be.visible")
    cy.get('[data-qa="continue-button"]').click()
    cy.get(':nth-child(10) > a').should("have.text"," Logged in as useruser")
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    
  })
})









