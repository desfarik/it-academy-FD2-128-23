const cardSuits = ['♥', '♦', '♠', '♣'];
const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const cardScores = {
    2:['[♥2]', '[♦2]', '[♠2]', '[♣2]', '[♥J]', '[♦J]', '[♠J]', '[♣J]'],
    3:['[♥3]', '[♦3]', '[♠3]', '[♣3]', '[♥Q]', '[♦Q]', '[♠Q]', '[♣Q]'],
    4:['[♥4]', '[♦4]', '[♠4]', '[♣4]', '[♥K]', '[♦K]', '[♠K]', '[♣K]'],
    5:['[♥5]', '[♦5]', '[♠5]', '[♣5]'],
    6:['[♥6]', '[♦6]', '[♠6]', '[♣6]'],
    7:['[♥7]', '[♦7]', '[♠7]', '[♣7]'],
    8:['[♥8]', '[♦8]', '[♠8]', '[♣8]'],
    9:['[♥9]', '[♦9]', '[♠9]', '[♣9]'],
    10:['[♥10]', '[♦10]', '[♠10]', '[♣10]'],
    11:['[♥A]', '[♦A]', '[♠A]', '[♣A]'],
}
let cardDeck = []
let dealersScore = 0
let finalPlayersScore = {}
let players = []
let playersStatus = {}
let gameStatus = ''
let winners = []

