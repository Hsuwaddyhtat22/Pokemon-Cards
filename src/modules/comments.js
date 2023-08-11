import { baseURL, appId } from './involveapi.js';

const getComments = async(pokemonName) => {
    try {
        const response = await fetch(`${baseURL}apps/${appId}/comments/?item_id=${pokemonName}`);
        if (response.status === 200) {
            const apiCommentsData = await response.json();
            return apiCommentsData;
        }
    } catch (error) {
        return null;
    }
};

const addComment = async(pokemonName, username, comment) => {
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
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

export { getComments, addComment };