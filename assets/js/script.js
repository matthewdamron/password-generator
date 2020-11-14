// Assignment code here

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// inital setup for strings to include into password generator
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";

var generatePassword = function() {
  // ask how long your password will be
  var passwordLength = (window.prompt("How many characters do you want in your password? Password length should be at least 8 but no more then 128 long."));
  // Check if prompt is null
  if (passwordLength !== null) {
    debugger;
    // check the length of the password 8 - 128
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password length needs to be between 8 and 128 characters long. Please try again.");
      generatePassword();
    }
  }
  else{
    passwordText = "User clicked cancel! If you would like to try again click the Generate Password Button!";
  }
    
  return passwordText;
    
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
