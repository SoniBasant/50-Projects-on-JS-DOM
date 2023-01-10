
// // 50. Insect Catch Game

// // Important concepts for the project

// 1. querySelectorAll()
// 2. getElementById()
// 3. addEventListener() > click 
// 4. classList > add
// 5. getAttribute()
// 6. setTimeout()
// 7. setInterval()
// 8. ternary operator
// 9. createElement()
// 10. forEach()
// 11. template literals
// 12. style.top and style.left
// 13. window.innerHeight and window.innerWidth
// 14. appendChild()
// 15. Math.floor() and Math.random()

// variables

const screens = document.querySelectorAll('.screen');

// // screens[0].classList.add('up');
// // to style all screen

const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

// variables on screen
let seconds = 0;
let score = 0;
let selected_insect = {};

// move screen upwards
start_btn.addEventListener('click', () => screens[0].classList.add('up'));

// insect selection by clicking on it
choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = { src, alt };
        screens[1].classList.add('up');

        // to display first insect after 1s of delay
        setTimeout(createInsect, 1000);

        // to start timer
        startGame();
    });
});

//  after 1s of insect selection, timer will start
function startGame() {
    setInterval(increaseTime, 1000);
}

// display timer function
function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}

// create insect at random location and add it in "game_container" class of third screen
function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;

    insect.addEventListener('click', catchInsect);

    game_container.appendChild(insect);
}

// function for random location
function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}

// as you click on the insect, it will disappear by adding "caught" class
function catchInsect() {
    // increase score after every insect disappearance
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);

    // as the clicked one will disappear, another will appear
    addInsects();
}

// to display two insect for every disappear insect
// with time delay of 1s and 1.5s
function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

// increase score; also display a message by adding "visible" class 
// to "message" after score of 20
function increaseScore() {
    score++;
    if(score > 19) {
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
}