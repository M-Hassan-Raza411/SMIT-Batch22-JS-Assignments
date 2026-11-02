// Question 11: Electricity Bill Calculator  
// An electricity company charges customers based on monthly consumption.


var units = +prompt("Enter Units Consumed");

var rate = 0;
var serviceCharges = 150;

if(units <= 0){
     console.log("Invalid Input! Please enter valid units.");
}
else{

    if(units <= 100){
        rate = 10;
    }
    else if(units >= 101 && units <= 200){
        rate = 15;
    }
    else if(units >= 201 && units <= 300){
        rate = 20;
    }
    else if(units > 300){
        rate = 25;
    }

    var electricityCharges = units * rate;
    var tax = electricityCharges * 5 / 100;
    var total = electricityCharges + serviceCharges + tax;

     console.log("Electricity Charges: Rs. " + electricityCharges);
    console.log("Service Charges: Rs. " + serviceCharges);
    console.log("Tax: Rs. " + tax);
    console.log("Total Bill: Rs. " + total);
}   
