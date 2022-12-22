
// 35. Image Carousel

// Important concepts for the project

// 1. querySelector()
// 2. setInterval()
// 3. element.style.transform
// 4. template literals
// 5. clearInterval()
// 6. addEventListener('click')

// variables

const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const img = document.querySelectorAll('#imgs img');
const imgs = document.querySelector('#imgs');

// console.log(img);
// it give us node list
let index = 0;
// 'let'  because it will change

let interval = setInterval(run, 2000);

function run() {
    index++;
    changeImage();
}

function changeImage() {
    // checking if images are at beginning or at end
    if(index > img.length - 1) {
        index = 0;
    } else if(index < 0) {
        index = img.length - 1;
    }

    imgs.style.transform = `translateX(${-index * 400}px)`
}
// above function will move images automatically
// after 2s interval

// now movement through buttons

// but first, we need to reset interval time otherwise
// it will affect control through buttons

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

leftBtn.addEventListener('click', () => {
    index--;
    changeImage();
    resetInterval();
});

rightBtn.addEventListener('click', () => {
    index++;
    changeImage();
    resetInterval();
});

