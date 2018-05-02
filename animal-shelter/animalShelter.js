'use strict';

// Big O - Time O(n) Space O(n) --- n === length of queue

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(animal) {
    this.queue.unshift(animal);
    return this;
  }

  dequeue(pref) {
    const queueLength = this.queue.length - 1;
    let tempAnimal = null;
    if (this.queue.type === pref) {
      this.queue.pop();
      return this;
    } 
    for (let i = queueLength; i >= 0; i--) {
      if (this.queue[i].type === pref) {
        tempAnimal = this.queue.splice(1, i);
        return this;
      }
    }
    return tempAnimal;
  }
}

export default AnimalShelter;