function generateNumber(from, to) {
  return Math.floor(Math.random() * (to + 1 - from) + from);
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getCardScore(value) {
  for (let key in cardScores) {
    if (cardScores[key].includes(value)) {
      return +key
    }
  }
}

function shuffledDeck(array) {
  array.sort(() => Math.random() - 0.5);
  return array
}

function generateCardDeck() {
    for (let suit of cardSuits) {
        for (let number of cardNumbers) {
          let card = '[' + suit + number + ']';
          cardDeck.push(card);
        }
      }
    cardDeck = shuffledDeck(cardDeck);
}

class Player {
  constructor(name) {
    this.name = name;
    this.cardDeck = cardDeck;
    this.status = true
  }

  changeDealerStatusToFalseAsAPlayer() {
    playersStatus.Dealer = 'inactive'
  }

  changeAllPlayersStatusToFalse() {
    for (let key in playersStatus) {
      playersStatus[key] = 'inactive';
    }
  }

  dealCards() {
    this.cardsInHand = [];
    this.card1 = this.cardDeck.pop(this.cardDeck);
    this.card2 = this.cardDeck.pop(this.cardDeck);
    this.score1 = getCardScore(this.card1);
    this.score2 = getCardScore(this.card2);
    this.cardsInHand.push(this.card1, this.card2);
    this.totalScore = this.score1+this.score2
    playersStatus[this.name] = 'active'
    this.choice = alert(`${this.name}, you got ${this.cardsInHand}, total score - ${this.totalScore}`);
    this.scoreCheck()
  }
  
  askForMoreCards() {
    if (playersStatus[this.name] === 'active') {
    this.answer = confirm(`${this.name}, your cards ${this.cardsInHand}, total score - ${this.totalScore}. \nDealer's score: ${dealersScore} \nDo you want to take one more card?`);
    if (this.answer === true) {
      this.card3 = this.cardDeck.pop(this.cardDeck);
      this.score3 = getCardScore(this.card3);
      this.totalScore += this.score3;
      this.cardsInHand.push(this.card3);
      this.choice = alert(`${this.name}, you got ${this.cardsInHand}, total score - ${this.totalScore}`);
      finalPlayersScore[this.name] = this.totalScore;
      playersStatus[this.name] = 'active'
      this.scoreCheck()
    } else {
      playersStatus[this.name] = 'inactive'
      finalPlayersScore[this.name] = this.totalScore;
    }
  } 
}

  scoreCheck() {
      if (this.totalScore > 21 && playersStatus[this.name] === 'active') {
        alert(`Bust! ${this.name}, your total score - ${this.totalScore}, you lose. Better luck again :(`);
        playersStatus[this.name] = 'inactive'
        finalPlayersScore[this.name] = this.totalScore;
      }
      if (this.totalScore === 21 && playersStatus[this.name] === 'active') {
        alert(`Blackjack! Congratulations ${this.name}, your total score - ${this.totalScore}, you win!`);
        playersStatus[this.name] = 'inactive'
        finalPlayersScore[this.name] = this.totalScore;
      }
      if (finalPlayersScore.length > players.length) {
        gameStatus = 'checkForResult';
      }
    }
}

class Dealer extends Player {
  constructor(number = 1) {
    super('Dealer');
  }

  dealCards() {
    this.dealerHand = [];
    this.card1 = this.cardDeck.pop(this.cardDeck);
    this.card2 = this.cardDeck.pop(this.cardDeck);
    this.score1 = getCardScore(this.card1);
    this.score2 = getCardScore(this.card2);
    this.dealerHand.push(this.card1, this.card2);
    dealersScore = this.score1+this.score2
    playersStatus[this.name] = 'active'
    alert(`Dealer got ${this.dealerHand}, total dealer's score - ${dealersScore}`);
    this.scoreCheck()
  }

  askForMoreCards() {
    if (dealersScore < 17) {
      this.card3 = this.cardDeck.pop(this.cardDeck);
      this.score3 = getCardScore(this.card3);
      dealersScore += this.score3;
      this.dealerHand.push(this.card3);
      finalPlayersScore[this.name] = dealersScore;
      alert(`Dealer got ${this.dealerHand}, total dealer's score - ${dealersScore}`);
      this.scoreCheck()
    } 
    if (dealersScore > 17 && playersStatus.Dealer === 'active') {
      this.scoreCheck()
    }
  }

  scoreCheck() {
    if (dealersScore > 16 && dealersScore < 21 && playersStatus[this.name] === 'active' && gameStatus !== 'dealerSkip') {
      finalPlayersScore[this.name] = dealersScore;
      this.changeDealerStatusToFalseAsAPlayer();  // не придумал ничего лучше, чем прокинуть функцией :/

    }
    if (dealersScore === 21) {
      gameStatus = 'dealerWin';
      finalPlayersScore[this.name] = dealersScore;
      this.changeAllPlayersStatusToFalse();
    }
    if (dealersScore > 21) {
      gameStatus = 'dealerLose';
      finalPlayersScore[this.name] = dealersScore;
      this.changeAllPlayersStatusToFalse();
    }
  }
}


class Game {
  gameProcess() {
    this._welcomeMessage();
    this._initPlayers();
    this._startMessage();
    players.forEach(player => player.dealCards());
    do {
      players.forEach(player => player.askForMoreCards());
    } while (this.isEnd() !== true);
    this.end();
  }

  end() {
    if (gameStatus === 'dealerWin') {
      alert(`♥    ♦    ♠    ♣   Dealer got 21 points, dealer win!    ♣    ♠    ♦    ♥`)
    }
    if (gameStatus === 'dealerLose') {
      alert(`♥    ♦    ♠    ♣   Dealer got BUSTED, players win!    ♣    ♠    ♦    ♥`)
    }
    if (gameStatus === '') {
      let temp = this._chooseWinners();
      if (temp === []) {
        alert(`♥    ♦    ♠    ♣   Failed to choose a winner. Draw!    ♣    ♠    ♦    ♥`)
      }
      alert(`♥    ♦    ♠    ♣    Winners: ${temp}    ♣    ♠    ♦    ♥`)
    }
    return
  }

  isEnd() {
    let temp = Object.values(playersStatus);
    let check = temp.every(function(element) {
      if (element === 'inactive') {
        return true;
      } else {
        return false;
      }
    })
    return check
  }

  _welcomeMessage () {
    alert('Welcome to THREE AXES CASINO! \nYour $2,000 welcome bonus has already been credited to your account! \nEnjoy the game :)');
    alert('♥    ♦    ♠    ♣    Initialise blackjack...    ♣    ♠    ♦    ♥');
    generateCardDeck();
  }

  _initPlayers() {
    const playerCount = +prompt('Select number of players (1-4)', 1);
    if (playerCount > 4 || playerCount < 1 || typeof(playerCount) !== 'number') {
      alert('Error! Please select from 1 to 4 players.');
      this._initPlayers();
    }
    for (let i = 0; i < playerCount; i++) {
      const defaultName = `CasinoUser#777${i + 1}`;
      const playerName = prompt(`Enter your login (CasinoUser#777${i + 1})`, defaultName);
      const player = new Player(playerName);
      players.push(player);
    }
    players.push(new Dealer(1));
  }

  _startMessage() {
    alert('♥    ♦    ♠    ♣    Game is ready! Good luck :)    ♣    ♠    ♦    ♥')
  }

  _chooseWinners() {
    let winnerValue = []
    let gameValues = Object.values(finalPlayersScore)
    for (let i = 0; i < gameValues.length; i++) {
      if (gameValues[i] < 22) {
        winnerValue.push(gameValues[i])
      }
    }
    winnerValue = getMaxOfArray(winnerValue)
    let winner = [];
    for (var key in finalPlayersScore) {
       if (finalPlayersScore.hasOwnProperty(key) && finalPlayersScore[key] === winnerValue) {
          winner.push(key);
       }
    }
    return winner;
  }
}

const game = new Game();
game.gameProcess();