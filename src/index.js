import './style.css';
import pokemonCards from './modules/cards.js';
import { addLike, getLikes } from './modules/likes.js';
import openPopup from './modules/popup.js';
import countItems from './modules/itemscounter.js';

const BASE_API_URL = 'https://pokeapi.co/api/v2';
const itemContainer = document.getElementById('itemContainer');

const updateLikeCount = async (likeButton, pokemonName, initialLikeCount) => {
  try {
    let likeCount = parseInt(initialLikeCount, 10);
    likeButton.textContent = `${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`;
    likeButton.addEventListener('click', async () => {
      likeCount += 1;
      likeButton.textContent = `${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`;
      await addLike(pokemonName);
    });
  } catch (error) {
    return error;
  }
  return undefined; // Return at the end of the async function
};

const fetchAndDisplayPokemon = async (pokemon) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pokemon/${pokemon.name}`);
    const data = await response.json();
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.setAttribute('id', `${pokemon.id}`);
    const name = document.createElement('h2');
    name.textContent = data.name;
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    img.alt = data.name;
    const description = document.createElement('p');
    description.textContent = pokemon.description;
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');
    const likeButton = document.createElement('button');
    likeButton.classList.add('like');
    const initialLikeCount = await getLikes(pokemon.name);
    updateLikeCount(likeButton, pokemon.name, initialLikeCount);
    const commentButton = document.createElement('button');
    commentButton.classList.add('comment');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', () => {
      openPopup(pokemon);
    });
    actionsDiv.appendChild(likeButton);
    actionsDiv.appendChild(commentButton);
    itemDiv.appendChild(name);
    itemDiv.appendChild(img);
    itemDiv.appendChild(description);
    itemDiv.appendChild(actionsDiv);
    itemContainer.appendChild(itemDiv);
    return itemDiv;
  } catch (error) {
    return error;
  }
};

const displaySortedPokemon = async () => {
  try {
    const sortedPokemon = [...pokemonCards].sort((a, b) => a.index - b.index);
    const pokemonDivs = await Promise.all(sortedPokemon.map(fetchAndDisplayPokemon));
    pokemonDivs.forEach((pokemonDiv) => {
      itemContainer.appendChild(pokemonDiv);
    });
    countItems();
    return undefined; // Return at the end of the async function
  } catch (error) {
    return error;
  }
};
displaySortedPokemon();

export { fetchAndDisplayPokemon, displaySortedPokemon };