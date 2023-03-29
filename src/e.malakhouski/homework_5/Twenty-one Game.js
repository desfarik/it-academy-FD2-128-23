const cardsValue = [
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["10", 10],
  ["В", 2],
  ["Д", 3],
  ["К", 4],
  ["А", 11],
];
const cardsSuit = ["\u2666", "\u2661", "\u2663", "\u2660"];

//КОЛОДА КАРТ

function generateDeckOfCards(arr1, arr2) {
  let cardsfull = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      cardsfull.push(arr2[j].concat(arr1[i]));
    }
  }
  return cardsfull;
}

function shuffleDeckOfCards(array) {
  array.sort(() => Math.random() - 0.5);
}

//СОЗДАТЬ ИГРОКОВ

function generatePlayer() {
  return new Player(prompt("Напишите имя игрока?"));
}

function generatePlayers(n) {
  const players = [];
  for (let i = 0; i < n; i++) {
    players.push(generatePlayer());
  }
  return players;
}

//ИФОРМАЦИЯ О СЧЕТЕ ВСЕХ И У КАЖДОГО НА РУКАХ КАРТАХ

function showScore(currentPlayers, croupier) {
  let scoreOfAll = "";
  for (let player of currentPlayers) {
    scoreOfAll += `У игрока ${player.name} ${player.getScore()} очков.` + "\n";
  }
  scoreOfAll += `У ${croupier.name} ${croupier.getScore()} очков.`;
  return alert(scoreOfAll);
}

function showCardsInfo(array) {
  let allCardsInfo = [];
  for (let card of array) {
    allCardsInfo.push(`"${card.value} ${card.suit}"`);
  }
  return allCardsInfo;
}

class Game {
  constructor(players, cardDeck, croupier) {
    this.players = players;
    this.cardDeck = cardDeck;
    this.croupier = croupier;
  }

  firstRound() {
    for (let player of this.players) {
      let currentCard = new Card(deckOfCards.pop());
      player.cards.push(currentCard);
      alert(
        `Игрок ${player.name} получает карту "${currentCard.value} ${currentCard.suit}".`
      );
    }
    let currentCardOfCroupier = new Card(deckOfCards.pop());
    croupier.cards.push(currentCardOfCroupier);
    alert(
      `${croupier.name} получает карту "${currentCardOfCroupier.value} ${currentCardOfCroupier.suit}".`
    );
    showScore(this.players, croupier);
  }

  nextRound() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].askForCard()) {
        this.players[i].addCard();
        if (this.players[i].getScore() > 21) {
          alert(`У игрока ${this.players[i].name} больше 21-го очка.`);
          let playerPass1 = this.players.splice(i, 1);
          i--;
          playersPass.push(playerPass1[0]);
        }
      } else {
        alert(`Игрок ${this.players[i].name} пасанул.`);
        let playerPass2 = this.players.splice(i, 1);
        i--;
        playersPass.push(playerPass2[0]);
      }
    }
    if (croupier.getScore() < 18) {
      croupier.askForCard();
    }

    showScore(this.players, croupier);
  }

  isEnd() {
    if (croupier.getScore() === 21) {
      alert("У крупье 21!");
      return true;
    }
    for (let player of this.players) {
      if (player.getScore() === 21) {
        alert(`У игрока ${player.name} 21!`);
        return true;
      }
    }
    if (this.players.length < 1) {
      return true;
    }
    return false;
  }

  compareResults(restPlayers, playersPass, croupier) {
    let resultListOfAll = restPlayers.concat(playersPass, croupier); 
    let resultList = resultListOfAll.filter((item) => item.getScore() <= 20); 
    resultList.sort((a, b) => b.getScore() - a.getScore());
    let resultListWithFewWinners = [];
    for (let i = 0; i < resultList.length; i++) {
      if (resultList[0].getScore() === resultList[i].getScore()) {
        resultListWithFewWinners.push(resultList[i]);
      }
    }
    console.log(resultListWithFewWinners);
    if (resultListWithFewWinners.length > 1) {
      return resultListWithFewWinners;
    } else {
      return resultList.reduce((a, b) => (a.getScore() > b.getScore() ? a : b)); 
    }
  }

  showResults(restPlayers, playersPass, croupier) {
    let resultListOfGame = restPlayers.concat(playersPass, croupier);
    let scoreOfGame = "Резальтаты игры:\n";
    for (let player of resultListOfGame) {
      scoreOfGame +=
        `У игрока ${player.name} ${player.getScore()} очков.` + "\n";
    }
    return alert(scoreOfGame);
  }

  showWinner() {
    this.showResults(this.players, playersPass, this.croupier);

    let winner = this.compareResults(this.players, playersPass, this.croupier);
    if (croupier.getScore() === 21) {
      return alert(`Выиграл ${croupier.name}!`);
    }
    for (let player of this.players) {
      if (player.getScore() === 21) {
        return alert(`Выиграл ${player.name}!`);
      }
    }
    if (Array.isArray(winner)) {
      let winners = "";
      for (let i = 0; i < winner.length; i++) {
        if (i + 1 === winner.length) {
          winners += winner[i].name;
        } else {
          winners += winner[i].name + " и ";
        }
      }
      return alert(`Выиграл ${winners}!`);
    } else {
      return alert(`Выиграл ${winner.name}!`);
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  getScore() {
    return this.cards.reduce((sum, card) => sum + card.score, 0);
  }

  askForCard() {
    return confirm(
      `Игрок ${this.name}. Карты: ${showCardsInfo(
        this.cards
      )}. Очков: ${this.getScore()}. Хотите вытянуть еще одну карту?`
    );
  }

  addCard() {
    let newCard = new Card(deckOfCards.shift());
    alert(
      `Игрок ${this.name} получает карту "${newCard.value} ${newCard.suit}".`
    );
    return this.cards.push(newCard);
  }
}

class Croupier extends Player {
  askForCard() {
    if (this.getScore() < 18) {
      this.addCard();
    }
  }
}

class Card {
  constructor(card) {
    this.value = card[0];
    this.score = card[1];
    this.suit = card[2];
  }
}

//НАЧАЛО ИГРЫ

alert(`Добро пожаловать в игру "Двадцать одно"!`);

let numberOfPlayers = +prompt(`Сколько человек будет играть?`, 2);

let currentPlayers = generatePlayers(numberOfPlayers);

let croupier = new Croupier("Крупье");

let deckOfCards = generateDeckOfCards(cardsSuit, cardsValue);

alert("Крупье тусует колоду карт.");
shuffleDeckOfCards(deckOfCards);

let playersPass = [];

const game = new Game(currentPlayers, deckOfCards, croupier);

//раздача всем игрокам карт в начале игры с верха колоды
game.firstRound();

//дальнейшая игра с выбором брать карту или пасануть с подачей карты с низа колоды
while (!game.isEnd()) {
  game.nextRound();
}
game.showWinner();

