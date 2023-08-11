// cards.js

const fetchOriginalPokemonData = async () => {
  const numberOfPokemon = 9; // Change this to the desired number of Pokémon
  const originalPokemonCards = [];

  const fetchPromises = [];
  for (let i = 1; i <= numberOfPokemon; i += 1) {
    fetchPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
  }
  const responses = await Promise.all(fetchPromises);
  const jsonResponses = await Promise.all(responses.map((response) => response.json()));

  const speciesFetchPromises = [];
  for (let i = 1; i <= numberOfPokemon; i += 1) {
    speciesFetchPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`));
  }
  const speciesResponses = await Promise.all(speciesFetchPromises);

  const speciesJsonPromises = speciesResponses.map((response) => response.json());
  const speciesJsonResponses = await Promise.all(speciesJsonPromises);

  for (let i = 0; i < numberOfPokemon; i += 1) {
    const speciesData = speciesJsonResponses[i];
    const description = speciesData.flavor_text_entries.find((entry) => entry.language.name === 'en').flavor_text;

    originalPokemonCards.push({
      name: jsonResponses[i].name,
      id: jsonResponses[i].id,
      description,
    });
  }

  return originalPokemonCards;
};

const pokemonCards = await fetchOriginalPokemonData();

export default pokemonCards;
