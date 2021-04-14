context('Questionnaire', () => {
  const baseUrl = Cypress.config('baseUrl');

  beforeEach(() => {});

  afterEach(() => {});

  it('First question', () => {
    cy.visit(`${baseUrl}`);
    cy.get('[data-cy=main-page-title]')
      .should('be.visible')
      .contains('Customize your cuisine');

    cy.get('[data-cy=questionnaire-question]')
      .should('be.visible')
      .contains('What type of meal do you want to choose?');

    cy.get('[data-cy=slider-container]').should('be.visible');

    cy.checkAmountOfCards(4);

    cy.get('[data-cy=questionnaire-answer-card-1]')
      .should('contain', 'Dinner')
      .should('have.css', 'background-color', 'rgb(224, 224, 224)')
      .within(() => {
        cy.get('[data-cy=questionnaire-answer-icon]').should('be.visible');
      });

    cy.get('[data-cy=questionnaire-answer-card-1]')
      .first()
      .click({ force: true })
      .should('have.css', 'background-color', 'rgb(255, 171, 0)')
      .click({ force: true })
      .should('have.css', 'background-color', 'rgb(224, 224, 224)')
      .click({ force: true });

    cy.checkAmountOfNavButtons(1);

    cy.nextQuestion();
  });

  it('Second question', () => {
    cy.get('[data-cy=main-page-title]')
      .should('be.visible')
      .contains('Customize your cuisine');

    cy.get('[data-cy=questionnaire-question]')
      .should('be.visible')
      .contains('What are your favorite cuisines?');

    cy.get('[data-cy=slider-container]').should('be.visible');

    cy.checkAmountOfCards(4);

    cy.get(
      '[data-cy=slider-container] > .slides-container > [data-cy=slider-controls] > :nth-child(2) > [data-cy=slider-button-right]'
    )
      .last()
      .click();

    // cy.checkAmountOfNavButtons(2);

    // cy.get('[data-cy=questionnaire-answer-card-2]')
    //   .first()
    //   .click({ force: true });

    // cy.nextQuestion();
  });
});

// it('First question', () => {
//   //Pytnie 1
//   cy.get('[data-cy=main-page-title]')
//     .should('be.visible')
//     .contains('Customize your cuisine');

//   cy.get('[data-cy=questionnaire-question]')
//     .should('be.visible')
//     .contains('What type of meal do you want to choose?');

//   cy.get('[data-cy=slider-container]').should('be.visible');

//    cy.get('[data-cy=slides]')
//      .children()
//      .should('be.visible')
//      .should('have.length', 4);

//   cy.get('[data-cy=questionnaire-answer-card-1]')
//     .should('contain', 'Dinner')
//     .should('have.css', 'background-color', 'rgb(224, 224, 224)')
//     .within(() => {
//       cy.get('[data-cy=questionnaire-answer-icon]').should('be.visible');
//     });

//   cy.get('[data-cy=questionnaire-answer-card-1]')
//     .first()
//     .click({ force: true })
//     .should('have.css', 'background-color', 'rgb(255, 171, 0)')
//     .click({ force: true })
//     .should('have.css', 'background-color', 'rgb(224, 224, 224)')
//     .click({ force: true });

//   cy.get('[data-cy=questionnaire-nav-buttons]')
//     .should('be.visible')
//     .children()
//     .should('have.length', 1);

//   cy.get('[data-cy=next-button]').should('be.visible').click();
// });

// const progressBarOtherSteps: { step: string, value: string, style: string }[] = [
// 	{
// 	  'step' : 'Krok 3',
// 	  'value' : '-10 z 50',
// 	  'style' : 'background-color: rgb(255, 7, 7);'
// 	},
// 	{
// 	  'step' : 'Krok 4',
// 	  'value' : '25szt',
// 	  'style' : 'width: 50%; background-color: rgb(239, 199, 0);'
// 	},
// 	{
// 	  'step' : 'Krok 5',
// 	  'value' : '100 z 50',
// 	  'style' : 'width: 100%; background-color: rgb(0, 24, 111);'
// 	},
// 	{
// 	  'step' : 'Krok 6',
// 	  'value' : 'NaN z 50',
// 	  'style' : 'background-color: rgb(84, 110, 122);'
// 	},
// 	{
// 	  'step' : 'Krok 7',
// 	  'value' : 'Brak danych!',
// 	  'style' : 'width: 0%; background-color: rgb(255, 7, 7);'
// 	}
//   ];

//   cy.visit(`${ baseUrl }/app/main/workflow/e2eGaugeChartsAndProgressBars`);
//   cy.wait('@startWorkflowRequest');

//   gaugeChartData.forEach((element) => {
// 	cy.get('[data-cy=' + element.componentDataCy + ']')
// 	  .should('be.visible')
// 	  .within(() => {
// 		cy.get('[data-cy=chart-title]')
// 		  .should('be.visible')
// 		  .and('contain', element.title)
// 		  .and('have.class', element.fontStyle);

// 		cy.get('[data-cy=chart]')
// 		  .should('be.visible')
// 		  .and('contain', element.value);

// 		cy.get('[data-cy=chart]').within(() => {
// 		  cy.get('path.value')
// 			.should('attr', 'style', element.color);
// 		});
// 	  });
//   });

// progressBarOtherSteps.forEach((element, index) => {
// 	cy.get('[data-cy=next]')
// 	  .click();
// 	cy.wait([ '@completeTaskRequest', '@componentGridRequest', '@componentGridConfigRequest' ]);

// 	cy.get('[data-cy=grid-toolbar]')
// 	  .should('be.visible')
// 	  .contains(element.step);

// 	cy.get('[data-cy=grid-tile-0]').within(() => {

// 	  if (index === 0) {
// 		cy.get('[data-cy=caption-nullify-spacings-col-6]')
// 		  .should('be.visible')
// 		  .and('contain', 'test');

// 		cy.get('[data-cy=value-nullify-spacings-col-6]')
// 		  .should('be.visible');
// 	  }

// 	  cy.get('[data-cy=progressbar-value-wrapper]')
// 		.should('attr', 'style', element.style);

// 	  cy.get('[data-cy=progressbar-value-span]')
// 		.should('contain', element.value);
// 	});
//   });
