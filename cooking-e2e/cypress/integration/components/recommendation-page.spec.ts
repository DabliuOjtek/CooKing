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

    cy.get("[data-cy=recommendation-title]")
      .should("be.visible")
      .contains("Recommendation");

    cy.get("[data-cy=tiles-container]")
      .should("be.visible")
      .children()
      .should("have.length", 8);

    cy.get("[data-cy=tiles-container]")
      .should("be.visible")
      .first()
      .within(() => {
        cy.get("[data-cy=tile-title]").should("be.visible");
        cy.get("[data-cy=tile-rate]").should("be.visible");
        cy.get("[data-cy=tile-image]").should("be.visible");
      });
  });
});
