// variables

const btn = document.getElementById('button');
const toasts = document.getElementById('toasts');

// default messages
const messages = [
    'The boy who survived',
    'The Choosen One',
    'I open at close',
    'Two Phoenix feathers',
    'shss Ssshass shasah',
    'ALWAYS',
    'Golden Trinity and Silver Trinity',
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
