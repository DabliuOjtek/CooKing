declare namespace Cypress {
  interface Chainable {
    /* Czekanie na spinner */
    waitForSpinner(): Chainable<Element>;

    /* Sprawdzenie ilości kart na karuzeli */
    checkAmountOfCards(value: number): void;

    /* Sprawdzenie ilości przycisków dolnego paska nawigacji */
    checkAmountOfNavButtons(value: number): void;

    /* Przejście do następnego pytania */
    nextQuestion(): void;
  }
}
