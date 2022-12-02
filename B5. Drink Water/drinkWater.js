
// 16. Drink Water

// Important JS and CSS concepts for the project

// 1. querySelectorAll()
// 2. getElementById()
// 3. forEach()
// 4. addEventListener('click')
// 5. if-else loop
// 6. classList.add()
// 7. classList.remove()
// 8. .length
// 9. template literals
// 10. element.style.visibility -> hidden and visible


// variables

const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// we need to update the big cup 2 times
// 1st at upload and 2nd after clicking on the small cup

// 1st update
updateBigCup();

// small cups
// loop through each cup
smallCups.forEach((cup, idx) => {
    // to check if it is looping through each or not
    // console.log(idx);

    // add click event on each cup with a function
    cup.addEventListener('click', () => highlightCups(idx))
});

// the function for event

function highlightCups(idx) {

    // a condition for last filled cup
    // to achieve toggle on the last fill cup
    // if its next cup is NOT filled then this function will
    // decrease the index, for the next loop
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }

    // take the index of clicked cup (idx2) and compare it with the index of the cup in this loop(idx)
    // 
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    // 2nd update
    updateBigCup();
}

// function for big cup
function updateBigCup() {
    // to get the length of the selected small cups
    const fullCups = document.querySelectorAll('.cup-small.full').length;

    // to check
    // console.log(fullCups);


    // to get the total number of cups i.e. 8 here
    const totalCups = smallCups.length;

    // to check
    // console.log(totalCups);


    // change the backG color as much it is filled
    if(fullCups === 0) {
        // percentage hidden with 0 height when length of selected cups is 0
        percentage.style.visibility = 'hidden';
        // percentage.style.height = 0;
    } else {
        // percentage visible with its height is calculated wrt selected cups
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        // percentage will display as calculated wrt selected cups
        percentage.innerText = `${fullCups / totalCups *100}%`;
    }


    // hide 'Remained' water variable when completely filled
    // and make it visible otherwise
    
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups /1000)}L`;
    }

}