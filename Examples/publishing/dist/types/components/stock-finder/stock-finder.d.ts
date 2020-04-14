import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class StockFinder {
    stockNameInput: HTMLInputElement;
    searchResults: {
        symbol: string;
        name: string;
    }[];
    loading: boolean;
    ucSymbolSelected: EventEmitter<string>;
    onFindStocks(event: Event): void;
    onSelectSymbol(symbol: string): void;
    render(): JSX.Element[];
}
