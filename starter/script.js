// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passLength = "10";    // This variable is storing the user input choice for the password length between 10 and 64. 
let spCharacters ;        // This variable is storing the user input  choice as true or false for the special characters.  
let loCharacters ;        // This variable is storing the user input  choice as true or false for the lowerCase characters. 
let upCharacters ;        // This variable is storing the user input  choice as true or false for the upperCase  characters. 
let numCharacters ;       // This variable is storing the user input  choice as true or false for the numerical  characters. 

// Below is the Function to prompt user the password options
function getPasswordOptions() {
  const regex = /^(1[0-9]|[2-5][0-9]|6[0-4])$/; ///This regular expression is matching all the numbers between 10 an 64 included, credit to 3widgets.com (I have used their regex numeric generator)
        passLength = prompt("Please choose a number between 10 and 64");
        while (passLength !== NaN && regex.test(passLength) !== true) {   
          if (passLength === null) {  //This 'if' statement makes sure that if you press cancel then breaks the loop 
            break;
          }
          passLength = prompt("Oopps! Wrong input, Please choose a number between 10 and 64");
        }
        console.log(passLength);
        if (passLength !== null){    // If the user will press cancel instead of choosing a number then the function of choosing password options will not execute
            spCharacters = confirm("If you want to include special characters press 'OK' if not, press Cancel");
            upCharacters = confirm("If you want to include upperCase characters press 'OK' if not, press 'Cancel'");
            numCharacters = confirm("If you want to include numerical characters press 'OK' if not, press 'Cancel'");
            loCharacters = confirm("If you want to include lowerCase characters press 'OK' if not, press 'Cancel'");
        }
};

function generatePassword(length, numCh, uppCh, specialCh, lowerCh) {
   let charactersArray= []; 
   if (loCharacters){
    charactersArray=charactersArray.concat(lowerCh);
  }  
  if (numCharacters){
    charactersArray=charactersArray.concat(numCh);
  }
  if (spCharacters){
    charactersArray=charactersArray.concat(specialCh);
  } 
  if (upCharacters){
    charactersArray=charactersArray.concat(uppCh);
  }

  let passCharacters=[];
  for (let i=0 ; i < length; i++){ 
    let character = charactersArray[Math.floor(Math.random() * charactersArray.length )];
    passCharacters.push(character);
  }
  return passCharacters;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
