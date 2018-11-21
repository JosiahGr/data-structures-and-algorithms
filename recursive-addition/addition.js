'use strict';

export default function SimpleAdding(num) { 
  if (num === 1) {
    return 1; 
  }
  return num + SimpleAdding(num - 1);
}
