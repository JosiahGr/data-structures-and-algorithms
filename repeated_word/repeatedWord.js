// O(n) -> n = number of words in string

const repeatedWord = (string) => {
  if (!string) return undefined;
  const array = string.split(/\W+/);
  const map = {};
  map[array[0]] = 1;
  for (let i = 1; i < array.length; i++) {
    if (map[array[i]]) {
      map[array[i]] = 2;
      return array[i];
    }
    map[array[i]] = 1;
  }
  return undefined;
};

export default repeatedWord;
