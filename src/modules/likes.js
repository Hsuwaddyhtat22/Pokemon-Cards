import { baseURL, appId } from './involveapi.js';

const getLikes = async () => {
  try {
    const response = await fetch(`${baseURL}apps/${appId}/likes/`);
    if (response.status === 200) {
      const likesData = await response.json();
      console.log('Likes:', likesData);
    } else {
      console.log('Failed to get likes.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

getLikes();

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
