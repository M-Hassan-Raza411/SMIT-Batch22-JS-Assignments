// ```Question 06:
// ===  Shopping Bill ===

var product1 = +prompt("Enter Product 1 Ammount")
var product2 = +prompt("Enter Product 2 Ammount")
var product3 = +prompt("Enter Product 3 Ammount")

var totalBill = product1 + product2 + product3;
var discount = totalBill / 10; 
var finalBill = totalBill - discount;

console.log("Total Bill: Rs. ", totalBill);
console.log("Discount: Rs. ", discount);
console.log("Final Bill: Rs. ", finalBill);
