
// 3. Rotating Navigation

// Important concepts for the project

// 1. getElementById()
// 2. querySelector()
// 3. addEventListener('click')

// variables
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// change style on event of click
open.addEventListener('click', () => container.classList.add('show-nav'))
// adding a class 
close.addEventListener('click', () => container.classList.remove('show-nav'))
// removing a class 
