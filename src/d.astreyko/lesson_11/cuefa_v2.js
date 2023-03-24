function generateNumber(from, to) {
  return Math.floor(Math.random() * (to + 1 - from) + from);
}

const CHOICE_PLACEHOLDERS = {
  1: 'Камень',
  2: 'Бумага',
  3: 'Ножницы',
};

class Player {
  constructor(name) {
    this.name = name;
  }

  makeChoice() {
    this.choice = +prompt(`Выберите жест: \n 1.Камень\n 2.Бумага\n 3.Ножницы`, 1);
  }
}

class Bot extends Player {
  constructor(number = 1) {
    super(`Bot ${number}`);
  }

  makeChoice() {
    this.choice = generateNumber(1, 3);
    alert(`${this.name} выбрал ${CHOICE_PLACEHOLDERS[this.choice]}`);
  }
}

class Game {
  players = [];
  winner = [];

  start() {
    this._initPlayers();
    this.players.forEach(player => player.makeChoice());
    if (this.canChooseWinner()) {
      this.winner = this._chooseWinners();
      this.showWinners();
    } else {
      alert('Победителя выбрать нельзя, переиграйте');
    }
  }

  _initPlayers() {
    const playerCount = +prompt('Сколько будет игроков', 2);
    for (let i = 0; i < playerCount; i++) {
      const defaultName = `Игрок ${i + 1}`;
      const playerName = prompt(`Введите имя игрока №${i + 1}`, defaultName);
      const player = new Player(playerName);
      this.players.push(player);
    }
    this.players.push(new Bot(1), new Bot(2));
  }

  _chooseWinners() {
    const choices = this.players.map(player => player.choice);
    const max = Math.max(...choices);
    const min = Math.min(...choices);
    if (max === 2) {
      return this.players.filter(player => player.choice === 2);
    }
    if (max === 3) {
      if (min !== 1) {
        return this.players.filter(player => player.choice === 3);
      }
      return this.players.filter(player => player.choice === 1);
    }
  }

  canChooseWinner() {
    const choices = this.players.map(player => player.choice);
    const uniqChoices = [...new Set(choices)];
    return uniqChoices.length === 2;
  }

  showWinners() {
    const winnerNames = this.winner.map(player => player.name)
      .join('\n');
    alert(`Победители: ${winnerNames}`);
  }
}

const game = new Game();
game.start();

