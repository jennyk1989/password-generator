// Assignment code here
//define variables
var generateBtn = document.querySelector("#generate");
var passLength;
var lowercasePass = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercasePass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericPass = "0123456789".split("");
var specialPass = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

//password generator function
function generatePassword (){
  var charChoosen = [];
  var randomPass = "";

  //choose length of password
  passLength = prompt("Choose the number of characters in your password.");
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert ("Your password must be 8 to 128 characters long.");
  }
  //other password criteria
  
  
    //lowercase letters? 
    if(confirm("Will your password contain lowercase letters?")) {
      charChoosen = charChoosen.concat(lowercasePass);
    }
    //uppercase letters?
    if(confirm("Will your password contain uppercase letters?")) {
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
    if (charChoosen.length === 0) {
      alert("You much choose at least one character type for your password.");
      return generatePassword();
    }

    //for loop that generates password based on selected criteria
    for(var i = 0; i < passLength; i++) {
      var password = Math.floor(Math.random() * charChoosen.length);
      randomPass += charChoosen[password];
    }
  
  return randomPass;
}


// Write password to the #password input
function writePassword() {
  var password  =  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
