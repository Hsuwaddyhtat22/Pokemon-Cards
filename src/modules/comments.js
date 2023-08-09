import { baseURL, appId } from './involveapi.js';

// eslint-disable-next-line consistent-return
async function getComments(pokemonName) {
  try {
    const response = await fetch(`${baseURL}apps/${appId}/comments/?item_id=${pokemonName}`);
    if (response.status === 200) {
      const apiCommentsData = await response.json();
      return apiCommentsData; // Return the fetched comments data
    }
  } catch (error) {
    return null; // Return null to indicate an error
  }
}
const addComment = async (pokemonName, username, comment) => {
  try {
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
      // Comment successfully added
      return true;
    }
    // Comment addition failed
    return false;
  } catch (error) {
    return false;
  }
};
export { getComments, addComment };