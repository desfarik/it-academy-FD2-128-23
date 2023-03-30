class Card{
    constructor(suit,value ){
        this.suit = suit;
        this.value = value;
    }

    get score(){
        switch (this.value) {
            case'J':
                return 2;
            case 'Q':
                return 3;
            case'K':
                return 4;
            case 'A':
                return 11;
            default:
                return +this.value;
        }
    }

    get fullCardName(){
        return `${this.value}${this.suit}`;
    }
}

class CardDeck{
    constructor(){
        this.cards = this._createCardDeck();
        this.shuffleCards();
    }

    _createCardDeck(){
        const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const suits = ['♠','♥','♣','♦'];
        const cardsArray = [];
         for (let suit of suits){
            for (let value of values){
                cardsArray.push(new Card(suit, value));
            }
        }
        return cardsArray;
    }

    shuffleCards(){
        this.cards.sort(() => Math.random() - 0.5);
    }

    popCard(){
       return this.cards.pop();
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.cards = [];
        this.status = 'active';
    }

    get score(){
        return this.cards.reduce((acc,card) => acc + card.score, 0);
    }

    addCard(card){
        this.cards.push(card);
            if (this.score > 21){
                this.status = 'over';
                  return  alert(`Игрок ${this.name} выбыл, ему выпала карта ${card.fullCardName}`);
            }        
    }

    askForCard(){
        let answer = confirm(`игрок ${this.name} нужна ли ещё карта? \n
        У вас следующие карты: ${this.cards.map(card => card.fullCardName)}\n
        Количество очков: ${this.score}`);
        if(answer){
            return true;
        }else{
            this.status = 'pass';
            return false;
        }
    }

    isEnd(){
        return this.status !== 'active';
    }
}

class Diller extends Player{
    constructor(){
        super('Diller')
    }
    askForCard(){
        if(this.score >= 18){
            this.status = 'pass';
            alert('Diller набрал больше 17');
            return false;
        }else{
            return true;
        }       
    }
}

class Game{
    constructor(){
        this.players = [];
        this.cardsDeck = new CardDeck();
    }

    _initPlayers(){
        let playerCount = +prompt('Введите количество игроков',2);
        if(playerCount < 2 || playerCount > 4){
            alert('Введите количество от 2 до 4')
            return this._initPlayers()
        }
        for (let i = 0; i < playerCount; i++){
            const defaultName = `Игрок ${i + 1}`;
            const name = prompt(`Введите имя игрока ${i + 1}`, defaultName);
            const player = new Player(name);
            this.players.push(player);
        }
        this.players.push(new Diller());
    }
    
    isGameEnd(){
        return this.players.every(player => player.isEnd())
    }

    start(){
        this.players.forEach(player => player.addCard(this.cardsDeck.popCard()));
        while(!this.isGameEnd()){
            this.players.filter(player => !player.isEnd())
            .forEach(player => {
               if (player.askForCard()){
                player.addCard(this.cardsDeck.popCard());
               }
            });

        }
    }

    chooseWinners(){
       let players =  this.players.filter(player => player.score <= 21 ).sort((pl1,pl2) => pl2.score - pl1.score);
       let firstPlayer = players[0];
       let winners = players.filter(player => player.score === firstPlayer.score);
       let winMessage = winners.map(winner => `${winner.name}: ${winner.score}`).join('\n');
       alert(`Победители: \n ${winMessage}`)
    }
}

const game = new Game();
game._initPlayers();
game.start();
game.chooseWinners();


