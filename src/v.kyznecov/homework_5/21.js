
class Game {
  constructor(players, cardDeck, croupier) {
    this.players = players;
    this.cardDeck = cardDeck;
    this.croupier = croupier;
  }

  start() {
    for (let player of this.players) {
      let playerCard = new Card(deckCards.pop());
      player.cards.push(playerCard);
      alert(
        `Игрок ${player.name} вытянул карту "${playerCard.value} ${playerCard.suit}".`
      );
    }
    let croupierCard = new Card(deckCards.pop());
    croupier.cards.push(croupierCard);
    alert(
      `${croupier.name} вытянул карту "${croupierCard.value} ${croupierCard.suit}".`
    );
    showScore(this.players, croupier);
  }

  nextRound() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].askForCard()) {
        this.players[i].addCard();
        if (this.players[i].getScore() > 21) {
          alert(`У игрока ${this.players[i].name} перебор.`);
          let overdo = this.players.splice(i, 1);
          i--;
          playersPass.push(overdo[0]);
        }
      } else {
        alert(`Игрок ${this.players[i].name} сказал Пасс.`);
        let pass = this.players.splice(i, 1);
        i--;
        playersPass.push(pass[0]);
      }
    }
    if (croupier.getScore() < 20) {
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

  compareResults(remainingPlayers, playersPass, croupier) {
    let resultAll = remainingPlayers.concat(playersPass, croupier);
    let resultList = resultAll.filter((item) => item.getScore() <= 20);
    resultList.sort((a, b) => b.getScore() - a.getScore());
    let multipleWinners = [];
    for (let i = 0; i < resultList.length; i++) {
      if (resultList[0].getScore() === resultList[i].getScore()) {
        multipleWinners.push(resultList[i]);
      }
    }

    if (multipleWinners.length > 1) {
      return multipleWinners;
    } else {
      return resultList.reduce((a, b) => (a.getScore() > b.getScore() ? a : b));
    }
  }

  showResults(remainingPlayers, playersPass, croupier) {
    let resultGame = remainingPlayers.concat(playersPass, croupier);
    let total = "Резальтаты игры:\n";
    for (let player of resultGame) {
      total +=
        `У игрока ${player.name} ${player.getScore()} очков.` + "\n";
    }
    return alert(total);
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


////////////////////////////

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
      `Игрок ${this.name}. Ваши карты: ${cardInformation(
        this.cards
 )}. Ваши очки: ${this.getScore()}. Хотите продолжить игру?`
    );
  }

  addCard() {
    let newCard = new Card(deckCards.shift());
    alert(
      `Игрок ${this.name} вытянул карту "${newCard.value} ${newCard.suit}".`
    );
    return this.cards.push(newCard);
  }
}
///////////////////////////



class Croupier extends Player {
  askForCard() {
    if (this.getScore() < 20) {
      this.addCard();
    }
  }
}


////////////////////////////
class Card {
  constructor(card) {
    this.value = card[0];
    this.score = card[1];
    this.suit = card[2];
  }
}




let numberOfPlayers = +prompt('Сколько будет игроков?', 2);

function namePlayer() {
  return new Player(prompt("Введите имя"));
}

function getnames(n) {
  const names = [];
  for (let i = 0; i < n; i++) {
    names.push(namePlayer());
  }
  return names;
}
let playerNames = getnames(numberOfPlayers);
let croupier = new Croupier("Крупье");

const cardSuit = ["♠", "♥", "♦", "♣"];
const cardValue = [
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["10", 10],
  ["Валет", 2],
  ["Дама", 3],
  ["Король", 4],
  ["Туз", 11],
];

function generateDeck(arr1, arr2) {
  let deck = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      deck.push(arr2[j].concat(arr1[i]));
    }
  }
  return deck;
}

function hangOutCards(array) {
  array.sort(() => Math.random() - 0.5);
}

let deckCards = generateDeck(cardSuit, cardValue);
hangOutCards(deckCards);

function showScore(currentPlayers, croupier) {
  let totalScore = "";
  for (let player of currentPlayers) {
    totalScore += `У игрока ${player.name} ${player.getScore()} очков.` + "\n";
  }
  totalScore += `У ${croupier.name} ${croupier.getScore()} очков.`;
  return alert(totalScore);
}

function cardInformation(array) {
  let Info = [];
  for (let card of array) {
    Info.push(`"${card.value} ${card.suit}"`);
  }
  return Info;
}
let playersPass = [];



const game = new Game(playerNames, deckCards, croupier);
game.start();
while (!game.isEnd()) {
  game.nextRound();
}
game.showWinner();