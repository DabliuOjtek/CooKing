declare namespace Cypress {
  interface Chainable {
    /* ================= questionnaire.ts ================= */

    /* Sprawdzenie ilości kart na karuzeli */
    checkAmountOfCards(questionIndex: number, amountOfCards: number): void;

    /* Sprawdzenie ilości przycisków dolnego paska nawigacji */
    checkAmountOfNavButtons(amountOfNavButtons: number): void;

    /* Przejście do następnego pytania */
    nextQuestion(): void;

    /* Przejście do poprzedniego pytania */
    previousQuestion(): void;

    /* Przejście do poprzedniego pytania */
    submitQuestionnaire(): void;

    /* Kliknięcie prawego przycisku slidera*/
    clickRightSilderButton(): void;

    /* Kliknięcie lewego przycisku slidera*/
    clickLeftSilderButton(): void;

    /* Sprawdzenie wyskakującego dialogu w przypadku niezaznaczenia odpowiedzi na karuzeli */
    checkDialog(): void;

    /* Sprawdzenie mechanizmu zaznaczania karty */
    checkCardSelection(questionIndex: number, cardIndex: number): void;

    /* Sprawdzenie czy karta została zaznaczona */
    checkBeforeCardIsSelected(cardIndex: number): void;

    /* Sprawdzenie odpowiedzi i ikon na kartach */
    checkCardsData(array: any, questionIndex: number): void;

    /* ================= commands.ts ================= */

    /* Dodanie aliasów na zapytania do serwera */
    createPostRequests(): Chainable<Element>;
  }
}
