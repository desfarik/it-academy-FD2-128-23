let suits = ["пик", "бубен", "крести", "червей"];
let values = ["Двойка", "Тройка", "Четверка", "Пятерка", "Шестерка", "Семерка", 
"Восьмерка", "Девятка", "Десятка", "Валет", "Дама", "Король", "Туз"];
let score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11];
let deck = [];
let players = [];

class card {
  constructor (shifted) {
    shifted = deck.shift();
    this.Value = shifted.Value;
    this.Score = shifted.Score;
    this.Suit = shifted.Suit;
  }
}

class croupier {
  constructor() {
    this.name = 'Крупье';
    this.score = 0;
    this.cards = [];
    this.end = false;
  }

  askForCard() {
    if (this.score < 17) {
    this.addCard();
    (this.score > 21 ? this.isEnd('over') 
    & alert(`Перебор! У крупье ${this.score} очков :(`) : this.getScore());
    } else {
      this.isEnd('over');
    }
  }

  isEnd(i) {
    if (i == 'over') {
      this.end = true;
    }
  }

  addCard() {
    let temp = new card();
    this.score += +temp.Score;
    this.cards.push(temp);
  }
  
  getScore() {
    alert(`У крупье ${this.score} очков, его карты: ${JSON.stringify(this.cards)}`);
  }
}

class player extends croupier {
  constructor() {
    super('temp', 0, [], false);
    this.name = prompt('Введите имя добавляемого игрока:');
  }

  getScore() {
    alert(`${this.name}, у вас ${this.score} очков, ваши карты: ${JSON.stringify(this.cards)}`);
  }

  askForCard() {
    if (confirm(`${this.name}, вам нужна карта? У вас ${this.score} очков, 
    ваши карты: ${JSON.stringify(this.cards)}`)) {
      this.addCard(); 
      (this.score > 21 ? this.isEnd('over') 
      & alert(`Перебор! У вас ${this.score} очков :(`) : this.getScore());
    } else {
      this.isEnd('over');
    }
  }

}

class game {
  constructor() {
    this.players = players;
  }

  getRandomDeck() {
    for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Score: score[x], Suit: suits[i] };
        deck.push(card);
    }
  }
  
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  }

  gameStart() {
    let playerAmount = prompt('Сколько будет игроков? (от 2 до 4)');
    switch(playerAmount) {
      case '2' :
      players.push(new player());
      players.push(new player());
      break;
      case '3' :
      players.push(new player());
      players.push(new player());
      players.push(new player());
      break;
      case '4' :
      players.push(new player());
      players.push(new player());
      players.push(new player());
      players.push(new player());
      break;
      default:
      alert('Неверное количество игроков');
    }
    players.push(new croupier());
    this.getRandomDeck();
    this.gameTurnsTillEnd(players);
    this.showWinners();
    }

    gameTurnsTillEnd(players) {
      let playerLeaves;
      let trueForAll;
      do {
      playerLeaves = (element) => element.end == true;
      trueForAll = players.every(playerLeaves);
      for (let i=0; i<players.length; i++) {
        if (!players[i].end) {
          players[i].askForCard();
        }
      } } while (trueForAll !== true);
    } 

  showWinners() {
    let winnerNames = [];
    let delLosers = players.filter(function (max) {
    return max.score <= 21;
    }).sort((a, b) => (a.score > b.score) ? -1 : 0);
    let winners = delLosers.filter(function (m) {
      return m.score === delLosers[0].score;
    })
    winners.forEach(element => winnerNames.push(element.name));
    alert(`Победил(и): ${winnerNames}, набрав ${winners[0].score} очков. Поздравляем!`);
  }
}

function startOnClick() {
  let start = new game();
  start.gameStart();
}

