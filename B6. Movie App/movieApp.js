
// 17. Movie App

// Important JS and CSS concepts for the project

// 1. getElementById()
// 2. async, await, fetch
// 3. forEach()
// 4. .classList.add()
// 5. .createElement()
// 6. template literals
// 7. appendChild()
// 8. if..else if
// 9. addEventListener('submit')
// 10. preventDefault()
// 11. API of themoviedb
// 12. innerHTML
// 13. window.location.reload()
// 14. transition, transform

// variables
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json(); 

    showMovies(data.results);
}


// show movie and it's data
function showMovies(movies) {
    // to replace previous movies
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie; 

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        // image, title, rating, overview
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `; 
        main.appendChild(movieEl);
    });
}

// function for different rating of movie
function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green';
    } else if(vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}


// search functionality
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
})
