function maxWordLength(params) {
  let max = 0;
  let index = 0;
  params = params.split(" ");
  for (let i = 0; i < params.length; i++) {
    if (params[i].length > max) {
      max = params[i].length;
      index = i;
    }
  }
  return params[index];
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
