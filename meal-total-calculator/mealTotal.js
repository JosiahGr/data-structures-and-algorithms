'use strict';

export default function mealTotal(amount, tip, tax) {
  let tipp = tip.replace('%', '');
  let taxx = tax.replace('%', '');
  
  if (tipp < 10 || taxx < 10) {
    tipp = `0.0${tipp}`;
    taxx = `0.0${taxx}`;
  } else {
    taxx = `0.${taxx}`;
    tipp = `0.${tipp}`;
  }

  const totalTax = taxx * amount;
  const totalTip = tipp * amount;
  const total = amount + totalTax + totalTip;

  return total.toFixed(2);
}
