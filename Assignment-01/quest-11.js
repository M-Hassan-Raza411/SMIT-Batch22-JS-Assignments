// // ```Question 11:
// // ===   Currency Converter  ===

var pkrAmount = +prompt("Enter PKR")
var exchangeRate = 280
var usdAmount = pkrAmount / exchangeRate

console.log(`PKR Amount: ${pkrAmount}`);
console.log(`Equivalent USD: $${Math.floor(usdAmount)}`);
