// Count dom elements with class name "item"
const countItems = () => {
  const pokemonCount = document.getElementById('itemCounter');
  const items = document.getElementsByClassName('item');
  pokemonCount.textContent = `Total Pokémon: ${items.length}`;
};

export default countItems;
