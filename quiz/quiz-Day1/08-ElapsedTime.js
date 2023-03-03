/**
 * hitung detik ke dalam day, hour, minute and seconds
 */

function getPeriodTimes(seconds) {
  if (isNaN(seconds)) {
    return `${seconds} is not number`;
  } else {
    const hari = Math.floor(seconds / (3600 * 24));
    seconds = seconds - hari * 3600 * 24;
    const jam = Math.floor(seconds / 3600);
    seconds = seconds - jam * 3600;
    const menit = Math.floor(seconds / 60);
    seconds = seconds - menit * 60;
    return `${hari} hari ${jam} jam ${menit} menit ${seconds} detik`;
  }
}

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik
