
// 40. 3D Background Boxes

// Important JS and CSS concepts for the project

// 1. getElementById()
// 2. for loop
// 3. createElement()
// 4. classList > add and toggle
// 5. element.style.backgroundPosition
// 6. Template literals
// 7. appendChild()
// 8. addEventListener('click')
// 9. transform, translate, transition
// 10. arrow function

// variables

const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxesContainer.appendChild(box);
            // console.log(box);
        }
    }
}

createBoxes();

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));
