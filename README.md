test cases for www.saucedemo.com to verify successful login, unsuccessful login, check out process, adding a item to the cart, and ensuring that the home page loads correctly.
 
1.Test to verify successful login 
describe('login test', () => {
  it('should login successfully', () => {
     cy.visit('https://www.saucedemo.com/',);
     cy.get('[data-test="username"]').type('standard_user');
     cy.get('[data-test="password"]').type('secret_sauce');
     cy.get('[data-test="login-button"]').click()

  })
})

2.Test to verify error message for unsuccessful login
describe('Login Test ', () => {
  it('should display error message', () => {
cy.visit('https://www.saucedemo.com');
cy.get('[data-test="username"]').type('standard_user');
cy.get('[data-test="password"]').type('password123');
cy.get('[data-test="login-button"]').click();
cy.get('[data-test="error"]')
  
  })
})

3.Test to ensure successful checkout process

describe('Shopping cart', () => {
  it('should add a product to the shopping cart', () => {
     cy.visit('https://www.saucedemo.com/',);
     cy.get('[data-test="username"]').type('standard_user')
     cy.get('[data-test="password"]').type('secret_sauce')
     cy.get('[data-test="login-button"]').click()
     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
     cy.get('.shopping_cart_link').click()
     cy.get('[data-test="checkout"]').click()
     cy.get('[data-test="firstName"]').type('Jasmine')
     cy.get('[data-test="lastName"]').type('Jack')
     cy.get('[data-test="postalCode"]').type('60008')
     cy.get('[data-test="continue"]').click ()
     cy.get('[data-test="finish"]').click()

  })
}) 

4. Test to ensure item can be added to the cart


describe('Shopping cart', () => {
  it('should add a product to the shopping cart', () => {
     cy.visit('https://www.saucedemo.com/',);
     cy.get('[data-test="username"]').type('standard_user')
     cy.get('[data-test="password"]').type('secret_sauce')
     cy.get('[data-test="login-button"]').click()
     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
     cy.get('.shopping_cart_link').click()
     
  })
})


5. Test to ensure once succesfully logged in the page will be directed to the homepage

describe('login test', () => {
  it('should login successfully', () => {
     cy.visit('https://www.saucedemo.com/',);
     cy.get('[data-test="username"]').type('standard_user');
     cy.get('[data-test="password"]').type('secret_sauce');
     cy.get('[data-test="login-button"]').click()
     cy.get('.app_logo')

  })
})

