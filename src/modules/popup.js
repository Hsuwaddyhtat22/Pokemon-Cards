import { addComment, getComments } from './comments.js';
const openPopup = async(pokemon) => {
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
        commentButton.addEventListener('click', async() => {
            const commentText = commentInput.value;
            if (commentText.trim() !== '') {
                const commenterName = nameInput.value;
                // Call the addComment function to add the comment to the API
                const commentAdded = await addComment(pokemon.name, commenterName, commentText);
                if (commentAdded) {
                    // Comment added successfully
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
                    // Fetch updated comments from the API and update comment count
                    const updatedComments = await getComments(pokemon.name);
                    if (updatedComments) {
                        commentCount.textContent = `Total Comments: ${updatedComments.length}`;
                    }
                } else {
                    // Handle error if comment addition failed
                    console.error('Failed to add comment.');
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
        if (apiCommentsData) {
            apiCommentsData.forEach((commentData) => {
                const commentItem = document.createElement('div');
                commentItem.classList.add('comment-item');
                const commentContent = document.createElement('p');
                commentContent.style.fontSize = '15px';
                commentContent.style.color = 'green';
                // Use the commentData properties to construct the comment content
                const commentDate = new Date(commentData.creation_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                });
                commentContent.textContent = `${commentDate} / ${commentData.username}: ${commentData.comment}`;
                commentItem.appendChild(commentContent);
                commentSection.appendChild(commentItem);
            });
            // Update total comment count
            commentCount.textContent = `Total Comments: ${apiCommentsData.length}`;
        }
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
        popupContent.appendChild(commentSection);
        popup.appendChild(popupContent);
        document.body.appendChild(popup);
    } catch (error) {
        console.error('Error fetching Pokémon details:', error);
    }
};
export default openPopup;