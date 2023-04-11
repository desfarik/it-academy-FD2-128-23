const ALL_CARDS = [
  {
    value: "ace",
    url: "images/Ace.png",
  },

  {
    value: "king",
    url: "images/King.png",
  },

  {
    value: "queen",
    url: "images/Queen.png",
  },

  {
    value: "jack",
    url: "images/Jack.png",
  },

  {
    value: "joker",
    url: "images/Joker.png",
  },

  {
    value: "seven",
    url: "images/Seven.png",
  },
];

const startMenu = document.querySelector(".start_Game");
const gameStarted = document.querySelector(".main");
const gameField = document.querySelector("#game_field");
const turnsLeft = document.querySelector("#turns");
const attemps = document.querySelector("#attemps");
let turnsCounter = 2;
let attempsCounter = 0;

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function generateCardDesk(number) {
  let cardsDesk = [];
  while (cardsDesk.length < number) {
    let cardValue = ALL_CARDS[randomInteger(0, ALL_CARDS.length - 1)];
    cardsDesk.push(cardValue, cardValue);
  }
  shuffle(cardsDesk);
  return cardsDesk;
}

function generateGameField(number) {
  startMenu.style.display = "none";
  gameStarted.style.display = "block";
  const cardDesk = generateCardDesk(number);
  const html = cardDesk
    .map((card) => {
      return `
        <div class="card" card-value="${card.value}" card_opened="false">
            <img class="card__face back" src="images/Back.jpg" alt="">
            <img class="card__face front" src="${card.url}" alt="">
        </div>
        `;
    })
    .join("");
  gameField.innerHTML = html;
}

let prevCard = null;
let currentCard;

function openCard(event) {
  if (!event.target.classList.contains("card__face")) {
    return;
  }
  if(event.target.closest(".card").getAttribute("card_opened")==="true") {
    return;
  }
  if(currentCard && prevCard) {
    return;
  }


  const cardsOnField = document.querySelectorAll(".card");
  currentCard = event.target.closest(".card");
 
  currentCard.classList.add("is-flipped");

  if (prevCard !== null) {
    if (prevCard.getAttribute("card-value") !== currentCard.getAttribute("card-value")) {
      turnsCounter--;
      setTimeout(() => {
        currentCard.classList.remove("is-flipped");
        prevCard.classList.remove("is-flipped");
        prevCard = null;
        currentCard = null;
        turnsLeft.textContent = turnsCounter;
        if(turnsCounter < 0){
          for(let card of cardsOnField) {
            card.classList.remove("is-flipped");
            card.setAttribute('card_opened', false);
          }
          turnsCounter = 2;
          turnsLeft.textContent = turnsCounter;
          attempsCounter++;
          attemps.textContent = attempsCounter;
        }
      }, 1000); 
    } else if (prevCard.getAttribute("card-value") === currentCard.getAttribute("card-value")) {
      prevCard.setAttribute('card_opened', true);
      currentCard.setAttribute('card_opened', true);
      prevCard = null;
      currentCard = null;
      let currentCards = Array.from(cardsOnField);
      checkForWin(currentCards);
    }
  } else {
    prevCard = currentCard;
    currentCard = null;
  }
}

function checkForWin(cards) {
  if(cards.every(card => card.getAttribute('card_opened') === "true")) {
    setTimeout(()=>alert('You WIN'), 1000);
    setTimeout(()=>{
    startMenu.style.display = "flex";
    gameStarted.style.display = "none";
    turnsCounter = 2;
    turnsLeft.textContent = turnsCounter;
    attempsCounter = 0;
    attemps.textContent = attempsCounter;
  }, 1000); 
  }
}

gameField.addEventListener("click", openCard);
