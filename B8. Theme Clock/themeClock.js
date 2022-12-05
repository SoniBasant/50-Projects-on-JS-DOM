
// 19. Theme Clock

// Important concepts for the project

// 1. querySelector()
// 2. array 
// 3. addEventListener('click')
// 4. element.classList.contains()
// 5. element.classList.remove()
// 6. element.classList.add()
// 7. Date() to get Date, Day, Month, Hour, Minute, Second
// 8. element.style.transform
// 9. template literals
// 10. ternary operator
// 11. map a range of numbers to another range of numers 
// 12. setInterval(function, timeMS)
 

// variables

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

// arrays of days and months

const days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

// function to change mode on click event
toggle.addEventListener('click', (e) => {
    // we need e to change the text

    // make html variable, because color is going to change in whole page
    const html = document.querySelector('html');

    // condition
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
});

// for clock

function setTime() {
    const time = new Date();
    // console.log(time);
    // to check

    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    // ternary operator
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // clock hand movement
    hourEl.style.transform = `translate(-43%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    // digital clock 
    timeEl.innerHTML = `${hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    // day, month, date
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}


// function taken from stackoverflow answer
// map a range of numbers to another range of numers 
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min); 
}

setTime();
setInterval(setTime, 1000);