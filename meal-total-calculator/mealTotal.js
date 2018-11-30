'use strict';

export default function mealTotal(amount, tax, tip) {
  const totalTax = amount * tax;
  const totalTip = amount * tip;

  return Math.floor(amount + totalTax + totalTip);
}
