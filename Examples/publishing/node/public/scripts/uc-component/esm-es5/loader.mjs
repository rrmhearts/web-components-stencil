import { a as patchEsm, b as bootstrapLazy } from './index-e7120200.js';
var defineCustomElements = function (win, options) { return patchEsm().then(function () {
    return bootstrapLazy([["uc-spinner_3", [[1, "uc-stock-finder", { "searchResults": [32], "loading": [32] }], [1, "uc-stock-price", { "stockSymbol": [1537, "stock-symbol"], "fetchedPrice": [32], "stockUserInput": [32], "stockInputValid": [32], "error": [32], "loading": [32] }, [[32, "ucSymbolSelected", "onStockSymbolSelected"]]], [1, "uc-spinner"]]]], options);
}); };
export { defineCustomElements };
