'use strict';

export default class KaryNode {
  constructor(value) {
    this.children = [];
    this.level = null;
    this.value = value;
  }

  appendChild(value) {
    const append = new KaryNode(value);
    this.children.push(append);
  }
}
