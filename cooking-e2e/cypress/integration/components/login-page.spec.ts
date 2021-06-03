context('Login Page', () => {
  const baseUrl = Cypress.config('baseUrl');

  beforeEach(() => {
    cy.createPostRequestsAliases();
    cy.createGetRequestsAliases();
  });

  afterEach(() => {});

  it('Login Page', () => {
    cy.visit(`${baseUrl}`);
    cy.wait(['@questionnaire', '@questions']);

    cy.get('[data-cy=log-in]').click();

    cy.get('[data-cy=username]').type('cypress');

    cy.get('[data-cy=password]').type('cypress');

    cy.get('[data-cy=submit]').click();

    cy.wait(['@questionnaire', '@questions']);

    cy.get('[data-cy=chip-list-0]').within(() => {
      cy.get('[data-cy=questionnaire-answer-card-1]')
        .first()
        .click({ force: true });
    });

    cy.get('[data-cy=next-button]').click();

    cy.get('[data-cy=chip-list-1]').within(() => {
      cy.get('[data-cy=questionnaire-answer-card-2]')
        .first()
        .click({ force: true });
    });

    cy.get('[data-cy=next-button]').click();

    cy.get('[data-cy=chip-list-2]').within(() => {
      cy.get('[data-cy=questionnaire-answer-card-1]')
        .first()
        .click({ force: true });
    });

    cy.get('[data-cy=next-button]').click();

    cy.get('[data-cy=chip-list-3]').within(() => {
      cy.get('[data-cy=questionnaire-answer-card-0]')
        .first()
        .click({ force: true });
    });

    cy.get('[data-cy=submit-button]').click();

    cy.wait('@recipe');

    cy.get('[data-cy=tiles-container]')
      .find('[data-cy=fav-icon]')
      .first()
      .click();

    cy.get('[data-cy=logout]').should('be.visible');

    cy.get('[data-cy=burger-icon]').click();

    cy.get('[data-cy=favourite]').click();

    cy.get('[data-cy=tile-details]').should('be.visible');

    cy.get('[data-cy=tile-details]')
      .find('[data-cy=favourite-icon]')
      .first()
      .click();

    cy.get('[data-cy=logout]').click();
  });
});
