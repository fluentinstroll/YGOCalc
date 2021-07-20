import * as calc from './calculator';
import styles from '../styles/CalculatorForm.module.css';
import React, {Component} from 'react'

export default class CalculatorForm extends Component {
  /**TODO:
   * - currently when editing the form, you randomly get NaN
   */


  constructor(props) {
    super(props);
  this.state = {
    cardsInDeck: 40,
    targetCards: 3,
    cardsInHand: 5,
    desiredCards: 1,
    probability: '',
  };
}

  handleCardsInDeckChange = (event) => {
    this.setState({ cardsInDeck: event.target.value });
    console.log('target: ' + event.target.value + ' handleCardsInDeckChange: ' + this.state.cardsInDeck)
    this.handleChange()
  }
  handleCardsInHandChange = (event) => {
    this.setState({ cardsInHand: event.target.value });
    this.handleChange()
  }
  handleTargetCardsChange = (event) => {
    this.setState({ targetCards: event.target.value });
    this.handleChange()
  }
  handleDesiredCardsChange = (event) => {
    this.setState({ desiredCards: event.target.value });
    this.handleChange()
  }

  handleChange = () => {
    //might get NaN because of this
    let probabilityCard = (
      calc.hypergeometricDistribution(
        this.state.desiredCards,
        this.state.targetCards,
        this.state.cardsInHand,
        this.state.cardsInDeck
      ) * 100
    ).toString();
    console.log(this.state.probability);
    this.setState({ probability: probabilityCard });
  };
render(){
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Deck Size
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={this.state.cardsInDeck}
          type="text"
          placeholder="40"
          onChange={this.handleCardsInDeckChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Hand Size
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={this.state.cardsInHand}
          type="text"
          placeholder="5"
          onChange={this.handleCardsInHandChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          # of Target Cards
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={this.state.targetCards}
          type="text"
          placeholder="3"
          onChange={this.handleTargetCardsChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          # of Copies of Target cards to open
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={this.state.desiredCards}
          type="text"
          placeholder="1"
          onChange={this.handleDesiredCardsChange}
        />
      </div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {this.state.probability}
      </label>
    </form>
  );
}}
