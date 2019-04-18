/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('OK, there are no TODOs', () => {
    cy.get('#todo-body')
      .children().should('have.length', 0);
    cy.get('#done-body')
      .children().should('have.length', 0);
  });

  it('OK, create a TODO', () => {
    cy.get('input')
      .type('mop the floor').should('have.value', 'mop the floor');
    cy.get('button[id="create-todo"]').click();
    cy.get('#todo-body')
      .children().should('have.length', 1);
    cy.get('#done-body')
      .children().should('have.length', 0);
  });

  it('OK, Mark a TODO as done', () => {
    cy.get('#todo-body>tr:first-child>td:last-child>button')
      .click();
    cy.get('#todo-body')
      .children().should('have.length', 0);
    cy.get('#done-body')
      .children().should('have.length', 1);
  });
})
