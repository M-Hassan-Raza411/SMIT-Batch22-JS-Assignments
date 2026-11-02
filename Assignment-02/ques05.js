// Question 5: Login Authentication  
// Create a simple login system using fixed credentials. 
// Credentials: 
//Username: admin 

// Password: admin123 A
// sk the user to enter their username and password. 

// Conditions: 

// • Both correct: Login Successful 
// • Username incorrect: Invalid Username 
// • Username correct but password incorrect: Invalid Password

var name = "hassan";
var password = "hassan12345";

var userName = prompt("User name");
var userPassword = prompt("password");

if(userName === name && userPassword === password){
    console.log("Login Successfull! Welcome Admin");
}
else if(userName !== name && userPassword === password){
    console.log("Invalid Username");
}
else if(userName === name && userPassword !== password){
    console.log("Username correct but password is incorrect. please enter your correct password");
}
else{
     console.log("Username and password is incorrect.");
}