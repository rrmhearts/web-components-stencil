import { Component, State, h } from '@stencil/core';

import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'uc-stock-finder',
  styleUrl: './stock-finder.css',
  shadow: true
})
export class StockFinder {
  stockNameInput: HTMLInputElement;

  @State() searchResults: { symbol: string; name: string }[] = [];

  onFindStocks(event: Event) {
    event.preventDefault();
    const stockName = this.stockNameInput.value;
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`
    )
      .then(res => res.json())
      .then(parsedRes => {
        this.searchResults = parsedRes['bestMatches'].map(match => {
          return { name: match['2. name'], symbol: match['1. symbol'] };
        });
        console.log(this.searchResults);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input id="stock-symbol" ref={el => (this.stockNameInput = el)} />
        <button type="submit">Find!</button>
      </form>,
      <ul>
        {this.searchResults.map(result => (
          <li><strong>{result.symbol}</strong> - {result.name}</li>
        ))}
      </ul>
    ];
  }
}
