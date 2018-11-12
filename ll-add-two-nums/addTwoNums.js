'use strict';

export default function add(ll1, ll2) {
  let listA = ll1.head;
  let listB = ll2.head;
  const num1 = `${ll1.head}`;
  const num2 = `${ll2.head}`;

  if (listA.head === null || listB.head === null) {
    return undefined;
  }

  while (listA.next !== null) {
    listA = listA.next;
    listB = listB.next;

    num1[0].push(`${listA.next.value}`);
    num2[0].push(`${listB.next.value}`);
  }

  const result = num1 + num2;

  return result;
}
