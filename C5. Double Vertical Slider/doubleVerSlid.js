
// 26. Double Vertical Slider

// Important concept for the project

// 1. querySelector()
// 2. querySelectorAll()
// 3. element.style.top
// 4. addEventListener('click')
// 5. element.style.transform
// 6. template literals
// 7. element.clientHeight


// variables

const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

// console.log(slidesLength);
// to check the length of image slide

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    // console.log(sliderHeight);
    // to return the visible height of element

    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        } 
    } else if (direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }
    
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}



