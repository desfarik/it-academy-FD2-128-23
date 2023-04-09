const menu = document.querySelector(".menu");
const game = document.querySelector(".game");
const table = document.querySelector(".table");
const elementTurns = document.querySelector(".turns");
const elementAttempts = document.querySelector(".attempts");
const message = document.querySelector(".message");
let imagesGame = [];
let complexity;
let flippedCardsId = [];
let counter = 0;
let turns = 3;
let firstCardName;
let attempts = 0;
let quantityCell;
elementTurns.textContent = turns;
elementAttempts.textContent = attempts;

function shuffle(array) {
  const arraySort = array.slice();
  return arraySort.sort(() => Math.random() - 0.5);
}

function getImagesGame() {
  let imagesComplexity = [];
  let images = [];
  imagesComplexity = ALL_IMAGES.slice(0, complexity);
  for (let i = 0; i < size; i++) {
    images.push(imagesComplexity);
  }
  imagesGame = shuffle(images.flat());
}

function generateImagesGame() {
  let lengthRow = 0;
  const max = Math.max(complexity, size);
  const min = Math.min(complexity, size);
  for (let i = 0; i < min; i++) {
    const row = document.createElement("tr");
    table.append(row);
    for (let j = 0; j < max; j++) {
      const cell = document.createElement("td");
      cell.classList.add("cell");
      const div = document.createElement("div");
      div.classList.add("card");
      const front = document.createElement("img");
      front.classList.add("front");
      front.setAttribute("src", "./images/font.png");
      cell.append(div);
      div.append(front);
      const back = document.createElement("img");
      const src = imagesGame[j + lengthRow].src;
      const name = imagesGame[j + lengthRow].name;
      back.classList.add("back");
      back.setAttribute("src", `${src}`);
      back.setAttribute("data-id", `${i}${j}`);
      back.setAttribute("data-name", `${name}`);
      div.append(back);
      row.append(cell);
    }
    lengthRow += max;
  }
  quantityCell = min * max;
}

const start = (event) => {
  const target = event.target;
  if (target.tagName !== "LI") {
    return;
  }
  if (target.classList.contains("casual")) {
    complexity = casual;
  } else if (target.classList.contains("medium")) {
    complexity = medium;
  } else if (target.classList.contains("hard")) {
    complexity = hard;
  }
  getImagesGame();
  menu.classList.add("hide");
  game.classList.remove("hide");
  generateImagesGame();
};

menu.addEventListener("click", start);

const flipCard = (event) => {
  const target = event.target;
  if (!target.classList.contains("front")) {
    return;
  }
  const parent = target.parentElement;
  const back = parent.querySelector(".back");
  const secondCardId = back.dataset.id;
  const secondCardName = back.dataset.name;
  flippedCardsId.push(secondCardId);
  const firstCardId = flippedCardsId[counter - 1];
  if (flippedCardsId.length === 1) {
    parent.classList.add("flip");
    counter++;
    firstCardName = secondCardName;
  } else if (secondCardName !== firstCardName) {
    parent.classList.add("flip");
    setTimeout(() => flipBackCards(firstCardId, secondCardId), 500);
    flippedCardsId = [];
    counter = 0;
    turns--;
    setTimeout(() => showTextContent(elementTurns, turns), 1000);
    if (turns === 0) {
      setTimeout(() => flipBackAllCards(), 500);
      turns = 3;
      attempts++;
      setTimeout(() => showTextContent(elementAttempts, attempts), 1000);
    }
  } else {
    setTimeout(() => showAnimation(firstCardId, secondCardId), 500);
    parent.classList.add("flip");
    flippedCardsId = [];
    counter = 0;
  }
  showVictory();
  elementTurns.classList.remove("animation-counter");
  elementAttempts.classList.remove("animation-counter");
};

game.addEventListener("click", flipCard);

function showTextContent(element, text) {
  element.textContent = text;
  element.classList.add("animation-counter");
}

function flipBackCards(firstCardId, secondCardId) {
  const firstCardFlip = document.querySelector(`img[data-id='${firstCardId}']`);
  const secondCardFlip = document.querySelector(
    `img[data-id='${secondCardId}']`
  );
  firstCardFlip.parentElement.classList.remove("flip");
  secondCardFlip.parentElement.classList.remove("flip");
}

function flipBackAllCards() {
  const cardsFlip = document.querySelectorAll(".flip");
  cardsFlip.forEach((element) => {
    element.classList.remove("flip");
    element.classList.remove("animation");
  });
}

function showVictory() {
  const cardsFlip = document.querySelectorAll(".flip");
  let counter = 0;
  cardsFlip.forEach((element) => {
    if (element.classList.contains("flip")) {
      counter++;
    }
  });
  if (counter === quantityCell) {
    setTimeout(() => message.parentElement.classList.remove("hide"), 1500);
  }
}

function showAnimation(firstCardId, secondCardId) {
  const firstCardFlip = document.querySelector(`img[data-id='${firstCardId}']`);
  const secondCardFlip = document.querySelector(
    `img[data-id='${secondCardId}']`
  );
  firstCardFlip.parentElement.classList.add("animation");
  secondCardFlip.parentElement.classList.add("animation");
}
