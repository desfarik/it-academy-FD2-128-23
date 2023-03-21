const game= new Game();

while (!game.isEnd()) {
  game.askPlayers();
}

game.showWinners()


askForCard(){
  promt(`Игрок ${this.name}. карты: [ 5♥, д♦] . Очков: 8. Хотите вытянуть еще одну карту?`)
}
