// Question 1: Positive, Negative or Zero 
// Write a JavaScript program that takes a number from the user and determines whether it is: 
// • Positive 
// • Negative 
// • Zero


var number = +prompt("Enter a number");

if(number > 0){
    console.log(number + " " + "is a positive number.")
}

else if(number < 0){
    console.log(number + " " + "is a negative number.")
}

else{
    console.log(number + " " + "is invalid number.")
}
