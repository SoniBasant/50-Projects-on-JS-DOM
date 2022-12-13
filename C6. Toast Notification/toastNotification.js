
// 27. Toast Notification

// Important concepts for the project

// 1. getElementById()
// 2. arrays
// 3. addEventListener('click')
// 4. createElement
// 5. classList.add
// 6. appendChild
// 7. innerText
// 8. setTimeout()
// 9. Math.floor()
// 10. Math.random()

// PROGRAM 1

// // RANDOM MESSAGES

// // variables

// const btn = document.getElementById('button');
// const toasts = document.getElementById('toasts');

// // default messages
// const messages = [
//     'Message One',
//     'Message Two',
//     'Message Three',
//     'Message Four',
//     'Message Five',
//     'Message Six',
// ]

// btn.addEventListener('click', () => createNotification());

// function createNotification() {

//     const notif = document.createElement('div');
//     notif.classList.add('toast');
//     toasts.appendChild(notif);
//     notif.innerText = getRandomMessage();

//     // we can not place this remove function outside
//     // createNoti funtion because 'notif' is local
//     setTimeout(() => {
//         notif.remove()
//     }, 3000);
// }

// function getRandomMessage() {
//     return messages[Math.floor(Math.random() * messages.length)];
// }


// --------------------------------------------------------------------

// PROGRAM 2

// // FIXED MESSAGE

// // variables

// const btn = document.getElementById('button');
// const toasts = document.getElementById('toasts');

// // default messages
// const messages = [
//     'Message One',
//     'Message Two',
//     'Message Three',
//     'Message Four',
//     'Message Five',
//     'Message Six',
// ]

// btn.addEventListener('click', () => createNotification('This is invalid data', 'success'));

// function createNotification(message = null, type = null) {

//     const notif = document.createElement('div');
//     notif.classList.add('toast');
//     notif.classList.add(type ? type : 'info');
    
//     toasts.appendChild(notif);
//     notif.innerText = message ? message : getRandomMessage();

//     // we can not place this remove function outside
//     // createNoti funtion because 'notif' is local
//     setTimeout(() => {
//         notif.remove()
//     }, 3000);
// }

// function getRandomMessage() {
//     return messages[Math.floor(Math.random() * messages.length)];
// }


// --------------------------------------------------------------------

// PROGRAM 3

// RANDOM MESSAGE AND RANDOM COLOUR

// variables

const btn = document.getElementById('button');
const toasts = document.getElementById('toasts');

// default messages
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
    'Message Six',
]

const types = ['info', 'success', 'error']

btn.addEventListener('click', () => createNotification());
// for random color

function createNotification(message = null, type = null) {

    const notif = document.createElement('div');
    notif.classList.add('toast');
    
    // for random colors
    notif.classList.add(type ? type : getRandomType());

    toasts.appendChild(notif);
    notif.innerText = message ? message : getRandomMessage();

    // we can not place this remove function outside
    // createNoti funtion because 'notif' is local
    setTimeout(() => {
        notif.remove()
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}


// function for random colors
function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}
