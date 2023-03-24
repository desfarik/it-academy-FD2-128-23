const game = new Game();

while (!game.isEnd()) {
  game.askPlayers();
}

game.showWinners();

askForCard();
{
  promt(`Игрок ${this.name}. карты: [ 5♥, д♦] . Очков: 8. Хотите вытянуть еще одну карту?`);
}

for (let suit of suits) {
  for (let card of cards) {
    new Card(suit, card);
  }
}

const CARD_SCORES = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  valet: 2,
  dama: 3,
};
