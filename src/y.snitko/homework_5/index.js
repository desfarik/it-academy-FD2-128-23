class Card {
  constructor(suit, value, score) {
    this.suit = suit;
    this.value = value;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.generateDeck();
    this.randomizeDeck();
  }

  generateDeck() {
    const suits = ['\u2663', '\u2665', '\u2666', '\u2660'];
    const values = [
      { name: '2', score: 2 },
      { name: '3', score: 3 },
      { name: '4', score: 4 },
      { name: '5', score: 5 },
      { name: '6', score: 6 },
      { name: '7', score: 7 },
      { name: '8', score: 8 },
      { name: '9', score: 9 },
      { name: '10', score: 10 },
      { name: 'J', score: 2 },
      { name: 'Q', score: 3 },
      { name: 'K', score: 4 },
      { name: 'A', score: 11 },
    ];
    for (let suit of suits) {
      for (let value of values) {
        this.cards.push(new Card(suit, value.name, value.score));
      }
    }
  }

  randomizeDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  distribCard() {
    return this.cards.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  isEnd() {
    return this.getScore() > 21;
  }

  getScore() {
    let score = 0;
    for (const card of this.cards) {
      score += card.score;
    }
    return score;
  }

  askForCard() {
    return confirm(
      `${this.name}, Ваши карты: ${this.cards
        .map((card) => `${card.value} ${card.suit}`)
        .join(', ')}. Очки: ${this.getScore()}\nХотите вытянуть еще одну карту?`
    );
  }

  addCard(card) {
    this.cards.push(card);
  }
}

class Croupier extends Player {
  constructor(name) {
    super(name);
  }

  askForCard() {
    const score = this.getScore();
    if (score < 17) {
      return true;
    }
    return false;
  }
}

class Game {
  constructor() {
    this.players = [];
    this.deck = new Deck();
  }

  addPlayers() {
    const numberOfPlayers = +prompt('Введите количество игроков (2-4)', 2);
    if (numberOfPlayers < 2 || numberOfPlayers > 4) {
      alert('Введите число от 2 до 4');
      return this.addPlayers();
    }
    for (let index = 0; index < numberOfPlayers; index++) {
      const playerName = prompt(
        `Введите имя ${index + 1} игрока`,
        `Игрок ${index + 1}`
      );
      this.players.push(new Player(playerName));
    }
    this.players.push(new Croupier('Крупье'));
  }

  startPlayerCard() {
    for (let player of this.players) {
      player.addCard(this.deck.distribCard());
    }
  }

  startPlayersValue() {
    let startValue = 'Исходные карты игроков:\n';
    for (let player of this.players) {
      startValue += `${player.name}, вашa картa: ${player.cards
        .map((card) => `${card.value} ${card.suit}`)
        .join(', ')}. Очки: ${player.getScore()}\n`;
    }
    alert(startValue);
  }

  resultPlayersValue() {
    let resultValue = 'Результаты игроков:\n';
    for (let player of this.players) {
      resultValue += `${player.name}, вашa картa: ${player.cards
        .map((card) => `${card.value} ${card.suit}`)
        .join(', ')}. Очки: ${player.getScore()}\n`;
    }
    alert(resultValue);
  }

  showPlayersScoreTable() {
    let scoreTable = '';
    for (let index = 0; index < this.players.length; index++) {
      const player = this.players[index];
      let sumScore = player.getScore();
      scoreTable += `${player.name}: `;
      player.cards.forEach((card) => {
        scoreTable += `${card.value} ${card.suit}, `;
      });
      scoreTable += `Очки: ${sumScore}\n`;
    }
    alert(scoreTable);
  }

  askPlayers() {
    while (!this.isEnd()) {
      for (let player of this.players) {
        const message = `${player.name}. Карты: ${player.cards
          .map((card) => `${card.value} ${card.suit}`)
          .join(
            ', '
          )}.\nОчков: ${player.getScore()}\nХотите вытянуть еще одну карту?`;
        const answer = confirm(message);
        if (answer) {
          const card = this.deck.distribCard();
          player.addCard(card);
          alert(
            `Вы вытянули ${card.value} ${
              card.suit
            }. Итого очков: ${player.getScore()}`
          );
          if (player.getScore() > 21) {
            alert(`У ${player.name} больше 21 очка`);
            return;
          } else if (player.getScore() === 21) {
            alert(`У ${player.name} 21 очко`);
            return;
          }
        }
        this.showPlayersScoreTable();
      }
    }
  }

  showWinners() {
    const scores = this.players
      .map((player) => player.getScore())
      .filter((score) => score <= 21);
    const finalScore = Math.max(...scores);
    const winPlayers = this.players.filter(
      (player) => player.getScore() === finalScore
    );
    const message =
      winPlayers.length === 1
        ? `Победил ${
            winPlayers[0].name
          } с количеством очков ${winPlayers[0].getScore()}.`
        : `Ничья! Победили: ${winPlayers
            .map((winPlayer) => winPlayer.name)
            .join(', ')} с количеством очков ${finalScore}!`;
    alert(message);
  }

  isEnd() {
    return this.players.every((player) => player.isEnd());
  }

  gameInit() {
    this.addPlayers();
    this.startPlayerCard();
    this.startPlayersValue();
    this.askPlayers();
    this.resultPlayersValue();
    this.showWinners();
  }
}

const launchGame = new Game();
launchGame.gameInit();
