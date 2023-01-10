
// 15. Incrementing Counter

// Important concepts for the project

// 1. querySelectorAll()
// 2. forEach()
// 3. .innerText
// 4. .getAttribute()
// 5. template literal
// 6. Math.ceil()
// 7. setTimeout()
// 8. arrow function
// 9. if...else
// 10. media query

// variables

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    // place the value for each icon as 0 through innerText
    counter.innerText = '0';

    // arrow function to get attributes of data-target for each counter
    const updateCounter = () => {
        // after checking with console.log, I found that data is string type.
        // so change it to number with + method
        const targetNum = +counter.getAttribute('data-target');
        // now 12000, 5000 and 7500 are numbers
        // console.log(typeof target, target);
        // to check the data type and value of target

        // to increment the number progressively, not just suddenly
        // first make innerText a variable
        const calculation = +counter.innerText;

        // the number you want to add for each iteration
        // higher the divisor, lesser the increment number
        const increNum = targetNum / 200;

        // condition for calculation

        if(calculation < targetNum) {
            // make innerText a template literal
            counter.innerText = `${Math.ceil(calculation + increNum)}`;
            // to call the function after every fixed time interval
            // 1000 = 1sec(1000ms)
            setTimeout(updateCounter, 10);
            // so after every 10ms, function will be called 
            // and increNum added into the calculation i.e. counter
            // initially 0 for all three
        } else {
            // if calculation get higher than target number,
            // then target will be the final innerText for counter
            counter.innerText = targetNum;
        }
    }

    updateCounter();
    // call the function
});
