import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'uc-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  @State() fetchedPrice: number;

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    // Modern browser fetch API. Dummy fetch microsoft
    fetch(
      'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo'
    )
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        // console.log(parsedRes); // see format
        this.fetchedPrice = /*number*/+parsedRes['Global Quote']['05. price']; // access object field which has white space.
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // When state changes, this re-renders.
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id="stock-symbol" />
        <button type="submit">Fetch</button>
      </form>,
      <div>
        <p>Price: ${this.fetchedPrice}</p>
      </div>
    ];
  }
}
