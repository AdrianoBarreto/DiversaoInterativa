const cards = [
    'Æ', 'Æ',
    '¶', '¶',
    '£', '£',
    'Ø', 'Ø',
    '¥', '¥',
    'ß', 'ß',
    '§', '§',
    '▄', '▄'
];

let moves = 0;
let openedCards = [];
let matchedCards = [];

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    const frontElement = document.createElement('div');
    frontElement.classList.add('front');
    frontElement.textContent = card;

    cardElement.appendChild(frontElement);

    cardElement.addEventListener('click', () => {
        if (openedCards.length === 2) {
            return;
        }

        if (cardElement.classList.contains('open') || cardElement.classList.contains('matched')) {
            return;
        }

        cardElement.classList.add('open');

        if (openedCards.length === 0) {
            openedCards.push(cardElement);
        } else {
            openedCards.push(cardElement);

            const [firstCard, secondCard] = openedCards;

            if (firstCard.querySelector('.front').textContent === secondCard.querySelector('.front').textContent) {
                openedCards.forEach(card => {
                    card.classList.add('matched');
                    card.style.backgroundColor = '#8bc34a';
                });

                matchedCards.push(...openedCards);
                openedCards = [];

                if (matchedCards.length === cards.length) {
                    alert(`Parab�ns! Voc� ganhou em ${moves} movimentos.`);
                    document.querySelectorAll('.card').forEach(card => {
                        card.classList.remove('open', 'matched');
                        card.style.backgroundColor = '';
                    });
                    moves = 0;
                    document.querySelector('#moves').textContent = moves;
                    matchedCards = [];
                }
            } else {
                setTimeout(() => {
                    openedCards.forEach(card => card.classList.remove('open'));
                    openedCards = [];
                }, 1000);
            }

            moves++;
            document.querySelector('#moves').textContent = moves;
        }
    });

    return cardElement;
}

function startGame() {
    const shuffledCards = shuffle(cards);
    const gameContainer = document.querySelector('.game-container');

    shuffledCards.forEach(card => {
        const cardElement = createCard(card);
        gameContainer.appendChild(cardElement);
    });
}

function restartGame() {
    document.querySelectorAll('.card').forEach(card => {
        card.remove();
    });

    startGame();
}

document.querySelector('#restart-button').addEventListener('click', restartGame);

startGame();
