/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n) {
  let result = Number(n);
  if (isNaN(result)) {
    return `${n} is not number, try again...`;
  } else if (n > 10000) {
    return `${n} harus lebih kecil dari 10000`;
  } else {
    result = String(result);
    if (result.length > 3) {
      return (
        Number(result.charAt(0)) +
        Number(result.charAt(1)) +
        Number(result.charAt(2)) +
        Number(result.charAt(3))
      );
    } else if (result.length > 2) {
      return (
        Number(result.charAt(0)) +
        Number(result.charAt(1)) +
        Number(result.charAt(2))
      );
    } else if (result.length > 1) {
      return Number(result.charAt(0)) + Number(result.charAt(1));
    } else {
      return Number(result.charAt(0));
    }
  }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...
