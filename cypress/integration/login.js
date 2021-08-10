beforeEach(() => {
    cy.visit("https://app.staging.audiencetown.com/login")
})
describe('Login page', () => {
    it('should check correct username and password', () => {
      cy.get('input[name=email]').type("deltec@dfgdfgdfg.gh")
      cy.get('input[name="password"]').type("Abc.1234")
      cy.get('button.MuiButtonBase-root').click()
      cy.url().should('include', 'dashboard')
    })
    it('should check incorrect username and correct password', () => {
        cy.get('input[name=email]').type("deltec@dfgdfgdf.gh")
        cy.get('input[name="password"]').type("Abc.1234")
        cy.get('button.MuiButtonBase-root').click()
        cy.url().should('include', 'login')
        cy.get(".MuiTypography-root.MuiTypography-body1").contains("Invalid credentials")
      })
    it('should check correct username and incorrect password', () => {
        cy.get('input[name=email]').type("deltec@dfgdfgdfg.gh")
        cy.get('input[name="password"]').type("Abc.34")
        cy.get('button.MuiButtonBase-root').click()
        cy.url().should('include', 'login')
        cy.get(".MuiTypography-root.MuiTypography-body1").contains("Invalid credentials")
        

      })
  })