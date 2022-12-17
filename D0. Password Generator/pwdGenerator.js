
// 31. Password Generator

// Important concepts for the project

// 1. String.fromCharCode() > to return a string
//   created from specified sequence of UTF-16 code units
// code> numbers-> (0 - 9) = (48 - 57)
// uppercase letters-> (A - Z) = (65 - 90)
// lowercase letters-> (a - z) = (97 - 122)

// 2. getElementById()
// 3. addEventListener('click')
// 4. alert()
// 5. .checked
// 6. .slice
// 7. Math.floor()
// 8. Math.random()


// variables

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// object of random elements
const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {

    // assign result of random password to password variable
    const password = resultEl.innerText;

    // if there is no password, we get nothing
    if(!password) {
        return;
    }

    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    // + sign to convert it into number

    // to check the status of checkboxes
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    // console.log(hasUpper, hasLower, hasNumber, hasSymbol);
    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
})

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = upper + lower + number + symbol;
    // console.log(typesCount);

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    // filter to filter out unchecked

    // if all are unchecked, return empty string
    if(typesCount === 0) {
        return '';
    }

    // 
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// console.log(getRandomNumber());
// console.log(getRandomUpper());
// console.log(getRandomLower());

// only few symbols
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomSymbol());
