describe('Login Test ', () => {
  it('should display error message', () => {
cy.visit('https://www.saucedemo.com');
cy.get('[data-test="username"]').type('standard_user');
cy.get('[data-test="password"]').type('password123');
cy.get('[data-test="login-button"]').click();
cy.get('[data-test="error"]')


    
  })
})