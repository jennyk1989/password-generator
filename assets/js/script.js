// Assignment code here
//define variables
var generateBtn = document.querySelector("#generate");
var passLength;

//button click to password prompts

//prompts for password criteria

//select criteria for password

//choose length of password (at least 8 characters & < 128 characters)
function chooseLength(){
  passLength = prompt ("Choose the number of characters in your password (>=8 & <128 characters)");
  if (passLength < 8){
    alert("Password too short")
    
  } else if (passLength > 128) {
    alert("Password too long")

  } else if (passLength = "") {
    alert ("Password must be at least 8 characters and no more than 128 characters in length")
  
  } else {
    alert ("follow next steps")
  }
  return passLength;
}
//character types (include lowercase, uppercase, etc.?)

//validate user input & at least 1 character type selected

//generate password
function generatePassword(){
  chooseLength();
  console.log(passLength);
}

//password displayed in an alert or written to page



// Write password to the #password input
function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
