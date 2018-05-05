import AnimalShelter from '../animalShelter';

const dog = {
  type: 'dog',
};

const cat = {
  type: 'cat',
};


describe('Animal Shelter class', () => {
  test('#enqueue adds objects to beginning of array', () => {
    const testShelter = new AnimalShelter();
    
    testShelter.enqueue(dog);
    testShelter.enqueue(cat);
    testShelter.enqueue(dog);
    testShelter.enqueue(cat);
    testShelter.enqueue(dog);
    expect(testShelter.queue[0].type).toEqual('dog');
  });
  test('#dequeue removes from end of array', () => {
    const testShelter = new AnimalShelter();

    testShelter.enqueue(dog);
    testShelter.enqueue(cat);
    testShelter.enqueue(dog);
    testShelter.dequeue(dog);
    expect(testShelter.queue[1].type).toEqual('cat');
  });
  test('#dequeue with no pref removes longest waiting animal from end of array', () => {
    const testShelter = new AnimalShelter();

    testShelter.enqueue(dog);
    testShelter.enqueue(cat);
    testShelter.enqueue(dog);
    testShelter.dequeue();
    expect(testShelter.queue[1].type).toEqual('cat');
  });
});
