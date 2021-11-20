// Assignment code here

// Variables number and speacial characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var AlphaCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var speacialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*",];
var userOptions = [];




var password = 'hello';





function generatePassword() {
  //length of password?
  var confirmPasswordLength = prompt("Enter a number between 8-128 this will be the length of your new password");
  //character types to include?
  var confirmSpecialCharacters = confirm('Would you like to use special characters?');
  //would you like to use Capital letters?
  var confirmCapitalLetters = confirm('Would you like to use capital letters?');
  //would you like lowercase letters?
  var confirmLowerCaseLetters = confirm('Would you like lowercase letters?');
  //Would you like to use numbers
  var confirmNumbers = confirm('would you like to use numbers in your password?');
  //user must choose one
  var mustChooseOne = confirm('you must choose atleast one to generate a password');
// random generator 8-128
var random = math.floor(math.random() * 128) + 8;
  
if (confirmCapitalLetters) {
    userOptions.push(...AlphaCharacters)
  }

  if (confirmSpecialCharacters) {
    userOptions.push(...speacialCharacters)
  }

  if (confirmLowerCaseLetters) {
    userOptions.push(...lowerCharacters)
  }

  if (confirmNumbers) {
    userOptions.push(...numbers)
  }

  Math.random()

  console.log(userOptions)
  return password;
}

//password is generated matching selected criteria

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
