import { baseURL, appId } from './involveapi.js';

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sfozB4S7vDGGPXQ2BqJy/likes", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

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
