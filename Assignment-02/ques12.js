// Question 12: Student Result System 
//  Ask the user to enter marks for five subjects: 
// • English 
// • Mathematics 
// • Science 
// • Computer 
// • Urdu 
// Each subject has a maximum of 100 marks. Requirements: 
// 1. Calculate total obtained marks. 
// 2. Calculate percentage. 
// 3. Determine grade using the grading criteria from Question 6. 
// 4. A student must score at least 40 marks in every subject to pass. 
// 5. If any subject has marks below 40, the overall result must be Fail, regardless of percentage. 
// 6. Reject marks below 0 or above 100.


var english = +prompt("Enter English Marks");
var math = +prompt("Enter Math Marks");
var science = +prompt("Enter Science Marks");
var computer = +prompt("Enter Computer Marks");
var urdu = +prompt("Enter Urdu Marks");

if(english < 0 || english > 100 || math < 0 || math > 100 || science < 0 || science > 100 || computer < 0 || computer > 100 || urdu < 0 || urdu > 100){
    console.log("Invalid Marks! Enter marks between 0 and 100.");
}else{
    var totalMarks = english + math + science + computer + urdu;
    var percentage = totalMarks * 100 / 500;
    // console.log(totalmarks);
    // console.log(percentage);
    var grade;

    if(percentage >= 80){
        grade = "A";
    }
    else if(percentage >= 70){
        grade = "B";
    }
    else if(percentage >= 60){
        grade = "C";
    }
    else if(percentage >= 50){
        grade = "D";
    }
    else{
        grade = "F";
    }
    
    console.log("Total Marks: " + totalMarks + " / 500");
    console.log("Percentage: " + percentage + "%");
    console.log("Grade: " + grade);
   
    if (english >= 40 && math >= 40 && science >= 40 && computer >= 40 && urdu >= 40){
        console.log("Result: PASS");
    }
    else{
        console.log("Result: FAIL");
    }
}