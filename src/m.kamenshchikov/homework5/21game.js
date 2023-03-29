class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  get score() {
    switch (this.value) {
      case "V":
        return 2;
      case "D":
        return 3;
      case "K":
        return 4;
      case "T":
        return 11;
      default:
        return +this.value;
    }
  }
}
class CardDeck {
  constructor() {
    this.cards = this._generateCards();
    this.shuffle();
  }
  _generateCards() {
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "V",
      "D",
      "K",
      "T",
    ];
    const suits = ["♡", "♤", "♧", "♢"];
    let cards = [];
    for (let suit of suits) {
      for (let value of values) {
        cards.push(new Card(suit, value));
      }
    }
    return cards;
  }
  shuffle() {
    this.cards.sort(() => Math.random() - 0.5);
  }
  popCard() {
    return this.cards.pop();
  }
}
class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.status = "active";
  }
  get score() {
    return this.cards.reduce((acc, card) => acc + card.score, 0);
  }
  addCard(card) {
    this.cards.push(card);
    if (this.score > 21) {
      this.status = "over";
    }
  }
  askForCard() {
    let answer = confirm(`Игрок ${this.name} нужна ли вам карта?`);
    if (answer) {
      return true;
    } else {
      this.status = "Pass";
      return false;
    }
  }
  isEnd() {
    return this.status !== "active";
  }
}
class Game {
  constructor() {
    this.players = [];
    this.cardsDeck = new CardDeck();
  }
  initPlayer() {
    let countPlayers = +prompt("Введите кол-во игроков", 2);
    for (let i = 0; i < countPlayers; i++) {
      let name = prompt(`Имя игрока ${i + 1}`, `игрок ${i + 1}`);
      let player = new Player(name);
      this.players.push(player);
    }
  }
  isEndGame() {
    return this.players.every((player) => player.isEnd());
  }
  startGame() {
    this.players.forEach((player) => player.addCard(this.cardsDeck.popCard()));
    while (!this.isEndGame) {
      this.players
        .filter((player) => !player.isEnd())
        .forEach((player) => {
          if (player.askForCard()) {
            player.addCard(this.cardsDeck.popCard());
          }
        });
    }
  }
  showWinners() {
    let players = this.players
      .filter((player) => player.score <= 21)
      .sort((p1, p2) => p2.score - p1.score);
    let firstPlayer = players[0];
    let winners = players.filter(
      (player) => player.score === firstPlayer.score
    );
    let winnersMessage = winners.map(
      (winner) => `${winner.name}: ${winner.score}`
    );
    alert(`Победители: \n ${winnersMessage}`);
  }
}
const game = new Game();
game.startGame();
game.initPlayer();
game.showWinners();
