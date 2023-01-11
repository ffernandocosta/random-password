const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatorBtn = document.querySelector(".generator-btn");
const password1 = document.querySelector(".password-1");
const password2 = document.querySelector(".password-2");

let passwordLenght = 15;

function getRandomCharacter() {
    
    let randomCharacter = Math.floor(Math.random() * characters.length);

    return characters[randomCharacter];
}

function randomPasswordGenerator() {
    
    let randomPassword = "";

    for (let i = 0; i < passwordLenght; i++) {
        randomPassword += getRandomCharacter()
    }

    return randomPassword
}

const passwordOne = randomPasswordGenerator();
const passwordTwo = randomPasswordGenerator();


generatorBtn.addEventListener("click", () => {

    password1.textContent = randomPasswordGenerator();
    password2.textContent = randomPasswordGenerator();

})