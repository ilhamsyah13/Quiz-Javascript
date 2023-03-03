/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
  if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
    return "Price, Tax & Discount harus dalam angka";
  } else if (isNaN(tax)) {
    return `Pajak harus dalam angka`;
  } else if (isNaN(price)) {
    return `Price harus dalam angka`;
  } else {
    let totalPrice = price - (discount / 100) * price;
    return (
      `Total Sales 	: ${Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
      }).format(price)} \n` +
      `Discount (${discount}%) :	${Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
      }).format((discount / 100) * price)}\n` +
      `PriceAfterDiscount 	: ${Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
      }).format(totalPrice)}\n` +
      `Pajak (${tax}%) 	:${Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
      }).format((tax / 100) * totalPrice)}\n` +
      "----------------------------------\n" +
      `Total Payment : ${Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
      }).format(totalPrice + (tax / 100) * totalPrice)}`
    );
  }
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
