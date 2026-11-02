// Question 02: Even or Odd Number 
//  Ask the user to enter an integer and determine whether it is even or odd using the modulus operator.

var number = +prompt("Enter a number.");

if(number % 2 == 0){
    console.log(number + " " + "is a even number");
}else{
    console.log(number + " " + "is an odd number");
}