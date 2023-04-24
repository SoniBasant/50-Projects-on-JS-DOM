
// 6. Scroll animation

// Important JS and CSS concepts for the projects
// 1. element.getBoundingClientRect()
// to return a DOMRect object providing information about the SIZE of an
// element and its position relative to the viewport.
// use .top for position from top

// 2. window.innerHeight
// to check and change the height of window

// 3. addEventListener('scroll')
// 4. querySelectorAll
// 5. forEach()
// 6. classList.add()
// 7. classList.remove()
// 8. Pseudo class selector
// 9. position fixed for heading
// 10. transform: translateX()
// 11. transition properties for transform


// variables

const boxes = document.querySelectorAll('.quote');

window.addEventListener('scroll', checkBoxes);

checkBoxes();
// to show first and second boxes at the screen
// so, we call the function without even trigger point

// to show the box on screen, we need a trigger point,
// where our box will show up from left/right as per the even/odd

function checkBoxes(){
    // by decresing the size of the screen
    // we removed the other boxes(like 3rd box and below) from the screen
    // so we get empty screen at below, box will come to trigger at some heigth from the screen
    // and not from the bottom of the screen so that we can see it coming
    const triggerBotton = window.innerHeight /5 *4.1;
    // loop through each boxes
    boxes.forEach(box => {
        // get the top position of the current box in loop
        const boxTop = box.getBoundingClientRect().top;

        // if box's top position is less than the viewport
        // box will come to screen with "show" class
        if(boxTop < triggerBotton) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
};
