// Question 6: Student Grade Calculator 
//  Ask the user to enter their percentage.

var userPercentage = +prompt("Enter your percentage%");

if(userPercentage >= 90 && userPercentage <= 100){
    console.log("Your Grade is: A+");
}
else if(userPercentage >= 80 && userPercentage <= 89){
    console.log("Your Grade is: A");
}
else if(userPercentage >= 70 && userPercentage <= 79){
    console.log("Your Grade is: B");
}
else if(userPercentage >= 60 && userPercentage <= 69){
    console.log("Your Grade is: C");
}
else if(userPercentage >= 50 && userPercentage <= 59){
    console.log("Your Grade is: D");
}
else if(userPercentage > 0 && userPercentage <= 49){
    console.log("You are Failed");
}
else{
    console.log("Invalide Percentage")
}