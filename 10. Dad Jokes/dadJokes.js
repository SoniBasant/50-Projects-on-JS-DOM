
// 10. Dad Jokes

// Important concepts for the project

// 1. getElementById()
// 2. addEventListener('click')
// 3. async -> utility module which provides functions for working with asynchronous JS
// 4. headers 
// 5. Accept 
// 6. await
// 7. fetch

// use async with await

// variables

const jokes = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

// call the function, so we have our first joke
// without a click
generateJoke();

// using ASYNC/AWAIT
async function generateJoke() {

    const config = {
        headers: {
            // key:value for headers
            Accept: 'application/json',
        },
    };


    const res = await fetch('https://icanhazdadjoke.com', config);
    // response 
    
    const data = await res.json();
    jokes.innerHTML = data.joke;

    // another method
    // using .then()

    // // variables for headers
    // // without headers; we get HTML text instead of jokes
    // const config = {
    //     headers: {
    //         // key:value for headers
    //         Accept: 'application/json',
    //     },
    // };

    // fetch('https://icanhazdadjoke.com', config)
    // // response 
    // .then((res) => res.json())
    // .then((data) => {
    //     // to show the joke and not codes
    //     jokes.innerHTML = data.joke;
    // });
     // variables for headers
    // without headers; we get HTML text instead of jokes
    
}
