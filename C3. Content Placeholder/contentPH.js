
// 24. Content Placeholder

// Important concepts for the project

// 1. getElementById()
// 2. querySelectorAll()
// 3. setTimeout(function, time in ms)
// 4. innerHTML
// 5. forEach()
// 6. classList.remove()
// 7. arrow function


// variables

const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);
// by calling function after 2.5s, we will not see the content immediately


function getData() {

    // assign content at the place of placeholder
    header.innerHTML = '<img src="Images/ContentPH.jpg" alt="Header img"/>';
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, neque!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Person img">';
    name.innerHTML = 'John Doe';
    date.innerHTML = '05 Dec, 2022';

    // remove content placeholder from background and text
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
