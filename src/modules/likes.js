import { baseURL, appId } from './involveapi.js';

const getLikes = async (pokemonName) => {
  try {
    const response = await fetch(`${baseURL}apps/${appId}/likes/?item_id=${pokemonName}`);
    if (response.status === 200) {
      const likesData = await response.json();
      const likesForPokemon = likesData.find(like => like.item_id === pokemonName);
      if (likesForPokemon) {
        return likesForPokemon.likes;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } catch (error) {
    return 0;
  }
};

// add a like to the API
const addLike = async (id) => {
  const url = `${baseURL}apps/${appId}/likes/`;
  const data = { item_id: id };
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { addLike, getLikes };
