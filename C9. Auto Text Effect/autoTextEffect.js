
// 30. Auto Text Effect

// Important concepts for the project

// 1. getElementById()
// 2. .innerText
// 3. slice()
// 4. setTimeout()
// 5. addEventListener('input')
// 6. arrow function
// 7. if
// 8. .value

// variables

const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    // to keep going animation
    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);
