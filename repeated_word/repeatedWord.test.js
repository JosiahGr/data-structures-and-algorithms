import repeatedWord from './repeatedWord';

describe('Should find the first number that occurs twice', () => {
  test('#repeatedWord should return with \'of\'', () => {
    const string = 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph';
    expect(repeatedWord(string)).toEqual('of');
  });
  test('#repeatedWord should return with \'who\'', () => {
    const string = 'lkasdf lkajsdf lkhgh kniu lsdvopw loivjues who lksdvjnhjso llkjnnnw lnbbsl iiue 8927837 87873990 8872377 who lksdfoo 890000 999110010';
    expect(repeatedWord(string)).toEqual('who');
  });
  test('#repeatedWord should return with \'a\'', () => {
    const string = 'a,,, how,? are you a';
    expect(repeatedWord(string)).toEqual('a');
  });
});
