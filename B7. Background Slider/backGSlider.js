
// 18. Background Slider

// Important concepts for the project

// 1. querySelectorAll()
// 2. getElementById()
// 3. addEventListener('click')
// 4. element.style.backgroundImage
// 5. forEach()
// 6. classList.remove()
// 7. classList.add()

// variables

// body to change body image
const body = document.body;
// images
const slides = document.querySelectorAll('.slide');
// buttons
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// to start counting of images from 1st element in array
let activeSlide = 0;

// event listener
// right button
rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length -1) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
})

// left button
leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
})

// call the function to set first image
setBgToBody();

// function to set body image
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// to set active style for center image
function setActiveSlide() {
    // loop through each slide
    // first to remove previously active slide
    slides.forEach((slide) => slide.classList.remove('active'));

    // then to add active for another
    slides[activeSlide].classList.add('active');
}