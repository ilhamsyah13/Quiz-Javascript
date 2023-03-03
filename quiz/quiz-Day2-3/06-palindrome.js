function isPalindrome(word) {
  let compare = [];
  word = word.toLowerCase().split("");

  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      word.splice(i, 1);
    }
  }

  for (let i = word.length - 1; i >= 0; i--) {
    compare.push(word[i]);
  }

  compare = compare.join("");
  word = word.join("");

  if (compare === word) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("kasur ini rUsak")); //true
