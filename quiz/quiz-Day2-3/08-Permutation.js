const checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    stringOne = stringOne.split("").sort().join("");
    stringTwo = stringTwo.split("").sort().join("");
    if (stringOne === stringTwo) {
      return true;
    } else {
      return false;
    }
  }

  // else sort and compare
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
};

console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aa")); //false;
