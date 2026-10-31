// // ```Question 12:
// // ===   Salary Calculator   ===

var basicSalary = +prompt("Enter Your Basic Salary")
var houseAllowance = basicSalary / 5
var medicalAllowance = basicSalary / 10
var grossSal = basicSalary + houseAllowance + medicalAllowance
var taxDeduction = basicSalary / 20
var netSal = basicSalary + houseAllowance + medicalAllowance - taxDeduction

console.log(basicSalary);
console.log(`House Allowance: Rs. ${houseAllowance}`);
console.log(`Medical Allowance: Rs. ${medicalAllowance}`);
console.log(`Gross Salary: Rs. ${grossSal}`);
console.log(`Tax Deduction: Rs. ${taxDeduction}`);
console.log(`Net Salary: Rs. ${netSal}`);
