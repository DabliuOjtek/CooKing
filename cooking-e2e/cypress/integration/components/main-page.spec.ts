context('Main page', () => {
  const baseUrl = Cypress.config('baseUrl');
  beforeEach(() => {});

  afterEach(() => {});

  it('Questionnaire', () => {
    const questionnaireFirstQuestionCardsData = [
      { answer: 'Breakfast' },
      { answer: 'Dinner' },
      { answer: 'Dessert' },
      { answer: 'Supper' },
    ];

    const questionnaireSecondQuestionCardsData = [
      { answer: 'American' },
      { answer: 'Italian' },
      { answer: 'Asian' },
      { answer: 'Polish' },
      { answer: 'Mexican' },
    ];

    const questionnaireThirdQuestionCardsData = [
      { answer: '15min' },
      { answer: '30min' },
      { answer: '60min' },
      { answer: 'More than 60min' },
    ];

    const questionnaireFourthQuestionCardsData = [
      { answer: '1' },
      { answer: '2' },
      { answer: '3' },
      { answer: '4' },
      { answer: '5' },
    ];

    const questionnaireQuestions = [
      { question: 'What type of meal do you want to choose?' },
      { question: 'What are your favorite cuisines?' },
      { question: 'How much time do you have?' },
      { question: 'How would you describe your cooking skills?' },
    ];
    //=========================== pytanie 1 ===========================
    cy.visit(`${baseUrl}`);

    cy.get('[data-cy=main-page-title]')
      .should('be.visible')
      .contains('Customize your cuisine');

    cy.get('[data-cy=questionnaire-question]')
      .should('be.visible')
      .contains(questionnaireQuestions[0].question);

    cy.get('[data-cy=slider-container]').should('be.visible');

    cy.checkAmountOfCards(0, 4);

    cy.nextQuestion();

    cy.checkDialog();

    cy.checkCardsData(questionnaireFirstQuestionCardsData, 0);

    cy.checkCardSelection(0, 0);

    cy.checkAmountOfNavButtons(1);

    cy.nextQuestion();

    cy.checkBeforeCardIsSelected(0);
    cy.nextQuestion();

    //=========================== pytanie 2 ===========================

    cy.get('[data-cy=questionnaire-question]')
      .should('be.visible')
      .contains(questionnaireQuestions[1].question);

    cy.get('[data-cy=slider-container]').should('be.visible');

    cy.checkAmountOfCards(1, 5);

    cy.nextQuestion();

    cy.checkDialog();

    cy.checkCardsData(questionnaireSecondQuestionCardsData, 1);

    cy.checkCardSelection(1, 0);

    cy.checkAmountOfNavButtons(2);

    cy.nextQuestion();

    cy.checkBeforeCardIsSelected(0);
    cy.nextQuestion();

    //=========================== pytanie 3 ===========================

    cy.get('[data-cy=questionnaire-question]')
      .should('be.visible')
      .contains(questionnaireQuestions[2].question);

    cy.get('[data-cy=slider-container]').should('be.visible');

    cy.checkAmountOfCards(2, 4);

    cy.nextQuestion();

    cy.checkDialog();

    cy.checkCardsData(questionnaireThirdQuestionCardsData, 2);

    cy.checkCardSelection(2, 0);

    cy.checkAmountOfNavButtons(2);

    cy.nextQuestion();

    cy.checkBeforeCardIsSelected(0);
    cy.nextQuestion();

    //=========================== pytanie 4 ===========================

    cy.get('[data-cy=questionnaire-question]')
      .should('be.visible')
      .contains(questionnaireQuestions[3].question);

    cy.get('[data-cy=slider-container]').should('be.visible');

    cy.checkAmountOfCards(3, 5);

    cy.submitQuestionnaire();

    cy.checkDialog();

    cy.checkCardsData(questionnaireFourthQuestionCardsData, 3);

    cy.checkCardSelection(3, 0);

    cy.checkAmountOfNavButtons(2);

    cy.checkBeforeCardIsSelected(0);
    cy.nextQuestion();

    cy.submitQuestionnaire();
    //cy.wait('@recipe');
  });
});
