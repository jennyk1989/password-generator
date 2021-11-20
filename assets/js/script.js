// Assignment code here

//button click to password prompts

//prompts for password criteria

//select criteria for password

//choose length of password (at least 8 characters & < 128 characters)
function passLength(){
  if (passLength < 8){
    alert("Password too short")
    
  } else if (passLength > 128) {
    alert("Password too long")

  } else {
    alert ("follow next steps")
  }
  passLength ();
}
//character types (include lowercase, uppercase, etc.?)

//validate user input & at least 1 character type selected

//password generates

//password displayed in an alert or written to page

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
