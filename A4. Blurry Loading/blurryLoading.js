
// 5. Blurry Loading

// important concept for this project

// 1. setInterval()
// 2. clearInterval()
// 3. template literals
// 4. map a range of numbers to another range of numers 
// 5. querySelector()
// 6. style.opacity
// 7. style.filter > blur filter

// variables
const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.backG');


let load = 0;

let int = setInterval(blurring, 30);
// setInterval(function, time in millisecond) 
// 'setInterval' calls a function at specified intervals
// 1 second = 1000 milliseconds
// it will continues calling the function until
// 'clearInterval()' is called, or window is closed

function blurring() {
    load++;

    if(load>99) {
        clearInterval(int);
    }
    // Automatic replacing of variables with real values 
    // is called 'string interpolation'. 
    // It uses 'template literals' which use back-ticks (``)
    // BEWARE: It is NOT single quotation.
    loadText.innerText = `${load}%`;
    // above line will change the 0% to 100%

    // now to make it fade at it reaches to 100%
    // map a range of numbers to another range of numers
    // we are using a function and putting it in a variable scale

    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // changing opacity from 1 to 0

    // now change the background blur with the same function
    background.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
    // changing blur from 30 to 0
    // filter=blur(0px)

}

// function taken from stackoverflow answer
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min); 
}
