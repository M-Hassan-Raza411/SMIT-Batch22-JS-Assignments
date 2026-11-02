// Question 10: ATM Withdrawal System 
// Create an ATM withdrawal program. 
// Initial Balance: Rs. 25,000 
// Ask the user for: 
// • PIN 
// • Withdrawal amount 
// Correct PIN: 1234 
// Conditions: 
// 1. Validate the PIN. 
// 2. Withdrawal amount must be greater than zero. 
// 3. Withdrawal amount must not exceed the available balance. 
// 4. Withdrawal amount must be a multiple of Rs. 500. 
// 5. If all conditions are satisfied, deduct the amount from the balance. 
// Example Input: 
// Enter PIN: 1234 
// Enter Amount: 5000

var balance = 25000;
var correctPin = 1234;


var pin = +prompt("Enter PIN");

if (pin === correctPin) {
    var amount = +prompt("Enter Amount");

    if (amount > 0) {
        if (amount <= balance) {

            if (amount % 500 === 0) {
                balance = balance - amount;

                console.log("Withdrawal Successful!");
                console.log("Withdrawn Amount: Rs. " + amount);
                console.log("Remaining Balance: Rs. " + balance);

            }
            else {
                console.log("Error! Amount must be a multiple of Rs. 500.")
            }
        }
        else {
            console.log("Error! Insufficient Balance.");
        }
    }
    else {
        console.log("Error! Amount must be greater than zero.");
    }
}
else {
    console.log("Error! Invalid PIN.");
}

