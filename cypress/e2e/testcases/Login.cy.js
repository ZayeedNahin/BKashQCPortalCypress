describe('Positive Test', () => {

    it('Verify if user can view the logo on Login page', () => {
      cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
      cy.get("img[alt='Logo']").should('be.visible') 
    })
})  

describe('Positive Test', () => {

    it('Verify if user can view the welcome text', () => {
      cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
      cy.get(".text-white.fs-2hx.fw-bold.text-center.mb-7").should('have.text', 'Welcome to QC portal for merchant onboarding') 
    })
})  

describe('Positive Test', () => {

    it('Verify if email and password required warning message is shown without typing', () => {
      cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
      
      cy.get("#kt_sign_in_submit").click()
      cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)").should('exist') 
      cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1)").should('exist') 
    })
})  

describe('Positive Test', () => {

  it('Verify if email and password required warning exclamation sign is shown without typing', () => {
    cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
    cy.get("#kt_sign_in_submit").click()
    cy.get("input[placeholder='Email']").should('be.visible') 
    cy.get("input[name='password']").should('be.visible') 
  })
})  

describe('Positive Test', () => {

  it('Verify if password hidden symbol is visible', () => {
    cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
    cy.get("#kt_sign_in_submit").click()
    cy.get("button[class='btn btn-light']").should('be.visible') 
    
  })
})  

describe('Positive Test', () => {

  it('Enter correct email and invalid password to verify if warning is visible to user', () => {
    cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
    cy.get("input[placeholder='Email']").type('pool1_5@bkash.com')
    cy.get("input[name='password']").type('asd54asd@3f')
    cy.get("#kt_sign_in_submit").click({force:true})
    cy.get(".mb-lg-15.alert.alert-danger").should('be.visible') 
    
  })
})  

describe('Positive Test', () => {

  it('Enter correct password and invalid email to verify if warning is visible to user', () => {
    cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
    cy.get("input[placeholder='Email']").type('pool@gmai.com')
    cy.get("input[name='password']").type('W37ifROV76')
    cy.get("#kt_sign_in_submit").click({force:true})
    cy.get(".mb-lg-15.alert.alert-danger").should('be.visible') 
    
  })
})  

describe('Positive Test', () => {

  it('Verify if email paceholder is visible', () => {
    cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
    cy.get("input[placeholder='Email']").should('be.visible') 
    
  })
})  


describe('Positive Test', () => {

  it('Verify if inserting digits in email address field warns user for correct format of address', () => {
    cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
    cy.get("input[placeholder='Email']").type('546546231')
    cy.get("#kt_sign_in_submit").click({force:true})
    cy.get(".fv-help-block").should('be.visible') 
    
  })
})  

describe('Positive Test', () => {

  it('Enter correct password and invalid email to verify if warning is visible to user', () => {
    cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
    cy.get("input[placeholder='Email']").type('pool1_5@bkash.com')
    cy.get("input[name='password']").type('W37ifROV76')
    cy.get("#kt_sign_in_submit").click({force:true})
    cy.get("#root").should('be.visible') 
    
  })
})  


describe('Negative Test', () => {

  it('Verify if password paceholder is visible', () => {
    cy.visit('https://bkmo-qc.dev-sheba.xyz/auth')
    cy.get("input[placeholder='Password']").should('be.visible')  
    
  })
})  

