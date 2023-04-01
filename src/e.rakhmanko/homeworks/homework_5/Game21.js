// У МЕНЯ НЕ ПОЛУЧИЛОСЬ ДОПИСАТЬ ИГРУ ДО КОНЦА. ЗДЕСЬ ВСЕ, ЧТО СМОГЛА СООБРАЗИТЬ (
class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.score = [];
  }
  addCard(){
    this.cards.push(Deck.shuffeledDeck.shift())
    }
    getScore(){
        this.score = this.cards.reduce(
        (sum,card)=>
        sum + card.value,0
        );
    }
    get askForCard() {
        return confirm(
    `${this.name} у Вас следующие карты:${this.cards.join(", ")};
      сумма очков:${this.score}. 
      Хотите вытянуть еще карту?`
          )
        }  
    addNewCard() {
            while(this.askForCard === true){
              return this.addCard
            }
    } 
    }

class Croupier extends Player{
  constructor(cards) {
    super('Croupier', cards);
  }
  get askForCard() {
    if (score < 15) {
        return true;
      } else {
        return false;
      }
    }
}
class Deck {
  constructor() {
    this.shuffeledDeck = this.createDeck;
  }
  createDeck() {
    const suits = ["♥", "♠", "♣", "♦"];
    const cards = [
      { name: "туз", value: 11 },
      { name: "король", value: 4 },
      { name: "дама", value: 3 },
      { name: "валет", value: 2 },
      { name: "10", value: 10 },
      { name: "9", value: 9 },
      { name: "8", value: 8 },
      { name: "7", value: 7 },
      { name: "6", value: 6 },
      { name: "5", value: 5 },
      { name: "4", value: 4 },
      { name: "3", value: 3 },
      { name: "2", value: 2 },
    ];
    const deck = [];
    for (let suit of suits) {
      for (let card of cards) {
        deck.push({
          suit: suit,
          name: card.name,
          value: card.value,
        });
      }
    }
    deck.sort(() => {
      return Math.random() - 0.5;
    });
    return deck;
  }
}

class Game {
  constructor() {
    this.players = [];
    this.winner = [];
  }
  generatePlayer() {
    const defaultName = `Игрок ${i + 1}`;
    const playerName = prompt(`Введите имя игрока №${i + 1}`, defaultName);
    const player = new Player(playerName);
    this.players.push(player);
  }
  generateNumberOfPlayers() {
    if (this.players.length < 2 && this.players.length > 4) {
      alert("Число играков должно быть от 2 до 4");
    }
  }
  
    isEnd() {
      if (Croupier.getScore() === 21) {
        alert("Крупье набрал нужное колличество очков! ");
        return true;
      }
      for (let player of this.players) {
        if (player.getScore() === 21) {
          alert(`Игрок ${player.name} набрал нужное колличество очков!`);
          return true;
        }
      }
      
    }
  }


new Game();
