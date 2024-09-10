let cardsChosen = [];
let cardsMatched = [];
let cardArray = [
    {id: 'c1', value: '🐢'},
    {id: 'c2', value: '🐐'},
    {id: 'c3', value: '🍄'},
    {id: 'c4', value: '⚽'},
    {id: 'c5', value: '🍻'},
    {id: 'c6', value: '👑'},
    {id: 'c7', value: '📸'},
    {id: 'c8', value: '😬'},
    {id: 'c9', value: '👀'},
    {id: 'c10', value: '🚨'},
    {id: 'c11', value: '🐦‍'},
    {id: 'c12', value: '😻'}
]
cardArray = cardArray.flatMap(el => [el, el])
const grid = document.getElementById('grid');
const info_score = document.getElementById('info_score');
let score = 0;

window.addEventListener('DOMContentLoaded', startGame)

function startGame(){
    info_score.textContent = '0';
    score = 0;
    shuffle(cardArray);
    createBoard();
}

function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function createBoard() {
    grid.innerHTML = '';
    cardArray.forEach((card) => {
        let cardElement = document.createElement('div');
        cardElement.classList.add("card");
        cardElement.id = card['id'];
        cardElement.textContent = card['value'];
        cardElement.addEventListener("click", flipCard);
        grid.appendChild(cardElement);
    })
}


function flipCard() {
    if (!this.classList.contains("flip") && cardsChosen.length < 2) {
        this.classList.add("flip");
        cardsChosen.push(this);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
}

function checkForMatch() {

    if (cardsChosen[0].id === cardsChosen[1].id) {
        cardsChosen.forEach(card => {
            card.classList.add('matched')
            cardsMatched.push(card);
        })
    } else {
        score += 1;
        info_score.textContent = score;
        cardsChosen.forEach(card => {
            card.classList.remove("flip");
        })
    }
    cardsChosen.length = 0;
}

