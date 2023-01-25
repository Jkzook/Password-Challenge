// Assignment code here
console.log("your external JavaScript file")

function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

var password=document.getElementById("password");
// Get references to the #generate element
function
var generateBtn = document.querySelector("#generate");
var chars = "012345678abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYS"
var passwordLength = 8;
var password = "";
for (var i =0; i<= passwordLength; i++) {var randomNumber = Math.floor(Math.random() * chars.length);
password =+ chars.substring(randomNumber, randomnumber +1);}
document.getElementById("password".value) = password;

// Write password to the #password input
function genPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
