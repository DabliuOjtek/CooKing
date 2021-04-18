Cypress.Commands.add('checkAmountOfCards', (questionIndex, amountOfCards) => {
  cy.get('[data-cy=chip-list-' + questionIndex + ']')
    .children()
    .should('be.visible')
    .children()
    .should('have.length', amountOfCards);
});

Cypress.Commands.add('checkAmountOfNavButtons', (amountOfNavButtons) => {
  cy.get('[data-cy=questionnaire-nav-buttons]')
    .should('be.visible')
    .children()
    .should('have.length', amountOfNavButtons);
});

Cypress.Commands.add('nextQuestion', () => {
  cy.get('[data-cy=next-button]')
    .should('be.visible')
    .contains('next', { matchCase: false })
    .click();
});

Cypress.Commands.add('previousQuestion', () => {
  cy.get('[data-cy=back-button]')
    .should('be.visible')
    .contains('back', { matchCase: false })
    .click();
});

Cypress.Commands.add('submitQuestionnaire', () => {
  cy.get('[data-cy=submit-button]')
    .should('be.visible')
    .contains('submit', { matchCase: false })
    .click();
});

Cypress.Commands.add('clickRightSilderButton', () => {
  cy.get('[data-cy=slider-container]').within(() => {
    cy.get('[data-cy="slider-controls"]').within(() => {
      cy.get('[data-cy=slider-button-right]');
    });
  });
});
Cypress.Commands.add('clickLeftSilderButton', () => {
  cy.get(
    '[data-cy=slider-container] > .slides-container > [data-cy=slider-controls] > :nth-child(1) > [data-cy=slider-button-left]'
  );
});

Cypress.Commands.add('checkDialog', () => {
  cy.get('.mat-dialog-container')
    .should('be.visible')
    .within(() => {
      cy.get('[data-cy=dialog-title]').contains('The answer was not chosen');
      cy.get('[data-cy=dialog-content]').contains('Please select a value');
      cy.get('[data-cy=dialog-submit-button]')
        .should('be.visible')
        .contains('Ok')
        .click({ force: true });
    });
  cy.get('.mat-dialog-container').should('not.exist');
});

Cypress.Commands.add('checkCardSelection', (questionIndex, cardIndex) => {
  cy.get('[data-cy=chip-list-' + questionIndex + ']').within(() => {
    cy.get('[data-cy=questionnaire-answer-card-' + cardIndex + ']')
      .first()
      .click({ force: true })
      .should('have.css', 'background-color', 'rgb(255, 171, 0)')
      .click({ force: true })
      .should('have.css', 'background-color', 'rgb(224, 224, 224)')
      .click({ force: true });
  });
});

Cypress.Commands.add('checkBeforeCardIsSelected', (cardIndex) => {
  cy.checkAmountOfNavButtons(2);

  cy.previousQuestion();

  cy.get('[data-cy=questionnaire-answer-card-' + cardIndex + ']')
    .first()
    .should('have.css', 'background-color', 'rgb(255, 171, 0)');
});

Cypress.Commands.add('checkCardsData', (array, questionIndex) => {
  array.forEach((element: any, index: number) => {
    cy.get('[data-cy=chip-list-' + questionIndex + ']').within(() => {
      cy.get('[data-cy=questionnaire-answer-card-' + index + ']')
        .should('contain', element.answer)
        .should('have.css', 'background-color', 'rgb(224, 224, 224)');
    });
    if (index > 2) {
      cy.clickRightSilderButton();
    }
    cy.get('[data-cy=questionnaire-answer-icon]').should('be.visible');
  });
});
