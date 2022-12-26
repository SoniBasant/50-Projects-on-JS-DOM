
// 37. Pokedex

// Important concepts for the project

// 1. getElementById()
// 2. Objects
// 3. async, await, fetch
// 4. for loop
// 5. createElement
// 6. uppercase
// 7. slice, indexOf, toString
// 8. map
// 9. template literals
// 10. appendChild


// variables

const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
// the numbers of pokemon you want

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
}

// pokeapi.co
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    // only first letter uppercase
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    // to make number id with 000 padding
    const id = pokemon.id.toString().padStart(3, '0');

    // loop through each type with name
    const poke_types = pokemon.types.map(type => type.type.name);
    // gor type of pokemon
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    // use object of colors
    const color = colors[type];

    // backG depends on the color of pokemon
    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML;

    poke_container.appendChild(pokemonEl);
}

fetchPokemons();