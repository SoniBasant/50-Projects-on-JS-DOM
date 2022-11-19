
// variables
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

// event listener on button with function to toggle active class

btn.addEventListener('click', function(){
    // toggle of active
    search.classList.toggle('active');
    // place input focus class to get cursor on input
    input.focus();
});