//const requestUrl = Cypress.env('requestUrl');
const baseUrl = Cypress.config('baseUrl');

Cypress.Commands.add('createPostRequests', () => {
  cy.intercept('POST', `${baseUrl}/recipe`).as('recipe');
});
