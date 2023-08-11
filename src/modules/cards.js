// cards.js

const fetchOriginalPokemonData = async () => {
  const numberOfPokemon = 9; // Change this to the desired number of Pokémon
  const originalPokemonCards = [];

  for (let i = 1; i <= numberOfPokemon; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();

    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
    const speciesData = await speciesResponse.json();

    const description = speciesData.flavor_text_entries.find((entry) => entry.language.name === 'en').flavor_text;

    originalPokemonCards.push({
      name: data.name,
      id: data.id,
      description,
    });
  }

  return originalPokemonCards;
};

const pokemonCards = await fetchOriginalPokemonData();

export default pokemonCards;