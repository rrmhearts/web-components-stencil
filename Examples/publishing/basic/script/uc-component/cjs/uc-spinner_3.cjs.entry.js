'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8c68997f.js');

const spinnerCss = ".lds-ring{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #3b013b;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#3b013b transparent transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const Spinner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "lds-ring" }, index.h("div", null), index.h("div", null), index.h("div", null), index.h("div", null)));
    }
};
Spinner.style = spinnerCss;

const AV_API_KEY = '11N324LBH0F98A78';

const stockFinderCss = ":host{font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:var(--color-primary, black);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--color-primary, black);background:var(--color-primary, black);color:var(--color-primary-inverse, white);cursor:pointer}form button:hover,form button:active{background:var(--color-primary-highlight, grey);border-color:var(--color-primary-highlight, grey)}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li:hover,li:active{background:var(--color-primary, black);color:var(--color-primary-inverse, white)}";

const StockFinder = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.searchResults = [];
        this.loading = false;
        this.ucSymbolSelected = index.createEvent(this, "ucSymbolSelected", 7);
    }
    onFindStocks(event) {
        event.preventDefault();
        this.loading = true;
        const stockName = this.stockNameInput.value;
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
            .then(res => res.json())
            .then(parsedRes => {
            this.searchResults = parsedRes['bestMatches'].map(match => {
                return { name: match['2. name'], symbol: match['1. symbol'] };
            });
            console.log(this.searchResults);
            this.loading = false;
        })
            .catch(err => {
            console.log(err);
            this.loading = false;
        });
    }
    onSelectSymbol(symbol) {
        this.ucSymbolSelected.emit(symbol);
    }
    render() {
        let content = (index.h("ul", null, this.searchResults.map(result => (index.h("li", { onClick: this.onSelectSymbol.bind(this, result.symbol) }, index.h("strong", null, result.symbol), " - ", result.name)))));
        if (this.loading) {
            content = index.h("uc-spinner", null);
        }
        return [
            index.h("form", { onSubmit: this.onFindStocks.bind(this) }, index.h("input", { id: "stock-symbol", ref: el => (this.stockNameInput = el) }), index.h("button", { type: "submit" }, "Find!")),
            content
        ];
    }
};
StockFinder.style = stockFinderCss;

const stockPriceCss = ":host{font-family:sans-serif;border:2px solid var(--app-primary-color);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:red}form input{font:inherit;color:var(--app-primary-color);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--app-primary-color);background:var(--app-primary-color);color:white;cursor:pointer}form button:hover,form button:active{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}.lds-ring{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid var(--app-primary-color);border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--app-primary-color) transparent transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const StockPrice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.stockInputValid = false;
        this.loading = false; // wait for async data
    }
    stockSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.stockUserInput = newValue;
            this.stockInputValid = true;
            this.fetchStockPrice(newValue);
        }
    }
    onUserInput(event) {
        this.stockUserInput = event.target.value;
        if (this.stockUserInput.trim() !== '') {
            this.stockInputValid = true;
        }
        else {
            this.stockInputValid = false;
        }
    }
    onFetchStockPrice(event) {
        event.preventDefault();
        // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
        this.stockSymbol = this.stockInput.value;
        // this.fetchStockPrice(stockSymbol);
    }
    componentWillLoad() {
        console.log('componentWillLoad');
        console.log(this.stockSymbol);
    }
    componentDidLoad() {
        console.log('componentDidLoad');
        if (this.stockSymbol) {
            // this.initialStockSymbol = this.stockSymbol;
            this.stockUserInput = this.stockSymbol;
            this.stockInputValid = true;
            this.fetchStockPrice(this.stockSymbol);
        }
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
        // if (this.stockSymbol !== this.initialStockSymbol) {
        //   this.initialStockSymbol = this.stockSymbol;
        //   this.fetchStockPrice(this.stockSymbol);
        // }
    }
    componentDidUnload() {
        console.log('componentDidUnload');
    }
    /*
      Listen for a specific event. If event happens, call function.
      Mostly used for custom events so not falsely triggered.
    */
    onStockSymbolSelected(event) {
        console.log('stock symbol selected: ' + event.detail);
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
        }
    }
    fetchStockPrice(stockSymbol) {
        this.loading = true;
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
            .then(res => {
            if (res.status !== 200) {
                throw new Error('Invalid!');
            }
            return res.json();
        })
            .then(parsedRes => {
            if (!parsedRes['Global Quote']) {
                throw new Error('Invalid symbol!');
            }
            this.error = null;
            this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
            this.loading = false;
        })
            .catch(err => {
            this.error = err.message;
            this.fetchedPrice = null;
            this.loading = false;
        });
    }
    // Special method. Set class on element automatically.
    hostData() {
        return { class: this.error ? 'error' : '' };
    }
    __stencil_render() {
        let dataContent = index.h("p", null, "Please enter a symbol!");
        if (this.error) {
            dataContent = index.h("p", null, this.error);
        }
        if (this.fetchedPrice) {
            dataContent = index.h("p", null, "Price: $", this.fetchedPrice);
        }
        if (this.loading) {
            dataContent = index.h("uc-spinner", null);
        }
        return [
            index.h("form", { onSubmit: this.onFetchStockPrice.bind(this) }, index.h("input", { id: "stock-symbol", ref: el => (this.stockInput = el), value: this.stockUserInput, onInput: this.onUserInput.bind(this) }), index.h("button", { type: "submit", disabled: !this.stockInputValid || this.loading }, "Fetch")),
            index.h("div", null, dataContent)
        ];
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
    render() { return index.h(index.Host, this.hostData(), this.__stencil_render()); }
};
StockPrice.style = stockPriceCss;

exports.uc_spinner = Spinner;
exports.uc_stock_finder = StockFinder;
exports.uc_stock_price = StockPrice;
