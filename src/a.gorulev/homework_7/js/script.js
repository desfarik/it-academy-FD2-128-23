const game = document.querySelector(".game");
const menu = document.querySelector(".menu");
const table = document.querySelector(".table");
const elementTurns = document.querySelector(".turns");
const elementAttempts = document.querySelector(".attempts");
let complexity;
let memoryGame = [];
let flippedCardsId = [];
let counter = 0;
let turns = DEFAULT_TURNS;
let firstCardName;
let attempts = 0;
let guessed;
elementTurns.textContent = turns;
elementAttempts.textContent = attempts;

function randomize(array) {
  const arraySort = array.slice();
  return arraySort.sort(() => Math.random() - 0.5);
}

function shuffleImg() {
  let imagesComplexity = [];
  let images = [];
  imagesComplexity = ALL_IMAGES.slice(0, complexity);
  for (let i = 0; i < 2; i++) {
    images.push(imagesComplexity);
  }
  memoryGame = randomize(images.flat());
}

function generateTable() {
  let lengthRow = 0;
  const max = Math.max(complexity, 2);
  const min = Math.min(complexity, 2);
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
      const src = memoryGame[j + lengthRow].src;
      const name = memoryGame[j + lengthRow].name;
      back.classList.add("back");
      back.setAttribute("src", `${src}`);
      back.setAttribute("data-id", `${i}${j}`);
      back.setAttribute("data-name", `${name}`);
      div.append(back);
      row.append(cell);
    }
    lengthRow += max;
  }
  guessed = min * max;
}

const start = (event) => {
  const target = event.target;
  if (target.tagName !== "LI") {
    return;
  }
  if (target.classList.contains("easy")) {
    complexity = EASY;
  } else if (target.classList.contains("medium")) {
    complexity = MEDIUM;
  } else if (target.classList.contains("hard")) {
    complexity = HARD;
  }
  menu.classList.add("hide");
  shuffleImg();
  generateTable();
  game.classList.remove("hide");
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
    showStatistics();
  } else {
    setTimeout(() => transition(firstCardId, secondCardId), 500);
    parent.classList.add("flip");
    flippedCardsId = [];
    counter = 0;
  }
  showVictory();
  elementTurns.classList.remove("animation-counter");
  elementAttempts.classList.remove("animation-counter");
};

function showStatistics() {
 if (turns === 0) {
    setTimeout(() => flipBackAllCards(), 500);
    turns = DEFAULT_TURNS;
    attempts++;
    setTimeout(() => showTextContent(elementAttempts, attempts), 1000);
    setTimeout(() => elementTurns.classList.remove("red"), 1000);
  }
}

game.addEventListener("click", flipCard);

function showTextContent(element, text) {
  element.textContent = text;
  element.classList.add("animation-counter");
}

function flipBackCards(firstCardId, secondCardId) {
  const firstCardFlip = document.querySelector(`img[data-id='${firstCardId}']`);
  const secondCardFlip = document.querySelector(`img[data-id='${secondCardId}']`);
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
  if (counter === guessed) {
    let victory = document.querySelector(".victory");
    setTimeout(() => victory.parentElement.classList.remove("hide"), 1500);
  }
}

function transition(firstCardId, secondCardId) {
  const firstCardFlip = document.querySelector(`img[data-id='${firstCardId}']`);
  const secondCardFlip = document.querySelector(`img[data-id='${secondCardId}']`);
  firstCardFlip.parentElement.classList.add("animation");
  secondCardFlip.parentElement.classList.add("animation");
}