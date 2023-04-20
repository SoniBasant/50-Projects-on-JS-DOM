
// variables

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
/*querySelectorAll will bring all circles as a node list
which is similar to an array*/

let currentActive = 1;
/*going to represent which one is active*/

//event listeners for next

next.addEventListener('click', () => { //run a function after click
    currentActive++ //increment it
    //but need to limit it upto 4
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    /*In this way when you reach the last circle, currentActive
    remain at 4. You can check it in the console of live
    server by adding this command here-> console.log(currentActive)*/

    update(); //to update DOM
})

//event listeners for prev

prev.addEventListener('click', () => { //run a function after click
    currentActive--;
    //decrese it
    //but need to limit it to positive value
    if(currentActive < 1) {
        currentActive = 1;
    }
    
    /*In this way when you reach the first circle, currentActive
    remain at 1. You can check it in the console of live
    server by adding this command here-> console.log(currentActive)*/

    update();
    //to update DOM
})

//"update" function
function update() {
    circles.forEach((circle, idx)=> { 
        /*take circles, which is a node list and
        loop through it with forEach with an arrow function*/
        //check the index of that circle with currentActive
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    //but doing this only will not get us on previous circle, so

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1)/ (circles.length - 1))*100 +'%';
    /*as circle and active are 4 in numbers, we need to convert it
    into 3 equal parts by minus 1(-1) and multiply it by 100
    with % sign concatenated to make width in percentage*/

    //still we are not able to return using previous button, SO

    if(currentActive === 1) {
        prev.disabled = true; //disable prev on first circle
    } else if(currentActive ===circles.length) {
        next.disabled = true; //disable next on last circle
    } else {
        prev.disabled = false; //active prev on other circle
        next.disabled = false; //active next on other circle
    }
}

