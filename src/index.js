import './style.css';


const itemContainer = document.getElementById('itemContainer');

const pokemonCards = [
    { name: 'ditto', id: 132, description: 'A unique Pokémon that can transform into any other Pokémon.' },
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
    { name: 'machamp', id: 68, description: 'A Fighting-type Pokémon with impressive physical strength and power.' }
];

const openPopup = (pokemon) => {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    img.alt = data.name;

    const description = document.createElement('p');
    description.textContent = pokemon.description;

    const closePopupButton = document.createElement('button');
    closePopupButton.classList.add('close-popup');
    closePopupButton.textContent = 'Close';
    closePopupButton.addEventListener('click', () => {
        popup.remove();
    });

    popupContent.appendChild(img);
    popupContent.appendChild(description);
    popupContent.appendChild(closePopupButton);

    popup.appendChild(popupContent);
    document.body.appendChild(popup);
};

const fetchPokemon = async(pokemon) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
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
        likeButton.textContent = 'Like';

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
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
};

pokemonCards.forEach((card) => {
    fetchPokemon(card);
});