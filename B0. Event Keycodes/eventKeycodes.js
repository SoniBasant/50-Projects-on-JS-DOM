
// 11. Event Key Codes

// Important JS and CSS concepts for project

// 1. getElementById()
// 2. addEventListener('keydown')
// 3. template literals for variables
// 4. key, keycode and code for any keyboard key
// 5. @import for font from fontawesome
// 6. arrow function
// 7. Ternary operator

// ---------------------------------------------
// to check any key in the console

// window.addEventListener('keydown', (event) => {
//     console.log(event);
// });

// variables

const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `;
    // in the first "key"
    // {condition then result1 else result2}
    // condition -> event.key === ' '
    // then -> ?
    // result1 -> 'Space'
    // else -> :
    // result -> event.key

    // in second "key"
    // this is deprecated, so line through it
});
