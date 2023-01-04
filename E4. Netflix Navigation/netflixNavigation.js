
// 45. Netflix Navigation

// Important concepts for the project

// 1. querySelectorAll() > give us node FileList, can be loop through
// 2. addEventListener('click')
// 3. forEach()
// 4. classList > add and remove

// variables

const open_btn  = document.querySelector('.open-btn');
const close_btn  = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
})