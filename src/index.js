import './style.css';
import pokemonCards from './modules/cards';
import addLike from './modules/likes.js';

const BASE_API_URL = 'https://pokeapi.co/api/v2';

const itemContainer = document.getElementById('itemContainer');
const itemCounter = document.getElementById('itemCounter');

const openPopup = async (pokemon) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const data = await response.json();

    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const img = document.createElement('img');

    img.src = data.sprites.front_default;
    img.alt = data.name;

    const description = document.createElement('p');
    description.textContent = pokemon.description;

    const commentSection = document.createElement('div');
    commentSection.classList.add('comment-section');

    const commentHeader = document.createElement('div');
    commentHeader.classList.add('comment-header');

    const commentTitle = document.createElement('h2');
    commentTitle.textContent = 'Comments';
    commentTitle.style.fontSize = '20px';

    const commentCount = document.createElement('p');
    commentCount.textContent = 'Total Comments: 0';
    commentCount.style.fontSize = '20px';

    commentHeader.appendChild(commentTitle);
    commentHeader.appendChild(commentCount);

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Your Name:';
    nameLabel.style.fontSize = '20px';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';

    const commentLabel = document.createElement('label');
    commentLabel.textContent = 'Your Comment:';
    commentLabel.style.fontSize = '20px';
    const commentInput = document.createElement('textarea');

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', () => {
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        const commenterName = nameInput.value;
        const today = new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });

        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');

        const commentContent = document.createElement('p');
        commentContent.style.fontSize = '20px';
        commentContent.textContent = `${today} / ${commenterName}: ${commentText}`;

        commentItem.appendChild(commentContent);
        commentSection.appendChild(commentItem);
        commentInput.value = '';

        const commentCountValue = parseInt(commentCount.textContent.split(':')[1].trim(), 10) + 1;
        commentCount.textContent = `Total Comments: ${commentCountValue}`;

        // Store the comment in the popup's local storage
        const popupComments = JSON.parse(localStorage.getItem('popupComments')) || {};
        if (!popupComments[pokemon.name]) {
          popupComments[pokemon.name] = [];
        }
        popupComments[pokemon.name].push({ date: today, author: commenterName, text: commentText });
        localStorage.setItem('popupComments', JSON.stringify(popupComments));
      }
    });

    const closePopupButton = document.createElement('button');
    closePopupButton.classList.add('close-popup');
    closePopupButton.textContent = 'Close';
    closePopupButton.addEventListener('click', () => {
      popup.remove();
    });

    popupContent.appendChild(img);
    popupContent.appendChild(description);
    commentSection.appendChild(commentHeader);
    commentSection.appendChild(nameLabel);
    commentSection.appendChild(nameInput);
    commentSection.appendChild(commentLabel);
    commentSection.appendChild(commentInput);
    commentSection.appendChild(commentButton);
    commentSection.appendChild(closePopupButton);
    popupContent.appendChild(commentSection);

    // Display existing comments for this popup
    const popupComments = JSON.parse(localStorage.getItem('popupComments')) || {};
    const storedComments = popupComments[pokemon.name] || [];
    storedComments.forEach((commentData) => {
      const commentItem = document.createElement('div');
      commentItem.classList.add('comment-item');

      const commentContent = document.createElement('p');
      commentContent.style.fontSize = '15px';
      commentContent.style.color = 'green';
      commentContent.textContent = `${commentData.date} / ${commentData.author}: ${commentData.text}`;

      commentItem.appendChild(commentContent);
      commentSection.appendChild(commentItem);
    });

    // Update total comment count
    commentCount.textContent = `Total Comments: ${storedComments.length}`;

    popup.appendChild(popupContent);
    document.body.appendChild(popup);
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
  }
};
const updateLikeCount = async (likeButton, pokemonName) => {
  try {
    let likeCount = localStorage.getItem(pokemonName) || 0;

    likeButton.textContent = `${likeCount} ${likeCount === '1' ? 'Like' : 'Likes'}`;

    likeButton.addEventListener('click', async () => {
      likeCount += 1;
      likeButton.textContent = `${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`;
      localStorage.setItem(pokemonName, likeCount);
      await addLike(pokemonName);
    });
  } catch (error) {
    console.error('Error updating like count:', error);
  }
};

const fetchPokemon = async (pokemon) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pokemon/${pokemon.name}`);
    const data = await response.json();

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    img.alt = data.name;

    const description = document.createElement('p');
    description.textContent = pokemon.description;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const likeButton = document.createElement('button');
    likeButton.classList.add('like');
    updateLikeCount(likeButton, pokemon.name);

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', () => {
      openPopup(pokemon);
    });

    actionsDiv.appendChild(likeButton);
    actionsDiv.appendChild(commentButton);

    itemDiv.appendChild(img);
    itemDiv.appendChild(description);
    itemDiv.appendChild(actionsDiv);

    itemContainer.appendChild(itemDiv);
    itemCounter.textContent = `Total Cards: ${pokemonCards.length}`;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
  }
};

pokemonCards.forEach((card) => {
  fetchPokemon(card);
});


