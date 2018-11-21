'use strict';

export default function simpleAdding(num) { 
  if (num === 1) {
    return 1; 
  }
  return num + simpleAdding(num - 1);
}
