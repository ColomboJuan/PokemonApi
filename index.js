var pokemonImg = document.querySelector('.pokemonImg')
var pokemonName = document.querySelector('.pokemonName');

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('name').toLowerCase();

async function getPokemonData(myParam) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${myParam}`)
        .then((res) => res.json())
        .then((data) => (obj = data))
        .catch((error) => console.log(error));
    return data
}

async function set() {
    const data = await getPokemonData(myParam);
    if (data) {
        pokemonImg.src = data.sprites.front_default;
        var name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        pokemonName.innerText = name;
    } else {
        pokemonImg.removeAttribute('src')
        pokemonName.innerText = "Pokemon not found";
    }

}

console.log(getPokemonData(myParam))
set()