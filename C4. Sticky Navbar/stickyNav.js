
// 25. Sticky Navigation Bar

// Important concepts for the project

// 1. querySelector()
// 2. addEventListener('scroll')
// 3. scrollY
// 4. offsetHeight
// 5. classList.add
// 6. classList.remove


// variables

const nav = document.querySelector('.nav');

window.addEventListener('scroll', changeStyle);

function changeStyle() {
    // console.log(window.scrollY, nav.offsetHeight);
    // to check Y-axis coordinate and height of nav 

    if(window.scrollY > nav.offsetHeight + 11) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}