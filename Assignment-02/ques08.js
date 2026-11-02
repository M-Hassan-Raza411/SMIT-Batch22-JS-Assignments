// Question 8: Leap Year Checker 
// Ask the user to enter a year. 
// Determine whether it is a leap year. 
// Rules: 
// • A year divisible by 400 is a leap year. 
// • A year divisible by 100 but not 400 is not a leap year. 
// • Otherwise, a year divisible by 4 is a leap year.

var leapYear = +prompt("Enter year");

if (leapYear % 400 === 0) {
    console.log(leapYear + " is a Leap Year");
}
else if (leapYear % 100 === 0) {
    console.log(leapYear + " is not a Leap Year");
}
else if (leapYear % 4 === 0) {
    console.log(leapYear + " is a Leap Year");
}
else {
    console.log(leapYear + " is not a Leap Year");
}