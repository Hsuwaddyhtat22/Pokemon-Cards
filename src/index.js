import './style.css';

const BASE_API_URL = 'https://pokeapi.co/api/v2';

const itemContainer = document.getElementById('itemContainer');
const itemCounter = document.getElementById('itemCounter');
const pokemonCards = [
    { name: 'bulbasaur', id: 1, description: 'A Grass/Poison-type Pokémon with a plant bulb on its back.' },
    { name: 'ivysaur', id: 2, description: 'The evolved form of Bulbasaur, known for the large flower on its back.' },
    { name: 'venusaur', id: 3, description: 'The final evolution of Bulbasaur, a powerful Grass/Poison-type Pokémon.' },
    { name: 'squirtle', id: 7, description: 'A Water-type Pokémon that hides in its shell for protection.' },
    { name: 'wartortle', id: 8, description: 'The evolved form of Squirtle, a Water-type Pokémon with impressive water cannons.' },
    { name: 'blastoise', id: 9, description: 'The final evolution of Squirtle, a Water-type Pokémon with powerful water cannons on its back.' },
    { name: 'charmander', id: 4, description: 'A Fire-type Pokémon known for the flame on the tip of its tail.' },
    { name: 'charmeleon', id: 5, description: 'The evolved form of Charmander, a Fire-type Pokémon with a fiery personality.' },
    { name: 'charizard', id: 6, description: 'A powerful Fire/Flying-type Pokémon with a fiery breath.' },
    { name: 'pidgey', id: 16, description: 'A Normal/Flying-type Pokémon that is a common sight in many areas.' },
    { name: 'pidgeotto', id: 17, description: 'The evolved form of Pidgey, a larger and more powerful Normal/Flying-type Pokémon.' },
    { name: 'pidgeot', id: 18, description: 'The final evolution of Pidgey, a majestic Normal/Flying-type Pokémon.' },
    { name: 'eevee', id: 133, description: 'A Normal-type Pokémon with multiple evolutionary paths.' },
    { name: 'pikachu', id: 25, description: 'An Electric-type Pokémon known for its lightning bolt-shaped tail.' },
    { name: 'charizard', id: 6, description: 'A powerful Fire/Flying-type Pokémon with a fiery breath.' },
    { name: 'squirtle', id: 7, description: 'A Water-type Pokémon that hides in its shell for protection.' },
    { name: 'bulbasaur', id: 1, description: 'A Grass/Poison-type Pokémon with a plant bulb on its back.' },
    { name: 'eevee', id: 133, description: 'A Normal-type Pokémon with multiple evolutionary paths.' },
    { name: 'jigglypuff', id: 39, description: 'A Normal/Fairy-type Pokémon that puts its foes to sleep by singing.' },
    { name: 'meowth', id: 52, description: 'A Normal-type Pokémon known for its mischievous behavior and coin-collecting.' },
    { name: 'magikarp', id: 129, description: 'A weak Water-type Pokémon that can evolve into a powerful Gyarados.' },
    { name: 'raichu', id: 26, description: 'The evolved form of Pikachu, Raichu is an Electric-type Pokémon.' },
    { name: 'mewtwo', id: 150, description: 'A Psychic-type Legendary Pokémon with immense power.' },
    { name: 'vaporeon', id: 134, description: 'A Water-type Eeveelution known for its aquatic abilities.' },
    { name: 'gyarados', id: 130, description: 'A powerful Water/Flying-type Pokémon known for its rage.' },
    { name: 'snorlax', id: 143, description: 'A Normal-type Pokémon known for its sleeping habits and huge size.' },
    { name: 'eevee', id: 133, description: 'A Normal-type Pokémon with multiple evolutionary paths.' },
    { name: 'dragonite', id: 149, description: 'A powerful Dragon/Flying-type Pokémon with a kind heart.' },
    { name: 'lapras', id: 131, description: 'A Water/Ice-type Pokémon known for its soothing song and serenity.' },
    { name: 'machamp', id: 68, description: 'A Fighting-type Pokémon with impressive physical strength and power.' },
    { name: 'meowth', id: 52, description: 'A Normal-type Pokémon known for its mischievous behavior and coin-collecting.' },
    { name: 'magikarp', id: 129, description: 'A weak Water-type Pokémon that can evolve into a powerful Gyarados.' },
    { name: 'raichu', id: 26, description: 'The evolved form of Pikachu, Raichu is an Electric-type Pokémon.' },
];

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
        commentCount.textContent = `Total Comments: 0`;
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
                    day: 'numeric'
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
        storedComments.forEach(commentData => {
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
const updateLikeCount = async(likeButton, pokemonName) => {
    try {
        let likeCount = localStorage.getItem(pokemonName) || 0;

        likeButton.textContent = `${likeCount} ${likeCount === '1' ? 'Like' : 'Likes'}`;

        likeButton.addEventListener('click', async() => {
            likeCount++;
            likeButton.textContent = `${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`;
            localStorage.setItem(pokemonName, likeCount);
        });
    } catch (error) {
        console.error('Error updating like count:', error);
    }
};

const fetchPokemon = async(pokemon) => {
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