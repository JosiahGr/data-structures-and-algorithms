'use strict';

export default function mealTotal(amount, tax, tip) {
  let tipp = tip.replace('%', '');
  tipp = `0.${tipp}`;
  let taxx = tax.replace('%', '');
  taxx = `0.${taxx}`;

  const totalTax = amount * taxx;
  const totalTip = amount * tipp;

  return Math.floor(amount + totalTax + totalTip);
}
