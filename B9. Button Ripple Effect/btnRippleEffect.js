
// 20. Button Ripple Effect

// Important concepts for the project

// 1. querySelectorAll()
// 2. forEach()
// 3. addEventListener('click')
// 4. clientX and clientY
// 5. .offsetLeft and .offsetTop
// 6. document.createElement()
// 7. .classList.add() and .classList.remove()
// 8. setTimeout()
// 9. appendChild()


// variables

const button = document.querySelectorAll('.ripple');

button.forEach(button => {
    button.addEventListener('click', function(e) {

        // get x and y axis of an click event
        const x = e.clientX;
        const y = e.clientY;

        // get the top and left positions of element (in px)
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // get the position of x and y inside button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        
        // add circle
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        // add span into circle
        this.appendChild(circle);

        // remove previously added circle
        setTimeout(() => circle.remove(), 500);
    });
});