'use strict';

export default function canWeMakeIt(dist) {
  if (Math.floor(25 * 2) - dist >= dist) {
    return true;
  }

  return false;
}
