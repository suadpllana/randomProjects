const generatedPassword = document.getElementById("generatedPassword");


function generatePassword(passwordLength, lowerCase,upperCase,numbers,
    symbols
){
let lowerCaseChars = "abcdefghijklmnopkrstuvwxyz";
let upperCaseChars = "ABCDEFGHIJKLMNOPKRSTUVWXYZ";
let numbersChars = "0123456789";
let symbolsChars = "/.$%^&*()_+!=";


let password = "";
let allowedChars = "";




allowedChars += lowerCase ? lowerCaseChars : "";
allowedChars += upperCase ? upperCaseChars : "";
allowedChars += numbers ? numbersChars : "";
allowedChars += symbols ? symbolsChars : "";


for(let i = 0; i < passwordLength; i++){
    let index = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[index];
   
}
return password;

}

function displayPassword() {
    let lowerCase = true;
    let upperCase = true;
    let numbers = true;
    let symbols = true;
    let passwordLength = 8;

     password = generatePassword(passwordLength, lowerCase, upperCase, numbers, symbols);
    generatedPassword.textContent = `Generated Password: ${password}`;
}

