class Deck {
    constructor() {
        this.cards = this._generateCards();
        this.shuffleDeck();
    }

    _generateCards() {
        const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        const scores = [2,3,4,5,6,7,8,9,10,2,3,4,11];
        const suits = ["\u2660", "\u2663", "\u2666", "\u2665"];
        const deck = [];

        for (let i=0; i<suits.length; i++) {
        for (let j=0; j<values.length; j++) {
            deck.push({
                value: values[j],
                suit: suits[i],
                score: scores[j],
            })
        }
    }
        return deck;
    }
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        return this.cards
    }
    takeCard() {
        return this.cards.shift();
    }
}
class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.status = 'play';
    }

    get totalScore() {
        let totalScore = 0;
        for (let i in this.cards) {
            totalScore += +(this.cards[i].score);
        }
        return totalScore;
    }

    addCard(card) {
        this.cards.push(card);
        if (this.totalScore > 21) {
        this.status = 'pass';
        }
    }

    askForCard() {
        
        if (confirm(`${this.name}, хотите взять еще одну карту?\nВаши карты: ${this.cards.map(card => (card.value + card.suit))}. Сумма очков: ${this.totalScore}`)) {
        return true;
        } else {
        this.status = 'pass';
        return false;
        }
    }

    isEnd() {
        return this.status !== 'play';
    }
}

class Croupier extends Player {

    constructor() {
        super('Croupier');
    }

    askForCard() {
        if (this.totalScore >= 16) {
        this.status = 'pass';
        return false;
        }
        return true;
    }
}

class Game {
    constructor() {
        this.players = [];
        this.cardsDeck = new Deck();
    }

    initPlayers() {
        let countPlayers = +prompt(`Введите количество игроков (1-4):`, 2);
        for (let i = 0; i < countPlayers; i++) {
        let givenName = `Игрок ${i + 1}`;
        let name = prompt(`Имя игрока ${i + 1}`, givenName);
        let player = new Player(name);
        this.players.push(player);
        }
        this.players.push(new Croupier());
        this.startGame()
    }
    isEndGame() {
        return this.players.every(player => player.isEnd());
    }
    startGame() {
        this.players.forEach(player => player.addCard(this.cardsDeck.takeCard()));
        while (!this.isEndGame()) {
        this.players.filter(player => !player.isEnd())
            .forEach(player => {
                if (player.askForCard()) {
                    player.addCard(this.cardsDeck.takeCard());
                }
            })
        }
        this.showResults();
    }
    
    showResults() {
        let candidates = this.players.filter(player => player.totalScore <= 21).sort((a, b) => b.totalScore - a.totalScore);
        let winners = candidates.filter(candidate => candidate.totalScore === candidates[0].totalScore);

        let showFinalWinners = winners.map(winner => `Победил ${winner.name} со счетом ${winner.totalScore}`)
        .join('\n');

        alert(`${showFinalWinners}`);
    }
}
const game = new Game();
game.initPlayers();