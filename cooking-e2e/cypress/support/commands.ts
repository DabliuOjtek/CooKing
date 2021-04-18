const requestUrl = Cypress.env('requestUrl');
const baseUrl = Cypress.config('baseUrl');

Cypress.Commands.add('createPostRequestsAliases', () => {
  cy.intercept('POST', `${requestUrl}/recipe`).as('recipe');
});

Cypress.Commands.add('createGetRequestsAliases', () => {
  cy.intercept('GET', `${requestUrl}/questionnaire`).as('questionnaire');
  cy.intercept('GET', `${requestUrl}/questions`).as('questions');
});
