
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

// // const unsplashURL = 'https://source.unsplash.com/collection/1298463/';
// const unsplashURL = 'https://source.unsplash.com/random/';
// const rows = 5;
// // and columns will be 3
// display();
// function display() {
//     for(let i = 0; i < rows * 3; i++) {
//         const img = document.createElement('img');
//         // img.src = `${unsplashURL}${getRandomSize()}`;
//         img.src = `${unsplashURL}${getRandomSize()}?shiv`;
//         container.appendChild(img);
//     }
// }


// // each random size will give different image
// // here we are getting random size b/w 300 and 310


// // random numbers b/w 200 and 300
// function getRandomNum() {
//     return Math.floor(Math.random() * 100) + 200;
// }

// // random size
// function getRandomSize() {
//     return `${getRandomNum()}x${getRandomNum()}`;
// }

const unsplashURL = [
    'https://source.unsplash.com/random/200x220/?food',
    'https://source.unsplash.com/random/210x220/?mute,and,pastel',
    'https://source.unsplash.com/random/200x220/?baby',
    'https://source.unsplash.com/random/210x220/?baby',
    'https://source.unsplash.com/random/200x220/?spring',
    'https://source.unsplash.com/random/210x220/?spring',
    'https://source.unsplash.com/random/200x220/?girl',
    'https://source.unsplash.com/random/210x220/?girl',
    'https://source.unsplash.com/random/200x220/?summer',
    'https://source.unsplash.com/random/210x220/?blue',
    'https://source.unsplash.com/random/200x220/?car',
    'https://source.unsplash.com/random/210x220/?eco',
    'https://source.unsplash.com/random/200x220/?space',
    'https://source.unsplash.com/random/210x220/?life,in,the,deep',
    'https://source.unsplash.com/random/200x220/?luxury',
    'https://source.unsplash.com/random/210x220/?ice,creme',
    'https://source.unsplash.com/random/210x220/?snow',
    'https://source.unsplash.com/random/210x220/?landscape',
];
shuffleImg = unsplashURL.sort(() => Math.random() - 0.5);
const rows = 6;
const columns = 3;
for(let i = 0; i < rows*columns; i++) {
    const img = document.createElement('img');
    
    img.src = shuffleImg[i]
    container.appendChild(img);
}
