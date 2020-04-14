import { Component, State, Element, h } from '@stencil/core';

import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'uc-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput: HTMLInputElement;

  @Element() el: HTMLElement;

  @State() fetchedPrice: number;

  /* Two way binding for error handling */
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() error: string;

  onUserInput(event: Event) {
    // Set variable to actual user input.
    this.stockUserInput = (event.target as HTMLInputElement).value;

    // Do all error checking!
    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true;
    } else {
      this.stockInputValid = false;
    }
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    const stockSymbol = this.stockInput.value;
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
    )
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Invalid!');
        } // check for 400 errors... throw new Error
        return res.json();
      })
      .then(parsedRes => {
        // Error checking with this particular api.
        if (!parsedRes['Global Quote']) {
          throw new Error('Invalid symbol!');
        } else if (parsedRes['Error Message']) {
          throw new Error(parsedRes['Error Message']);
        }

        this.error = null;
        this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
      })
      .catch(err => {
        this.error = err.message;
      });
  }

  render() {
    let dataContent = <p>Please enter a symbol!</p>;
    if (this.error) {
      dataContent = <p>{this.error}</p>;
    } else if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>;
    }
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input
          id="stock-symbol"
          ref={el => (this.stockInput = el)}
          value={this.stockUserInput /*binding*/}
          onInput={this.onUserInput.bind(this)/*update value in var*/}
        />
        <button type="submit" disabled={!this.stockInputValid}>
          Fetch
        </button>
      </form>,
      <div>{dataContent}</div>
    ];
  }
}
