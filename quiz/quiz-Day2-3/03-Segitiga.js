/** buat segitiga  */

for (let i = 0; i < 6; i++) {
  let segitiga = "";
  for (let j = 0; j < 6 - i; j++) {
    segitiga += j + " ";
  }
  console.log(segitiga);
}
// output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 0; i < 6; i++) {
  let segitiga = "";
  for (let j = 6 - i; j > 0; j--) {
    segitiga += j + " ";
  }
  console.log(segitiga);
}

// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
