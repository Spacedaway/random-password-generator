/* This is declaring variables. */
let allChars = []; 
let passwordCharacterAmount = document.querySelector("#numberId");
let generatebtn = document.querySelector(".generate-btn");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

/* This is declaring the variable allChars and pushing the string from the character code. */
for (let i = 32; i < 127; i++) {
    allChars.push(String.fromCharCode(i));
}

/**
 * It creates an empty array, then loops through the number of characters the user wants in their
 * password, and pushes a random character from the allChars array into the password array. 
 * 
 * Finally, it joins the array into a string and returns it.
 * @returns A string of random characters.
 */
function generatePassword() {
    let password = [];
    for (let i = 0; i < passwordCharacterAmount.value; i++) {
        password.push(allChars[Math.floor(Math.random() * 95)]); 
    }
    return password.join('');
}

//The function generates a random password and displays it on the button.
function firstPassword() {
    btn1.textContent = generatePassword(); 
}

//The function generates a random password and displays it on the button.
function secondPassword() {
    btn2.textContent = generatePassword(); 
}

//The function generates a random password and displays it on the button.
function thirdPassword() {
    btn3.textContent = generatePassword(); 
}

//The function generates a random password and displays it on the button.
function fourthPassword() {
    btn4.textContent = generatePassword(); 
}

/**
 * The function takes the text content of the element that was clicked on and copies it to the
 * clipboard.
 */
function copyPassword(copyText) {
    navigator.clipboard.writeText(copyText.textContent);
    alert("Copied the text: " + copyText.textContent);
}

/* Calling the functions firstPassword, secondPassword, thirdPassword, and fourthPassword when the
generate button is clicked. */
generatebtn.addEventListener('click',() => {    
    firstPassword();
    secondPassword();
    thirdPassword();
    fourthPassword();    
});

/* Calling the function copyPassword and passing the buttons as a parameter. */
btn1.addEventListener('click', function(){copyPassword(btn1)});
btn2.addEventListener('click', function(){copyPassword(btn2)});
btn3.addEventListener('click', function(){copyPassword(btn3)});
btn4.addEventListener('click', function(){copyPassword(btn4)});