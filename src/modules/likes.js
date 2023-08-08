import { baseURL, appId } from './involveapi.js';

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

export default addLike;
