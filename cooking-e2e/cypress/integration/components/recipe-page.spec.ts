context("Recommedation page", () => {
  const baseUrl = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.createPostRequestsAliases();
    cy.createGetRequestsAliases();
  });

  afterEach(() => {});

  it("Questionnaire", () => {
    cy.visit(`${baseUrl}`);
    cy.wait(["@questionnaire", "@questions"]);

    cy.get("[data-cy=chip-list-0]").within(() => {
      cy.get("[data-cy=questionnaire-answer-card-1]")
        .first()
        .click({ force: true });
    });

    cy.get("[data-cy=next-button]").click();

    cy.get("[data-cy=chip-list-1]").within(() => {
      cy.get("[data-cy=questionnaire-answer-card-2]")
        .first()
        .click({ force: true });
    });

    cy.get("[data-cy=next-button]").click();

    cy.get("[data-cy=chip-list-2]").within(() => {
      cy.get("[data-cy=questionnaire-answer-card-1]")
        .first()
        .click({ force: true });
    });

    cy.get("[data-cy=next-button]").click();

    cy.get("[data-cy=chip-list-3]").within(() => {
      cy.get("[data-cy=questionnaire-answer-card-0]")
        .first()
        .click({ force: true });
    });

    cy.get("[data-cy=submit-button]").click();

    cy.wait("@recipe");

    cy.get("[data-cy=tiles-container]")
      .children()
      .first()
      .within(() => {
        cy.get("[data-cy=tile-image]").click();
      });

    cy.get("[data-cy=cusine-image]").should("be.visible");

    cy.get("[data-cy=cusine-name]").should("be.visible");

    cy.get("[data-cy=recipe-details]").should("be.visible");

    cy.get("[data-cy=ingredients-section]").should("be.visible");

    cy.get("[data-cy=instructions-section]").should("be.visible");
  });
});
