// Assignment code here

// Variables number and speacial characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
var AlphaCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V", "W","X", "Y", "Z"];
var lowerCharacters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var speacialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", ];

//promtps for password criteria
var confirmPasswordLength;
var confirmPasswordLength = "";
var confirmSpecialcharacters;

//criteria to include in password user will choose which characters to use


//length of password
//character types to include
//after answering each promt one character type should be selected
//password is generated matching selected criteria
//password will apear on the screen
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword("how long do you want the password to be?");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  window.prompt("you are about to create a new password");
