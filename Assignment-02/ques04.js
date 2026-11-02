// Question 4: Find the Largest Number  
// Take three numbers from the user and find the largest number using conditional statements.

var firstNumber = +prompt("Enter First number");
var secondNumber = +prompt("Enter Second number");
var thirdNumber = +prompt("Enter Third number");

if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log(firstNumber + " " + "is the largest number.");
}
else if(secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log(secondNumber + " " + "is the largest number.");
}
else{
    console.log(thirdNumber + " " + "is the largest number.");
}
