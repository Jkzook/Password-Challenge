// Assignment code here


var length = Number(prompt("Enter password length between 8 and 128")),
     charType = prompt ("Enter character type: numeric, special, upperCase, lowerCase)),
     password = generatePassword();
document.getElementById("display").value = password;
document.getElementById('copy-btn').addEventListener('click', copyPassword);
console.log(myArry);

Function generatePassword () {
    var charSets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz'
        upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ
        numeric: '1234567890'
        special: '!@#$%^&*()_'
    };
    var charSet = charSets[charSets.type.toLowerCase()] || charSets.lowercase;
    var retVal = "";
    for (var i = 0; i < length; i++) {
        retVal += charSet.charAt(Math.floor(Math.random() * charSet.length)); 
    }
    return retVal;
    }
    
    function generatePassword() {
        const addPassword = confirm("add password?");
        const addChars = prompt("generate password");
    }
    
    function copyPassword() {
        document.getElementById("display").select();
        document.getElementById("copy");
        alert("Password  copied to  clipboard");
    }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    alert("I've been clicked");
    StaticRange();
});
