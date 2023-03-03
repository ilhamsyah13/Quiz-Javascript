/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let countKabisat = 0;
  for (let index = year1; index < year2; index++) {
    if (isKabisat(index)) {
      countKabisat++;
    }
  }
  return countKabisat;
}

function isKabisat(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

console.log(howManyKabisat(1997, 2021));
