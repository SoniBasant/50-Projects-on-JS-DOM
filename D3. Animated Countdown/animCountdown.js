
// 34. Animated Countdown

// Important concepts for the project

// 1. querySelectorAll()
// 2. classList > add, remove, value
// 3. forEach()
// 4. addEventListener('animationend')
// 5. nextElementSibling
// 6. if...else


// variables

const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');

    nums.forEach((item) => {
        item.classList.value = '';
    })

    nums[0].classList.add('in');

}

function runAnimation() {
    // as querySelectorAll() returns a node list
    // of all the nodes extracted from a document
    // of that class, we use forEach() loop
    // to loop through them

    nums.forEach((item, index) => {
        // console.log(item, index);
        const nextToLast = nums.length - 1;

        item.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && index !== nextToLast) {
                item.classList.remove('in');
                item.classList.add('out');
            } else if (e.animationName === 'goOut' && item.nextElementSibling) {
                item.nextElementSibling.classList.add('in');
            } else {
                counter.classList.add('hide');
                finalMessage.classList.add('show');
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
})