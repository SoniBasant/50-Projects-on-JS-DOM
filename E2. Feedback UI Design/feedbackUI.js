
// 43. Feedback UI Design

// Important concepts for the project

// 1. Event bubbling
// 2. querySelector()
// 3. addEventListener('click')
// 4. parentNode
// 5. classList > contains(), add(), remove()
// 6. nextElementSibling
// 7. previousSibling
// 8. previousElementSibling
// 9. for loop 
// 10. template literals

// variables
const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.innerHTML;
    }

})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}