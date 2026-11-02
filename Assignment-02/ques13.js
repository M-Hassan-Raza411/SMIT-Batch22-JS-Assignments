// Question 13: Traffic Signal System  
// Ask the user to enter a traffic signal color. 
// Conditions: 
// • Red -> Stop 
// • Yellow -> Get Ready 
// • Green -> Go 
// • Any other input -> Invalid Signal


var colors = prompt("Enter a traffic signl color");
var red = "red";
var yellow = "yellow";
var green = "green";

if(colors !== red && colors !== yellow && colors !== green){
    console.log("Invalid traffic signal colors");
}
else{
    
    if(colors === red){
        console.log("Stop!");
    }
    else if(colors === yellow){
        console.log("Get ready");
    }else{
        console.log("Go");
    }
}