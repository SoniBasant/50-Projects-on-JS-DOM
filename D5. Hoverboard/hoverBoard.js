
// 36. Hoverboard

// Important concepts for the project

// 1. getElementById()
// 2. style.height and stye.width
// 3. Math.floor() and Math.random()
// 4. createElement
// 5. classList.add
// 6. addEventListener() >click, mouseover, mouseout
// 7. style.background and style.boxShadow


// variables
const container = document.getElementById('container');

let size = 15;
const sizeIncreaseBtn = document.getElementById('increase');
const sizeDecreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');

// size change

// size change

function setDecSize(element) {

    size-= 1;

    if(size < 14) {
        size = 14;
    }

    element.style.height = `${size}px`;
    element.style.width = `${size}px`;


    // return size;
    console.log(size);

    sizeEl.innerText = size;
};

function setIncSize(element) {

    size+= 1;

    if(size > 16) {
        size = 16;
    }
    element.style.height = `${size}px`;
    element.style.width = `${size}px`;

    // return size;

    sizeEl.innerText = size;
};


// random colors
function randomColors() {
    // random colors
    let rColor = Math.floor(Math.random() * 256);
    let yColor = Math.floor(Math.random() * 256);
    let bColor = Math.floor(Math.random() * 256);
 
    let colors = `rgb(${rColor}, ${yColor}, ${bColor})`;

    return colors;

}

// squares

const index = 500;

for(let i = 0; i < index; i++) {
    const SQUARE = document.createElement('div');
    SQUARE.classList.add('square');

    container.appendChild(SQUARE);

    SQUARE.style.height = `${size}px`;
    SQUARE.style.width = `${size}px`;

    SQUARE.addEventListener('mouseover', () => setColor(SQUARE));

    SQUARE.addEventListener('mouseout', () => removeColor(SQUARE));

    sizeDecreaseBtn.addEventListener('click', ()=> {setDecSize(SQUARE)});    

    sizeIncreaseBtn.addEventListener('click', () => {setIncSize(SQUARE)});

}

// function to set random color
function setColor(element) {
    // console.log(element); 
    const color = randomColors();
    element.style.background = color;
    element.style.boxShadow = `0px 0px 2px ${color}, 0px 0px 10px ${color}`;
}

// function to remove random color
function removeColor(element) {
    // console.log(123);
    element.style.background = `#1d1d1d`;
    element.style.boxShadow = `0px 0px 2px #000`;
}