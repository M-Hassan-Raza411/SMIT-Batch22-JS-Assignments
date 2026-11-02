// Question 3: Voting Eligibility  
// Create a program that asks the user for their age. 
// Conditions: 
// • Age 18 or above: Eligible to vote 
// • Below 18: Not eligible to vote 
// • Negative age: Invalid age


var age = +prompt("Enter your age.");

if(age > 0 && age < 18){
  console.log("You are not eligibal to vote.")
}
else if(age >= 18){
  console.log("You are eligibal to vote.")
}
else{
    console.log("Invalid age")
}