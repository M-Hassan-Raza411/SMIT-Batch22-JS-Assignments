// Question 15: Employee Salary & Bonus System  
// A company calculates employee bonuses based on years of service.

var salary = +prompt("Enter your basic salary");
var years = +prompt("Enter your years of service");

if(salary < 0 || years < 0){
    console.log("Negative salary or years are invalid");
}
else{
    if(years < 1){
       var bonus = 0;
    }
    else if(years >= 1 && years <= 3){
       var bonus = salary * 5 / 100;
    }
    else if(years > 3 && years <= 5){
       var bonus = salary * 10 / 100;
    }
    else if(years > 5){
       var bonus = salary * 15 / 100;
    }

    if(salary >= 100000){
       var tax = salary * 5 / 100;
    }
    else{
       var tax = salary * 2 / 100;
    }
    var finalSalary = salary + bonus - tax;

    console.log("Basic Salary: Rs " + salary);
    console.log("Bonus: Rs " + bonus);
    console.log("Tax: Rs " + tax);
    console.log("Final Salary: Rs " + finalSalary);
}
