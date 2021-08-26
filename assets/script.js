// Assignment code here
//When I click the button it needs to prompt for password critera
//When prompted for password criteria then you select which criteria to include in password
//When prompted for the length of password then you choose betwee 8 and 128
//when asked for ch types to include in pass then you confirm wheter or not to include lower,upper,number,special chars
//when you answer each prompt then your input should be validated and at least one char type be seleceted
//when all prompts are answered thena  password is generated that matches the selected criteria
//when password is generated it should be displayed in alert or written to the page

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
