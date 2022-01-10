// Assignment Code

// target button with id of generate
var generateBtn = document.querySelector("#generate");

// possible output generations
function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols = "!@#$%^&*()_+{}|[]:;'/?,.<>";
  var numbers = "1234567890";
  // passwordConditions will store selected password criteria value strings
  var passwordConditions = "";
  var password = "";

  var passwordLength = prompt(
    `How many characters would you like your password to be? 8 to 128 characters`
  );

  // if passwordLength is not a number, is less than 8 characters or greater than 128, application will not proceed and prompts user again
  if (passwordLength === null) {
    alert("Cancelled");
    // return blank string instead of 'undefined'
    return "";
  } else if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("Please enter a valid number between 8 and 128");
    return;
  } else {
    var symbolsConfirm = confirm("Click OK to include special characters");
    var numbersConfirm = confirm("Click OK to include numbers");
    var lowerCaseConfirm = confirm("Click OK to include lowercase letters");
    var upperCaseConfirm = confirm("Click OK to include uppercase letters");
  }

  // if conditions are confirmed add to passwordConditions empty var

  if (symbolsConfirm) {
    passwordConditions += symbols;
  }
  if (numbersConfirm) {
    passwordConditions += numbers;
  }
  if (lowerCaseConfirm) {
    passwordConditions += lowerCase;
  }
  if (upperCaseConfirm) {
    passwordConditions += upperCase;
  } else if (passwordConditions === "") {
    alert("Please choose at least one category");
    return "";
  }
  // loop through passwordConditions using user entered passwordLength
  for (let i = 0; i < passwordLength; i++) {
    password +=
      passwordConditions[Math.floor(Math.random() * passwordConditions.length)];
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
