// Question 11 - Student Name Search
var students = ["ali", "ahmed", "sara", "hamza", "ayesha"];
var inputName = prompt("Enter Name:");
var isFound = false;
for (var i = 0; i < students.length; i++) {
  if (students[i] === inputName) {
    isFound = true;
    break;
  }
}
if (isFound === true) {
  console.log("Student Found!");
} else {
  console.log("Student Not Found!");
}
