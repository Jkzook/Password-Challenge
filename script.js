// Assignment code here
console.log("your external JavaScript file")


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var chars = "012345678abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYS"
var passwordLength = 8;
var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
