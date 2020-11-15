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

// Global setup for the passward variables
var criteriaTotal = 0;
var passwordArray = [];
var passwordText = "";
var passwordLength;
var character = "";
var possibilities = "";

// function to add at lease 1 criteria char to passwardArray and add to the possibilities for passwordOverflow
var addCriteriaChar = function(criteriaOption) {
  // add one to the criteriaTotal
  criteriaTotal++;
  // add criteriaOption to possibilities
  possibilities = possibilities.concat(criteriaOption);
  // random char from the list of criteriaOptoin
  character = criteriaOption.charAt(Math.floor(Math.random() * criteriaOption.length));
  // push char to passwordArray
  passwordArray.push(character);
}

// function to add the rest of the char to passwordArray minus the single char
var addOverflowChar = function() {
  // get the number of char left after adding criteriaOption char
  var passwordOverflow = passwordLength - criteriaTotal;
  // for loop to random pick char from the possibilities
  for (var i = 0; i < passwordOverflow; i++) {
    character = possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    // push char to passwordArray
    passwordArray.push(character);
  }
  debugger;
  // randomize the passwordArray
  passwordArray.sort(() => Math.random() - 0.5);
  // convert passwordArray into a string
  passwordText = passwordArray.join("");
}

var generatePassword = function() {
  // empty the password variables
  criteriaTotal = 0;
  passwordArray = [];
  passwordText = "";
  possibilities = "";

  // debugger;

  // ask how long your password will be
  passwordLength = (window.prompt("How many characters do you want in your password? Password length should be at least 8 but no more then 128."));
  // Check if prompt is not null or clicked cancel
  if (passwordLength !== null) {
    // convert passwordLength into a integer
    passwordLength = parseInt(passwordLength);
    // check the length of the password 8 - 128 or Not a Number (NaN)
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password length needs to be between 8 and 128 characters long. Please try again.");
      generatePassword();
    }
    // ask if they would like lowercase char
    var confirmLower = window.confirm("Would you like your password to include 'Lowercase' characters?");
    // if lowercase true
    if (confirmLower) {
      // function for criteriaOption
      addCriteriaChar(lowercase);
    }

    // ask if they would like uppercase char
    var confirmUpper = window.confirm("Would you like your password to include 'Uppercase' characters?");
    // if uppercase true
    if (confirmUpper) {
      // function for criteriaOption
      addCriteriaChar(uppercase);
    }

    // ask if they would like numeric char
    var confirmNumeric = window.confirm("Would you like your password to include 'Numeric' characters?");
    // if numeric true
    if (confirmNumeric) {
      // function for criteriaOption
      addCriteriaChar(numeric);
    }

    // ask if they would like special char
    var confirmSpecial = window.confirm("Would you like your password to include 'Special' characters?");
    // if special true
    if (confirmSpecial) {
      // function for criteriaOption
      addCriteriaChar(special);
    }

    // if user picks no criteriaOption run program again
    if (criteriaTotal === 0) {
      window.alert("You much pick at least 1 criteria option, please try again.");
      generatePassword();
    }
  }
  // if user clicked cancel ending generatePassword() function
  else {
    passwordText = "User clicked cancel! If you would like to try again click the Generate Password Button!";
    return passwordText;
  }

  // add rest of char to my passwordArray converts into a string then shuffle
  addOverflowChar();

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
