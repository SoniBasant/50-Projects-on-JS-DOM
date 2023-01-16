
// 28. GitHub Profiles

// Important JS and CSS concepts for the project

// 1. GitHub REST API
// 2. getElementById()
// 3. async, axios, try, catch
// 4. template literals
// 5. forEach()
// 6. classList, href, target, appendChild
// 7. addEventListener('submit')
// 8. preventDefault
// 9. :root
// 10. @media query

// axios > promise based HTTP client for the browser and node.js


// variables

// root GitHub URL
const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


async function getUser(username) {
    // enter username from input
    // axios will collect package with adding username
    // at the last of APIURL
    // we will use 'data' from the whole package

    // catch() > if something goes wrong

    try {
        const {data} = await axios(APIURL + username);
        createUserCard(data);
        getRepos(username);
    } catch(error) {
        if(error.response.status == 404) {
            createErrorCard('No profile with this username');
        }
    }
    
}

async function getRepos(username) {
    try {
        // sort by latest repos
        const {data} = await axios(APIURL + username + '/repos?sort=created');
        addReposToCard(data);
    } catch(error) {
        createErrorCard('Problem fetching repos');
    }
}

function createUserCard(user) {
    const userID = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';
    const cardHTML = `
    <div class="card">

        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>

        <div class="user-info">
            <h2>${userID}</h2>
            <p>${userBio}</p>

            <ul>
                <li>${user.followers} <strong> Followers</strong></li>
                <li>${user.following} <strong> Following</strong></li>
                <li>${user.public_repos} <strong> Repos</strong></li>
            </ul>

            <div id="repos"></div>
        </div>
    </div>
    `;
    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    // first 10 repositories
    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url;
            repoEl.target = '_blank';
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // to prevent submiting the form
    const user = search.value;

    if(user) {
        getUser(user);

        search.value = '';
    }
})
