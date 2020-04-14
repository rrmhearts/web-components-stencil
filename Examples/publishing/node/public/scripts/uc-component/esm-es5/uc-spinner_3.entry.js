import { r as registerInstance, h, c as createEvent, g as getElement, H as Host } from './index-e7120200.js';
var spinnerCss = ".lds-ring{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #3b013b;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#3b013b transparent transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
var Spinner = /** @class */ (function () {
    function Spinner(hostRef) {
        registerInstance(this, hostRef);
    }
    Spinner.prototype.render = function () {
        return (h("div", { class: "lds-ring" }, h("div", null), h("div", null), h("div", null), h("div", null)));
    };
    return Spinner;
}());
Spinner.style = spinnerCss;
var AV_API_KEY = '11N324LBH0F98A78';
var stockFinderCss = ":host{font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:var(--color-primary, black);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--color-primary, black);background:var(--color-primary, black);color:var(--color-primary-inverse, white);cursor:pointer}form button:hover,form button:active{background:var(--color-primary-highlight, grey);border-color:var(--color-primary-highlight, grey)}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li:hover,li:active{background:var(--color-primary, black);color:var(--color-primary-inverse, white)}";
var StockFinder = /** @class */ (function () {
    function StockFinder(hostRef) {
        registerInstance(this, hostRef);
        this.searchResults = [];
        this.loading = false;
        this.ucSymbolSelected = createEvent(this, "ucSymbolSelected", 7);
    }
    StockFinder.prototype.onFindStocks = function (event) {
        var _this = this;
        event.preventDefault();
        this.loading = true;
        var stockName = this.stockNameInput.value;
        fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + stockName + "&apikey=" + AV_API_KEY)
            .then(function (res) { return res.json(); })
            .then(function (parsedRes) {
            _this.searchResults = parsedRes['bestMatches'].map(function (match) {
                return { name: match['2. name'], symbol: match['1. symbol'] };
            });
            console.log(_this.searchResults);
            _this.loading = false;
        })
            .catch(function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    StockFinder.prototype.onSelectSymbol = function (symbol) {
        this.ucSymbolSelected.emit(symbol);
    };
    StockFinder.prototype.render = function () {
        var _this = this;
        var content = (h("ul", null, this.searchResults.map(function (result) { return (h("li", { onClick: _this.onSelectSymbol.bind(_this, result.symbol) }, h("strong", null, result.symbol), " - ", result.name)); })));
        if (this.loading) {
            content = h("uc-spinner", null);
        }
        return [
            h("form", { onSubmit: this.onFindStocks.bind(this) }, h("input", { id: "stock-symbol", ref: function (el) { return (_this.stockNameInput = el); } }), h("button", { type: "submit" }, "Find!")),
            content
        ];
    };
    return StockFinder;
}());
StockFinder.style = stockFinderCss;
var stockPriceCss = ":host{font-family:sans-serif;border:2px solid var(--app-primary-color);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:red}form input{font:inherit;color:var(--app-primary-color);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--app-primary-color);background:var(--app-primary-color);color:white;cursor:pointer}form button:hover,form button:active{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}.lds-ring{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid var(--app-primary-color);border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--app-primary-color) transparent transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
var StockPrice = /** @class */ (function () {
    function StockPrice(hostRef) {
        registerInstance(this, hostRef);
        this.stockInputValid = false;
        this.loading = false; // wait for async data
    }
    StockPrice.prototype.stockSymbolChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.stockUserInput = newValue;
            this.stockInputValid = true;
            this.fetchStockPrice(newValue);
        }
    };
    StockPrice.prototype.onUserInput = function (event) {
        this.stockUserInput = event.target.value;
        if (this.stockUserInput.trim() !== '') {
            this.stockInputValid = true;
        }
        else {
            this.stockInputValid = false;
        }
    };
    StockPrice.prototype.onFetchStockPrice = function (event) {
        event.preventDefault();
        // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
        this.stockSymbol = this.stockInput.value;
        // this.fetchStockPrice(stockSymbol);
    };
    StockPrice.prototype.componentWillLoad = function () {
        console.log('componentWillLoad');
        console.log(this.stockSymbol);
    };
    StockPrice.prototype.componentDidLoad = function () {
        console.log('componentDidLoad');
        if (this.stockSymbol) {
            // this.initialStockSymbol = this.stockSymbol;
            this.stockUserInput = this.stockSymbol;
            this.stockInputValid = true;
            this.fetchStockPrice(this.stockSymbol);
        }
    };
    StockPrice.prototype.componentWillUpdate = function () {
        console.log('componentWillUpdate');
    };
    StockPrice.prototype.componentDidUpdate = function () {
        console.log('componentDidUpdate');
        // if (this.stockSymbol !== this.initialStockSymbol) {
        //   this.initialStockSymbol = this.stockSymbol;
        //   this.fetchStockPrice(this.stockSymbol);
        // }
    };
    StockPrice.prototype.componentDidUnload = function () {
        console.log('componentDidUnload');
    };
    /*
      Listen for a specific event. If event happens, call function.
      Mostly used for custom events so not falsely triggered.
    */
    StockPrice.prototype.onStockSymbolSelected = function (event) {
        console.log('stock symbol selected: ' + event.detail);
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
        }
    };
    StockPrice.prototype.fetchStockPrice = function (stockSymbol) {
        var _this = this;
        this.loading = true;
        fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=" + AV_API_KEY)
            .then(function (res) {
            if (res.status !== 200) {
                throw new Error('Invalid!');
            }
            return res.json();
        })
            .then(function (parsedRes) {
            if (!parsedRes['Global Quote']) {
                throw new Error('Invalid symbol!');
            }
            _this.error = null;
            _this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
            _this.loading = false;
        })
            .catch(function (err) {
            _this.error = err.message;
            _this.fetchedPrice = null;
            _this.loading = false;
        });
    };
    // Special method. Set class on element automatically.
    StockPrice.prototype.hostData = function () {
        return { class: this.error ? 'error' : '' };
    };
    StockPrice.prototype.__stencil_render = function () {
        var _this = this;
        var dataContent = h("p", null, "Please enter a symbol!");
        if (this.error) {
            dataContent = h("p", null, this.error);
        }
        if (this.fetchedPrice) {
            dataContent = h("p", null, "Price: $", this.fetchedPrice);
        }
        if (this.loading) {
            dataContent = h("uc-spinner", null);
        }
        return [
            h("form", { onSubmit: this.onFetchStockPrice.bind(this) }, h("input", { id: "stock-symbol", ref: function (el) { return (_this.stockInput = el); }, value: this.stockUserInput, onInput: this.onUserInput.bind(this) }), h("button", { type: "submit", disabled: !this.stockInputValid || this.loading }, "Fetch")),
            h("div", null, dataContent)
        ];
    };
    Object.defineProperty(StockPrice.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StockPrice, "watchers", {
        get: function () {
            return {
                "stockSymbol": ["stockSymbolChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    StockPrice.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
    return StockPrice;
}());
StockPrice.style = stockPriceCss;
export { Spinner as uc_spinner, StockFinder as uc_stock_finder, StockPrice as uc_stock_price };
