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
    expect(testShelter.dequeue('dog')).toEqual(dog);
    expect(testShelter.queue[1]).toEqual(cat);
  });
});
