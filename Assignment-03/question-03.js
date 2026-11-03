// Question 03 - Even and Odd Number Generator
var evenNumbers = "Even: ";
var oddNumbers = "Odd: ";
for (var i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenNumbers = evenNumbers + i + " ";
  } else {
    oddNumbers = oddNumbers + i + " ";
  }
}
console.log(evenNumbers);
console.log(oddNumbers);
