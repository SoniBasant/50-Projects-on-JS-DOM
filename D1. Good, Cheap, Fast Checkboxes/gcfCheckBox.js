
// 32. Good, Cheap, Fast Checkboxes

// Important JS and CSS concepts for the project

// 1. querySelector()
// 2. querySelectorAll()
// 3. forEach()
// 4. if, logical operator
// 5. arrow function
// 6. target
// 7. addEventListener('change')
// 8. @keyframes
// 9. :root


// variables

const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

// for every 'change' event occurs, that fire off a function
// called moveIt

toggles.forEach(action => action.addEventListener('change', (e) => moveIt(e.target)));

function moveIt(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        
        if(good === theClickedOne) {
            fast.checked = false;
        }

        if(cheap === theClickedOne) {
            good.checked = false;
        }

        if(fast === theClickedOne) {
            cheap.checked = false;
        }
    }
}
