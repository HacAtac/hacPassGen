// Assignment code here
// My global variables
var numberVar = "0123456789";
var specialVar = "`~!@#$%^&*()-_=+;";
var upperVar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerVar = "abcdefghijklmnopqrstuvwxyz";
var usersChoices = "";

//When I click the button it needs to prompt for password critera
var passwordLength;
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

//Need to create function to put all inputs and make a password withfor loop and math.floor math.random
function generatePassword() {
    chooseLength();
    console.log(passwordLength);
    chooseUpper();
    console.log(upperWant);
    chooseNumbers();
    console.log(numbersWant);
    chooseSpecial();
    console.log(specialWant);
    
    return forLoop();
    

}

// created var upperWant for uppercase letter prompt, made function to use conditional if else to come back true/false
var upperWant;
function chooseUpper() {
  upperWant = confirm("Do you want upper case letters?");
  if (upperWant === true) {
    usersChoices = usersChoices + upperVar;
  }
  console.log(usersChoices);
  }
// created var numbersWant for the function chooseNumbers and added condition for no/NO to = false and yes/YES to = true and returns it.
var numbersWant;
function chooseNumbers(){
  numbersWant = confirm("Do you want numbers?");
  if (numbersWant === true) {
    usersChoices = usersChoices + numberVar;
  }
  console.log(usersChoices);
}

//created var/function for special characters used condition if else for true/false and returned it.
var specialWant;
function chooseSpecial() {
  specialWant = confirm("Do you want special characters?");
  if (specialWant === true) {
    usersChoices = usersChoices + specialVar;
  }
  console.log(usersChoices);
}

//when you answer each prompt then your input should be validated and at least one char type be seleceted
//when all prompts are answered thena  password is generated that matches the selected criteria
//when password is generated it should be displayed in alert or written to the page
function forLoop() {
      var pass = "";
      for ( i=0; i<passwordLength; i++) {
      //pick a random character based on master array
      var num = Math.floor(Math.random()* usersChoices.length);
      pass = pass + usersChoices.charAt(num)
      console.log (pass);
      console.log (num);
      console.log(usersChoices.charAt(num));
      }

      return pass;

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
