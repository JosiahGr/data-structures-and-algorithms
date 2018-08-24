'use strict';

import makeBorder from './make-border';

describe('makeBorder.js', () => {
  test('#add parens to border', () => {
    expect(makeBorder(['1', '2'])).toEqual(['***', '*1*', '*2*', '***']);
  });
  test('#add parens to border 3 numbers', () => {
    expect(makeBorder(['1', '2', '3'])).toEqual(['***', '*1*', '*2*', '*3*', '***']);
  });
  test('#add parens to border 9 numbers', () => {
    expect(makeBorder(['1', '2', '3', '4', '5', '6', '7', '8', '9'])).toEqual(['***', '*1*', '*2*', '*3*', '*4*', '*5*', '*6*', '*7*', '*8*', '*9*', '***']);
  });
});
