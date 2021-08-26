// Assignment code here
// My global variables
var numberVar = "0123456789";
var specialVar = "`~!@#$%^&*()-_=+;";
var upperVar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerVar = "abcdefghijklmnopqrstuvwxyz";
var passwordLength = "";
//When I click the button it needs to prompt for password critera
function chooseLength() {
  passwordLength = prompt("How many characters? Choose between 8-128");
  if (passwordLength < 8) {
      alert("Please make a valid selection!");
      chooseLength();
  }else if (passwordLength > 128) {
      alert("Please make a valid selection!");
      chooseLength();
  }
  return passwordLength;
}
//When prompted for password criteria then you select which criteria to include in password
//When prompted for the length of password then you choose betwee 8 and 128
function generatePassword() {
    chooseLength();
    console.log(passwordLength);
    chooseUpper();
    console.log(upperWant);
}
//when asked for ch types to include in pass then you confirm wheter or not to include lower,upper,number,special chars
// created var upperWant for uppercase letter prompt, made function to use conditional if else to come back true/false
var upperWant;
function chooseUpper() {
  upperWant = prompt("Do you want upper case letters?");
  if (upperWant === "no" || upperWant === "NO") {
      upperWant = "false";
      return upperWant;
  }else(upperWant === "yes" || upperWant === "YES"); {
      upperWant = "true";
      return upperWant;
    }
}




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
