// Question 9: Job Eligibility Checker  
// A company is hiring junior developers. 
// Requirements: 
// • Age must be between 18 and 30 (inclusive). 
// • Minimum experience: 1 year. 
// • JavaScript knowledge is required. 
//   Ask the user for: 
// • Age 
// • Years of experience 
// • JavaScript knowledge (yes or no)

var age = +prompt("Enter your age.");
var experience = +prompt("Enter your years of experience.");
var jsknowledge = prompt("Do you know javaScript? (yes / no).");


if(age <= 18 && age >= 30 && experience >= 1 && jsknowledge === "yes"){
    console.log("Congratulations! You are eligibal to apply." )
}
else{
    console.log("Sorry! You are not meet the requirements.");
}