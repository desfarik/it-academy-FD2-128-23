class Player {
  constructor(name) {
    this.name = name;
  }
}

class Game {
  player = [];
  winner;
  start() {
    this.initPlayers();
  }
}
initPlayers();
{
  const playersCount = +prompt("Сколько будет игроков?, 2");
  for (let i; i < playersCount; i++) {
    const playerName = prompt(`Введите имя игрока №${i + 1}`);
    const player = new Player(playerName);
    this.players.push(player);
  }
}
const game = new Game();
game.start();
