// // ```Question 10:
// // ===   Marks Percentage Calculator  ===

var engMark = +prompt("Enter Your English Marks")
var mathMark = +prompt("Enter Your Math Marks")
var sciMark = +prompt("Enter Your Science Marks")
var compMark = +prompt("Enter Your Computer Marks")
var urdMark = +prompt("Enter Your Urdu Marks")

var totalObt = engMark + mathMark + sciMark + compMark + urdMark
var totalMarks = 500
var percentage = totalObt / totalMarks * 100

console.log(`Obtained Marks: ${totalObt}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Percentage: ${percentage}%`);
