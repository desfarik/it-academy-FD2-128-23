class Data {
  CARD_SUITS = ["♥", "♠", "♣", "♦"];
  CARD_VALUES_AND_SCORES = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    В: 2,
    Д: 3,
    К: 4,
    Т: 11,
  };
  cardDeck = [];
  getCardDeck() {
    const cardValues = Object.keys(this.CARD_VALUES_AND_SCORES);
    const cardScores = Object.values(this.CARD_VALUES_AND_SCORES);
    for (let i = 0; i < cardValues.length; i++) {
      const value = cardValues[i];
      const score = cardScores[i];
      for (const suit of this.CARD_SUITS) {
        const card = new Card(suit, value, score);
        this.cardDeck.push(card);
      }
    }
  }
}
class Card {
  constructor(suit, value, score) {
    this.suit = suit;
    this.value = value;
    this.score = score;
  }
  get getCard() {
    return this.value + this.suit;
  }
}

class Game {
  data = new Data();
  sortCardDeck = [];
  players = [];
  winningPlayers = [];
  start() {
    this.data.getCardDeck();
    this.getRandomSortCardDesk();
    this.initQuantityPlayers();
    this.initPlayers();
  }
  get getRandomNumber() {
    const from = 0;
    const to = this.data.cardDeck.length - 1;
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
  getRandomSortCardDesk() {
    let indexRandom = [];
    while (true) {
      const num = this.getRandomNumber;
      if (!indexRandom.includes(num)) {
        indexRandom.push(num);
      }
      if (indexRandom.length === this.data.cardDeck.length) {
        break;
      }
    }
    this.sortCardDeck = indexRandom.map((index) => this.data.cardDeck[index]);
  }
  initQuantityPlayers() {
    while (true) {
      this.quantityPlayers = +prompt("Сколько игроков участвует в игре?", 2);
      if (this.quantityPlayers === 0) {
        this.end = true;
        break;
      } else if (this.quantityPlayers < 1 || this.quantityPlayers > 4) {
        alert("Количество игроков должно быть больше 1 и меньше 4");
      } else {
        break;
      }
    }
  }
  initPlayers() {
    for (let i = 0; i < this.quantityPlayers; i++) {
      const defaultName = `Игрок ${i + 1}`;
      const name = prompt(`Введите имя игрока №${i + 1}`, defaultName);
      if (name === null) {
        continue;
      } else {
        const player = new Player(name);
        this.players.push(player);
      }
    }
    if (this.players.length > 0) {
      this.quantityPlayers = this.players.length;
      this.players.push(new Croupier("Croupier"));
      this.quantityPlayers++;
    } else {
      this.end = true;
    }
  }
  askPlayers() {
    for (const player of this.players) {
      if (player.isEnd) {
        continue;
      }
      if (player.cardWithScore.length === 0) {
        player.addCard();
        player.showFirstCard();
      } else if (player.askForCard) {
        player.addCard();
        player.showAddCard();
      } else {
        player.showInfoPassedPlayer();
        player.tempName = player.name;
        player.name += " пас";
        this.quantityPlayers--;
      }
      if (player.sumScore > 21) {
        player.showInformAboutDefeat();
        player.name += " выбыл";
        this.quantityPlayers--;
      }
    }
    this.showListPlayers();
    if (this.quantityPlayers === 1) {
      this.findMaxScorePassedPlayers(false);
    }
  }
  showListPlayers() {
    const listPlayers = this.players.map(
      (player) => `Игрок ${player.name}: ${player.sumScore} очков.`
    );
    alert(`Игроки:
${listPlayers.join("\n")}`);
  }
  get isEnd() {
    return this.players.every((player) => player.isEnd);
  }
  getmaxScorePlayers(players) {
    this.maxScorePlayers = players.reduce(
      (max, player) => Math.max(max, player.sumScore),
      0
    );
  }
  findMaxScorePassedPlayers(isAllPlayersPassed) {
    this.passingPlayers = [];
    for (const player of this.players) {
      const condition = isAllPlayersPassed
        ? player.sumScore <= 21
        : player.name.includes("пас");
      if (condition) {
        this.passingPlayers.push(player);
      }
    }
    this.getmaxScorePlayers(this.passingPlayers);
  }

  findWinners() {
    this.findMaxScorePassedPlayers(true);
    for (const player of this.passingPlayers) {
      if (player.sumScore === this.maxScorePlayers) {
        player.name = player.tempName;
        const infoPlayer = `игрок ${player.name}: ${player.sumScore} очков`;
        this.winningPlayers.push(infoPlayer);
      }
    }
  }
  showWinners() {
    this.findWinners();
    if (this.end) {
      alert("Игра окончена");
    } else if (this.maxScorePlayers === 0) {
      alert("Нет победителей");
    } else {
      alert(`Победители:
${this.winningPlayers.join("\n")}`);
    }
  }
}

class Player {
  cardWithScore = [];
  constructor(name) {
    this.name = name;
  }
  addCard() {
    this.addCardWithScore();
    this.getScore();
    this.getCards();
  }
  addCardWithScore() {
    this.cardWithScore.push(game.sortCardDeck.shift());
  }
  getScore() {
    this.sumScore = this.cardWithScore.reduce(
      (sum, card) => sum + card.score,
      0
    );
  }
  getCards() {
    this.cards = this.cardWithScore.map((card) => {
      this.currentCard = card.getCard;
      return this.currentCard;
    });
  }
  get askForCard() {
    return confirm(
      `Игрок ${this.name}: 
карты:  ${this.cards.join(", ")};
очков:  ${this.sumScore}. 
Хотите вытянуть еще одну карту?`
    );
  }
  get isEnd() {
    if (this.name.includes("пас") || this.name.includes("выбыл")) {
      return true;
    } else if (
      game.quantityPlayers === 1 &&
      this.sumScore > game.maxScorePlayers
    ) {
      this.tempName = this.name;
      return true;
    } else if (game.quantityPlayers === 1 && game.maxScorePlayers === 0) {
      this.tempName = this.name;
      return true;
    } else {
      return false;
    }
  }
  showFirstCard() {
    alert(`Игрок ${this.name}:
Ваша карта ${this.cards}.
Итого очков ${this.sumScore}.`);
  }
  showAddCard() {
    alert(`Игрок ${this.name}.
Вы вытянули ${this.currentCard}. 
Ваши карты: ${this.cards.join(", ")}.
Итого очков ${this.sumScore}.`);
  }
  showInfoPassedPlayer() {
    alert(`Вы сделали пас.
Ваши карты: ${this.cards.join(", ")}.
Итого очков ${this.sumScore}.`);
  }
  showInformAboutDefeat() {
    alert(`Вы набрали больше 21 очков.
Вы выбыли.`);
  }
}

class Croupier extends Player {
  get askForCard() {
    if (game.quantityPlayers === 1) {
      game.findMaxScorePassedPlayers(false);
    } else {
      game.findMaxScorePassedPlayers(true);
    }
    if (game.quantityPlayers === 1 && this.sumScore > game.maxScorePlayers) {
      return false;
    } else if (game.quantityPlayers === 1 && game.maxScorePlayers === 0) {
      return false;
    } else if (this.sumScore > 19) {
      return false;
    } else if (this.sumScore >= 16 && this.sumScore === game.maxScorePlayers) {
      return false;
    } else if (this.sumScore < 16 || this.sumScore < game.maxScorePlayers) {
      return true;
    } else {
      return false;
    }
  }
  showFirstCard() {
    alert(`${this.name} получил ${this.cards}.
Итого очков ${this.sumScore}.`);
  }
  showAddCard() {
    alert(`${this.name} вытянул ${this.currentCard}. 
Карты: ${this.cards.join(", ")}.
Итого очков ${this.sumScore}.`);
  }
  showInfoPassedPlayer() {
    alert(`${this.name} сделал пас.
Карты: ${this.cards.join(", ")}.
Итого очков ${this.sumScore}.`);
  }
  showInformAboutDefeat() {
    alert(`${this.name} набрал больше 21 очков.
${this.name} выбыл.`);
  }
}

const game = new Game();
game.start();
while (!game.isEnd) {
  game.askPlayers();
}
game.showWinners();
