const itemContainer = document.querySelector(".game");
const endContainer = document.querySelector(".end-game");
let itemComparer = [];
let counter = 3;

function generateDeck(value) {
    let cardDeck = [];
    do {
        let cardValue = CARDS[randomInteger(0, CARDS.length - 1)];
        cardDeck.push(cardValue, cardValue);
    } while (cardDeck.length !== value);
    return cardDeck.sort(() => Math.random() - 0.5);
}

function randomInteger(a, b) {
    let c = a + Math.random() * (b + 1 - a);
    return Math.floor(c);
  }

function generateGame(value) {
    let shuffledCards = generateDeck(value)
    const html = shuffledCards.map(card => {
      return `
        <div class="slot">
            <img class="back" src="img/suit.png" />
            <img class="front hidden" src="${card.img}" combined="false" opened="false" value="${card.value}" />
        </div>
      `;
    })
      .join('');
    itemContainer.innerHTML = html;
}

function sortCards(array) {
    return array.sort(() => Math.random() - 0.5);
}

function switchSide(event) {
    if (event.target.tagName !== 'IMG') {
        return;
      }
    if (event.target.classList[0] === 'back' && event.target.nextElementSibling.getAttribute('combined') === 'false') {
        const back = event.target;
        const front = back.nextElementSibling;
        front.setAttribute('opened', 'true')
        back.classList.toggle('hidden')
        front.classList.toggle('hidden')
        itemComparer.push(event.target.nextElementSibling.getAttribute('value'))
        let result
        if (itemComparer.length === 2) {
          result = isPair(itemComparer)
        }
        if (result === true) {
          event.target.nextElementSibling.setAttribute('combined', 'true')
          let firstChoice = document.querySelector('[combined="false"][opened="true"]')
          firstChoice.setAttribute('combined', 'true')
          itemComparer = [];
          isEnd()
        }
        if (result === false) {
          setTimeout(() => {
            let firstChoice = document.querySelectorAll('[combined="false"][opened="true"]')
            firstChoice.forEach((elem) => {
              elem.setAttribute('opened', 'false');
              elem.classList.toggle('hidden')
              elem.previousElementSibling.classList.toggle('hidden')
            })
            itemComparer = [];
          }, 500);
          counter--;
          if (counter === 0) {
            setTimeout(() => {
              counter = 3
              let allBacks = document.querySelectorAll('.back');
              let allFronts = document.querySelectorAll('.front');
              allFronts.forEach((elem) => {
                elem.classList.add('hidden');
                elem.setAttribute('opened', 'false');
                elem.setAttribute('combined', 'false');
              })
              allBacks.forEach((elem) => {
                elem.classList.remove('hidden');
              })
            }, 500);
          }
        } 
    }
}

function isEnd() {
  let endScript = document.querySelectorAll('[combined="false"]')
  if (endScript.length === 0) {
    let game = document.querySelector(".game");
    game.classList.toggle('hidden');
    let buttons = document.querySelector(".level");
    buttons.classList.toggle('hidden');
    const html = 
      `
        <div class="end">
            <p>CONGRATULATIONS!!!</p>
            <p>YOU WIN 1 МЕГАЯЩИК!!!</p>
            <img src="img/Brawl_Box.webp" />
        </div>
      
      `;    
    endContainer.innerHTML = html;
  }
}

function isPair(array) {
    let filtered = new Set(array);
    if (filtered.size === 1) {
      return true
    }
    return false
}