

// 29. Double Click Heart

// Important concepts for the project

// 1. querySelector()
// 2. addEventListener('click')
// 3. Date().getTime()
// 4. createElement
// 5. classList
// 6. offsetLeft, offsetTop
// 7. clientX, clientY
// 8. template literals
// 9. appendChild
// 10. setTimeout
// 11. element.remove
// 12. random colours for hearts

// variables

const image = document.querySelector('.loveMe');
const times = document.querySelector('#times');

// our own double click
let clickTime = 0;
let timesClicked = 0;

image.addEventListener('click', function(e) {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        // 800 can be reduced / increased
        if((new Date(). getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart = (e) => {
    // add heart
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // random colors
    let rColor = Math.floor(Math.random() * 256);
    let yColor = Math.floor(Math.random() * 256);
    let bColor = Math.floor(Math.random() * 256);

    let heartColor = "rgb(" + rColor + "," + yColor + "," + bColor + ")";

    // add random style to heart
    heart.style.color = heartColor;

    // get x and y axis of an click event inside image
    const x = e.clientX;
    const y = e.clientY;

    // get the top and left positions of element (in px)
    const imageTop = e.target.offsetTop;
    const imageLeft = e.target.offsetLeft;

    // get the position of x and y inside image
    const xInside = x - imageLeft;
    const yInside = y - imageTop;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    // add icon into div
    image.appendChild(heart);

    times.innerHTML = ++timesClicked;

    // remove previously added heart
    setTimeout(() => heart.remove(), 1000);

}