import { baseURL, appId } from './involveapi.js';

const getComments = async (pokemonName) => {
  const response = await fetch(`${baseURL}apps/${appId}/comments/?item_id=${pokemonName}`);
  if (response.status === 200) {
    const apiCommentsData = await response.json();
    return apiCommentsData;
  }
  return null;
};

const addComment = async (pokemonName, username, comment) => {
  const response = await fetch(`${baseURL}apps/${appId}/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: pokemonName,
      username,
      comment,
    }),
  });

  if (response.status === 201) {
    return { success: true, message: 'Comment added successfully' };
  }
  return { success: false, message: 'Failed to add comment' };
};

export { getComments, addComment };
