
// UdemyWCCourse: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './udemywccourse.core.js';
import {
  Spinner,
  StockFinder,
  StockPrice
} from './udemywccourse.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    Spinner,
    StockFinder,
    StockPrice
  ], opts);
}
