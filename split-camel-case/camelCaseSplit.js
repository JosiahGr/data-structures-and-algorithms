'use strict';

export default function camelCaseSplit(string) {
  return string.replace(/(?=[A-Z])/g, '');
}
