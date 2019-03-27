import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Currency from './components/CurrencyConverter'
import CurrencyDisplay from './components/CurrencyDisplay'

class App extends Component {
  render() {
    return (
			<>
				<h2>Render Props</h2>
				<Currency
					render={(currencyData, amount) => (
						<p>
							US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
							{currencyData.symbol}
							{(amount * currencyData.rate).toFixed(2)}
						</p>
					)}
				/>
			</>
    );
  }
}

export default App;
