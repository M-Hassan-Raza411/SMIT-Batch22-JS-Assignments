// Question 7: Discount Eligibility 
// A shopping store offers discounts based on the total purchase amount.
var amount = +prompt("Enter your total purchase amount:");

// var amount =18000

var discount = 0;

if (amount >= 10000) {
    discount = 20;
}
else if (amount >= 5000) {
    discount = 10;
}
else if (amount >= 2000) {
    discount = 5;
}
else {
    discount = 0;
}

var discountAmount = amount * discount / 100;
// console.log(discountAmount)
var finalAmount = amount - discountAmount;

console.log("Original Amount: Rs. " + amount);
console.log("Discount Percentage: " + discount + "%");
console.log("Discount Amount: Rs. " + discountAmount);
console.log("Final Payable Amount: Rs. " + finalAmount);