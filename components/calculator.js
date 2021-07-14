/************************************************
 * Declare variables for calculations
 *
 * cardsInDeck = Population
 * cardsInHand = sample size
 * targetCards = number of successes in population
 * TODO:
 *
 ************************************************/

const factorial = (n) => {
  let output = 1;
  if (n === 1 || n === 0) {
    return output;
  }
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      output = output * i;
    }
    console.log(output);
    return output;
  }
};

const choose = (x, y) => {
  return factorial(x) / (factorial(x - y) * factorial(y));
};

export function hypergeometricDistribution(
  desiredCards,
  desiredCardsTotal,
  handSize,
  deckSize
) {
  let solution =
    (choose(desiredCardsTotal, desiredCards) *
      choose(deckSize - desiredCardsTotal, handSize - desiredCards)) /
    choose(deckSize, handSize);

  return solution;
}
