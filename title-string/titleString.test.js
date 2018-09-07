'use strict';

import title from './titleString';

describe('#title', () => {
  test('Should return something great', () => {
    expect(title('hello greatness', '')).toEqual('Hello Greatness ');
  });
  test('Should return accurate titleCase', () => {
    expect(title('This is tErrIble TitleCase', '')).toEqual('This Is Terrible Titlecase ');
  });
});
