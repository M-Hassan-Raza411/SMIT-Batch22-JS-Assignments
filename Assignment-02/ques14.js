// Question 14: Cinema Ticket Booking System 
//  A cinema offers different ticket prices based on age.
var age = +prompt("enter your age");
var dayType = prompt("enter day type (weekday / weekend)");
var price = 0;
var surCharge = 0;
var weekend = "weekend";

if(age < 0){
    console.log("Negative age is invalid");
}
else{
    if(age > 0 && age <= 5){
        price = 0;
    }
    else if(age > 5 && age <= 12){
        price = 300;
    }
    else if(age > 12 && age <= 59){
        price = 700;
    }
    else if(age >= 60){
        price = 400;
    }
    if(dayType === weekend && age > 5){
        surCharge = 100;
    }
    var finalPrice = price + surCharge;

    console.log("Base Ticket Price: Rs " + price);
    console.log("Weekend Surcharge: Rs " + surCharge);
    console.log("Final Ticket Price: Rs " + finalPrice);
}
