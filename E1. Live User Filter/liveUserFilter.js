
// 42. Live User Filter

// Important concepts for the project

// 1. getElementById()
// 2. addEventListener('input')
// 3. async await fetch
// 4. innerHTML
// 5. forEach()
// 6. createElement()
// 7. template literals
// 8. appendChild
// 9. toLowerCase()
// 10. includes()
// 11. classList > add and remove

// variables

const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');
    const {results} = await res.json();
    // console.log(data);

    // clear results
    result.innerHTML = '';
    
    results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        result.appendChild(li);
    });
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}