// Assignment code here

// Variables number and speacial characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
var AlphaCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V", "W","X", "Y", "Z"];
var lowerCharacters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var speacialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", ];
var userOptions = [];

//promtps for password criteria


var password = '';

//criteria to include in password user will choose which characters to use



function generatePassword() {
  //length of password?
  var confirmPasswordLength = prompt("Enter a password between 8 -128");
//character types to include?
  var confirmSpecialCharacters = confirm('Would you like to use specail characters?');
//would you like to us Capital letters?
var confirmCaptialLetters =  confirm('Would you like to use capital letters?');
//would you like lowercase letters?
var confirmLowerCaseLetters = confirm('Would you like lowercase letters?');
//Would you like to use numbers
var confirmNumbers = ('would you like to use numbers in your password?');

if (confirmCaptialLetters === true){
  userOptions.push(...AlphaCharacters)
}



if (confirmSpecialCharacters === true){
  userOptions.push(...speacialCharacters)
}

if (confirmLowerCaseLetters === true){
  userOptions.push(...lowerCharacters)
}

if (confirmNumbers === true){
  userOptions.push(...numbers)
}

console.log(userOptions)
return password;
}



//after answering each promt one character type should be selected
//password is generated matching selected criteria
//password will apear on the screen
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
