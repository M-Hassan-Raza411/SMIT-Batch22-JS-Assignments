// Question 12 - Find a Number
var numbers = [10, 25, 40, 55, 70, 85, 100];
var numberToFind = +prompt("Enter Number:");
var Found = false;
var foundIndex = -1;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === numberToFind) {
    numberFound = true;
    foundIndex = i;
    break;
  }
}
if (numberFound === true) {
  console.log("Number found at index " + foundIndex + ".");
} else {
  console.log("Number not found.");
}
