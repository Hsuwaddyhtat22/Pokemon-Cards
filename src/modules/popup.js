import { addComment, getComments } from './comments.js';

const openPopup = async (pokemon) => {
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
  commentCount.classList.add('comment-count');
  commentCount.textContent = 'Total Comments: 0';
  commentCount.style.fontSize = '20px';
  commentHeader.appendChild(commentTitle);
  commentHeader.appendChild(commentCount);

  // Create the comment form
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
  commentButton.addEventListener('click', async () => {
    const commentText = commentInput.value;

    // Add comment to API
    if (commentText.trim() !== '') {
      const commenterName = nameInput.value;
      const commentAdded = await addComment(pokemon.name, commenterName, commentText);
      if (commentAdded) {
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
        const totalCommentsCount = parseInt(commentCount.textContent.split(':')[1].trim(), 10) + 1;
        commentCount.textContent = `Total Comments: ${totalCommentsCount}`;
      }
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

  const apiCommentsData = await getComments(pokemon.name);

  // Update the comment count text content with API comments count
  commentCount.textContent = `Total Comments: ${apiCommentsData.length}`;

  // Display API comments for this popup
  apiCommentsData.forEach((commentData) => {
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    const commentContent = document.createElement('p');
    commentContent.style.fontSize = '15px';
    commentContent.style.color = 'green';

    const commentDate = new Date(commentData.creation_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    commentContent.textContent = `${commentDate} / ${commentData.username}: ${commentData.comment}`;
    commentItem.appendChild(commentContent);
    commentSection.appendChild(commentItem);
  });

  popupContent.appendChild(commentSection);
  popup.appendChild(popupContent);
  document.body.appendChild(popup);
};

export default openPopup;