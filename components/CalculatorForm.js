import * as calc from './calculator';
import styles from '../styles/CalculatorForm.module.css';

export default function CalculatorForm() {
  let cardsInDeck = 40;
  let targetCards = 3;
  let cardsInHand = 5;
  let desiredCards = 1;

  const handleSubmit = event => {
      event.preventDefault();
    let probability =
      calc.hypergeometricDistribution(
        data.desiredCards,
        data.targetCards,
        data.cardsInHand,
        data.cardsInDeck
      ) * 100;
    console.log(probability.toString());
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Deck Size
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="deckSize"
          type="text"
          placeholder="40"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Hand Size
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="handSize"
          type="text"
          placeholder="5"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          # of Target Cards
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="targetCards"
          type="text"
          placeholder="3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          # of Copies of Target cards to open
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="openCards"
          type="text"
          placeholder="1"
        />
      </div>

      <button type="submit"
          >Submit</button>
    </form>
  );
}
