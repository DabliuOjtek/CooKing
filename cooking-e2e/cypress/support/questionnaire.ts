Cypress.Commands.add('checkAmountOfCards', (value) => {
  cy.get('[data-cy=slides]')
    .children()
    .should('be.visible')
    .should('have.length', value);
});

Cypress.Commands.add('checkAmountOfNavButtons', (value) => {
  cy.get('[data-cy=questionnaire-nav-buttons]')
    .should('be.visible')
    .children()
    .should('have.length', value);
});

Cypress.Commands.add('nextQuestion', () => {
  cy.get('[data-cy=next-button]').should('be.visible').click();
});
