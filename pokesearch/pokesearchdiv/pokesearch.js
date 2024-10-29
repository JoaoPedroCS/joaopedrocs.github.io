const searchInput = document.getElementById('input-search');
const searchButton = document.getElementById('button-search');
const resultDiv = document.getElementById('poke-result');
const statsDiv = document.getElementById('poke-stats');


searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});
searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value.toLowerCase();
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                alert('Pokémon not found');;
            }
            return response.json();
        })
        .then(data => {
            const { name, id, height, weight, base_experience, sprites, stats, types } = data;

            const { front_default, back_default, front_shiny, back_shiny } = sprites;

            const baseStats = stats.map(stat => ({
                name: stat.stat.name,
                value: stat.base_stat
            }));

            const typeNames = types.map(type => type.type.name);

            renderPokemon(name, id, height, weight, base_experience, front_default, back_default, front_shiny, back_shiny, baseStats, typeNames);
        })
        .catch(error => {
            return;
        })});

const renderPokemon = (name, id, height, weight, base_experience, front_default, back_default, front_shiny, back_shiny, baseStats, typeNames) => {
    const typeHTML = typeNames.map((type, index) => `
        <p class="type type-${type.toLowerCase()} ${index === 1 && typeNames.length === 1 ? 'hidden' : ''}">${type}</p>
    `).join('');

    const pokemonHTML = `
        <h2 id="name-id">${name} #${id}</h2>
        <p id="peso-altura">Peso: ${weight} Altura: ${height}</p>
        <img id="poke-img" class="poke-sprite" src="${front_default}" alt="">
        <div class="types">
            ${typeHTML}
        </div>
    `;

    resultDiv.innerHTML = pokemonHTML;

    const statsHTML = `
        <p class="stat-title">Base</p>
        <p class="stat-title">Stats</p>
        <p>HP:</p>
        <p id="stat-HP">${baseStats.find(stat => stat.name === 'hp').value}</p>
        <p>Attack:</p>
        <p id="stat-Attack">${baseStats.find(stat => stat.name === 'attack').value}</p>
        <p>Defense:</p>
        <p id="stat-Defense">${baseStats.find(stat => stat.name === 'defense').value}</p>
        <p>Sp. Attack:</p>
        <p id="stat-Sp.Attack">${baseStats.find(stat => stat.name === 'special-attack').value}</p>
        <p>Sp. Defense:</p>
        <p id="stat-Sp.Defense">${baseStats.find(stat => stat.name === 'special-defense').value}</p>
        <p>Speed:</p>
        <p id="stat-Speed">${baseStats.find(stat => stat.name === 'speed').value}</p>
    `;

    statsDiv.innerHTML = statsHTML;
}




