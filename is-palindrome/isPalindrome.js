const checkPalindrome = (string) => {
  const center = Math.floor(string.length / 2);
  
  for (let i = 0; i <= center; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

export default checkPalindrome;
