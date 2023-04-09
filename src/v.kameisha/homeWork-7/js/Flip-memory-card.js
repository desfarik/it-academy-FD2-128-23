const memoryGame = document.querySelector('.memory-game');
const counterHtml = document.querySelector('.counter');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard; 
let counter = 0;
counterHtml.innerHTML = counter;


function start(size) {
    switch(size) {
        case 'easy':
            generateCards(CARDS.slice(0,8));
            break;
        case 'medium':
            generateCards(CARDS.slice(0,10));
            break;
        case 'hard':
            generateCards(CARDS);
            break;

    }
  }
  

function generateCards(cards){
    cards = cards.map(a => {return {...a}}).concat(cards.map(a => {return {...a}}));
    cards.map(card => card.weight = (() => Math.random())());
    const cardList = cards
    .sort((a, b) => a.weight - b.weight)
    .map(card =>{
        return `
        <div class="memory-card" data-name="${card.name}">
            <img class="front-face" src="images/backSideCard.svg">
            <img class="back-face" src="${card.img}">
        </div>
        `
    })
    .join('')
    memoryGame.innerHTML = cardList;
    const cardsHtml = document.querySelectorAll('.memory-card');

    function flipCard() {
        if (lockBoard) return;
        this.classList.add('flip');
          if (!hasFlippedCard) {
             hasFlippedCard = true;
             firstCard = this;
             return;
        } 
        secondCard = this;
        hasFlippedCard = false;

        checkForMatch();
    }
    function checkForMatch() {
        if (firstCard.dataset.name === secondCard.dataset.name) {
            disableCards();
            return;
        }
        unflipCards();
    }
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }
        
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            lockBoard = false;
            counter++;
            counterHtml.innerHTML = counter;
        }, 900);
    }


cardsHtml.forEach(card => card.addEventListener('click', flipCard));
}
