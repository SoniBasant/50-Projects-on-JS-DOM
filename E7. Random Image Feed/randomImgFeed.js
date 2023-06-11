
// 48. Random Image Feed

// Important concepts for the project

// 1. querySelector()
// 2. unsplash website 
// 3. for() loop
// 4. createElement()
// 5. Template literals
// 6. appendChild()
// 7. Math.random() and Math.floor()

// variables
const container = document.querySelector('.container');
const unsplashURL = 'https:\\source.unsplash.com/collection/1298463/';
// const unsplashURL = 'https:\\source.unsplash.com/random/';
const rows = 5;
// and columns will be 3
display();
function display() {
    for(let i = 0; i < rows * 3; i++) {
        const img = document.createElement('img');
        img.src = `${unsplashURL}${getRandomSize()}?food`;
        container.appendChild(img);
    }
}


// each random size will give different image
// here we are getting random size b/w 300 and 310


// random numbers b/w 200 and 300
function getRandomNum() {
    return Math.floor(Math.random() * 100) + 200;
}
// console.log(getRandomSize());

// random size
function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`;
}

// console.log(getRandomSize());
