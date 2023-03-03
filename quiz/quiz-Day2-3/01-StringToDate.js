/** ubah value string ke date
 *  gunakan split
 *  inputan s = bulan/hari/tahun
 */

function strToDate(s) {
  const today = new Date(s);
  const array = s.split("");
  for (let index = 0; index < array.length; index++) {
    if (isNaN(array[index])) {
      if (array[index] === "/") {
        continue;
      }
      return `${s} bad format date`;
    }
  }
  return today;
}

console.log(strToDate("12/30/2021")); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate("12/aa/bb")); //12/aa/bb bad format date
