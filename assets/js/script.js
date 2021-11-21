// Assignment code here
//define variables
var generateBtn = document.querySelector("#generate");
var passLength;
var lowercasePass = "abcdefghijklmnopqrstuvwxyz";
var uppercasePass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericPass = "0123456789";
var specialPass = "!@#$%^&*()_+=-";

//password generator function
function generatePassword (){
  var charChoosen = [];
  var randomPass = "";

  //choose length of password
  passLength = prompt("Choose the number of characters in your password (>=8 & <128 characters)");
  if (passLength < 8 || passLength > 128) {
    alert ("Your password must be 8 to 128 characters long.");
  }
  //other password criteria
  else {
    //lowercase letters? 
    if(confirm("Will your password contain lowercase letters?")) {
      charChoosen = charChoosen.concat(lowercasePass);
    }
    //uppercase letters?
    if(confirm("Will your password contain uppercase letter?")) {
      charChoosen = charChoosen.concat(uppercasePass);
    }
    //numbers?
    if(confirm("Will your password contain numbers?")) {
      charChoosen = charChoosen.concat(numericPass);
    }
    //special characters?
    if(confirm("Will your password contain special characters?")) {
      charChoosen = charChoosen.concat(specialPass);
    }
    //validate at least one character type is selected
    if (lowercasePass || uppercasePass || numericPass || specialPass) {
      alert("congrats");
    } else { 
      alert("You much choose at least one character type for your password")}
  }
}


// Write password to the #password input
function writePassword() {
  var passwordChoosen  = "";
  passwordChoosen = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordChoosen;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
