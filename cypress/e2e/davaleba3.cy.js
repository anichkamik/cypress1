describe('registration user', () => {
  beforeEach(() => {
    cy.visit("/login")
    cy.fixture("login").as("userData")
  }
  )
  it('registration', function () {
    //registration as a new user
    cy.registration(this.userData.validuser.email, this.userData.validuser.password, this.userData.validuser.userName)
  })
  it("login Valid", function () {
    //Login User with correct email and password
    cy.login(this.userData.validuser.email, this.userData.validuser.password)
    cy.get(':nth-child(10) > a').should("be.visible")
    //delete user
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('b').should("be.visible")
  })
  it("login Incorrect", function () {
    //Login User with incorrect email and password
    cy.login(this.userData.noreguser.email, this.userData.noreguser.password)
    cy.get('.login-form > form > p').should("be.visible")
  })
})










