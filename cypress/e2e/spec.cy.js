describe('edit personal detales', () => {
it('edit', () => {
cy.login()
//verify that it's my own account page
cy.get('.subtext').should("be.visible")
//edit account details
cy.get('.side_account_list > :nth-child(3) > a').click()
cy.get('#AccountFrm_firstname').clear()
cy.get('#AccountFrm_firstname').type("anna")
cy.get('#AccountFrm_lastname').clear()
cy.get('#AccountFrm_lastname').type("Samnidze")
cy.get('#AccountFrm_email').clear()
cy.get('#AccountFrm_email').type("anobano007@gmail.com")
cy.get('#AccountFrm_telephone').clear()
cy.get('#AccountFrm_telephone').type("12345678")
cy.get('#AccountFrm_fax').clear()
cy.get('#AccountFrm_fax').type("12345")
cy.get('.col-md-12 > .btn-orange').click()
//verify changed details
cy.get('.alert').should("have.text","\n×\nSuccess: Your account has been successfully updated.")
cy.get('.side_account_list > :nth-child(3) > a').click()
cy.get('#AccountFrm_firstname').should("have.value","anna")
cy.get('#AccountFrm_lastname').should("have.value","Samnidze")
cy.get('#AccountFrm_email').should("have.value","anobano007@gmail.com")
cy.get('#AccountFrm_telephone').should("have.value","12345678")
cy.get('#AccountFrm_fax').should("have.value","12345")
//change adress
cy.get('.side_account_list > :nth-child(5) > a').click()
cy.get('tr > .pull-right > .btn').click()
cy.get('#AddressFrm_address_1').clear()
cy.get('#AddressFrm_address_1').type("batumi")
cy.get('#AddressFrm_address_2').clear()
cy.get('#AddressFrm_address_2').type("agmasheneblis qucha")
cy.get('#AddressFrm_country_id').select("Georgia")
cy.get('#AddressFrm_zone_id').select("Ajaria")
cy.get('#AddressFrm_city').clear()
cy.get('#AddressFrm_city').type("batumi")
cy.get('#AddressFrm_postcode').clear()
cy.get('#AddressFrm_postcode').type("7654321")
cy.get('.col-md-12 > .btn-orange').click()
cy.get('.alert').should("have.text","\n×\nYour address has been successfully updated")
//change password
cy.get('.side_account_list > :nth-child(4) > a').click()
cy.get('#PasswordFrm_current_password').type("12345678")
cy.get('#PasswordFrm_password').type("1234567890")
cy.get('#PasswordFrm_confirm').type("1234567890")
cy.get('.col-md-12 > .btn-orange').click()




 })
})



