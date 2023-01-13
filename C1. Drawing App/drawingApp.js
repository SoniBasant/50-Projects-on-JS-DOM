 
// 22. Drawing App

// Important concepts for the project

// 1. getElementById()
// 2. canvas 
//    beginPath, fill, stroke, moveTo, lineTo, arc, lineWidth, strokeStyle, clearRect
// 3. addEventListener()
//    mousedown, mouseup, mousemove, change, click
// 4. offsetX and offsetY
// 5. innerHTML
// 6. if..else 
// 7. :last-child selector
// 8. arrow function
// 9. canvas.width and canvas.height


// variables

const canvas = document.getElementById('canvas');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let color = 'black';
let x;
let y;
isPressed = false;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
    // console.log(isPressed, x, y);
    // to check
});

document.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
    // console.log(isPressed, x, y);
    // to check
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    // multiply by 2 to make the line width same as circle diameter
    ctx.stroke();
}

// update
function updateSizeOnScreen() {
    sizeEl.innerHTML = size;
}
// color change
colorEl.addEventListener('change', (e) => color = e.target.value);

// inc pen size
increaseBtn.addEventListener('click', () => {
    size += 5;

    if(size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

// dec pen size 
decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if(size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

// clear element

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
