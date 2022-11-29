
// 7. Split Landing Page

// Important concepts for the project

// 1. querySelector()
// 2. addEventListener('mouseenter')
// 3. addEventListener('mouseleave')
// 4. classList.add()
// 5. classList.remove()
// 6. media query
// 7. ::before Selector 
// 8. @import for font 
// 9. :root CSS pseudo-class

// variables
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// function for the event of mouse enter and mouse leave

// on the left side
left.addEventListener('mouseenter', function(){
    container.classList.add('hover-left')
});

left.addEventListener('mouseleave', function(){
    container.classList.remove('hover-left')
});

// on the right side
right.addEventListener('mouseenter', function(){
    container.classList.add('hover-right')
});

right.addEventListener('mouseleave', function(){
    container.classList.remove('hover-right')
});
