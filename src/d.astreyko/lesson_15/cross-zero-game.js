class Cell {
  value;

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('cell');
  }

  setValue(value) {
    this.value = value;
    this.element.textContent = value;
  }

  hasValue() {
    return !!this.value;
  }
}

class Board {
  cellsMap = [];

  constructor(size) {
    this.size = size;
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(new Cell());
      }
      this.cellsMap.push(row);
    }
    this.element = this.buildHTMLElement();
  }

  get inlineCells() {
    return this.cellsMap.flat();
  }

  buildHTMLElement() {
    const grid = document.createElement('div');
    grid.classList.add('game-board');
    this.inlineCells.forEach(cell => grid.append(cell.element));
    grid.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    return grid;
  }
}

class Player {
  constructor(name, choice) {
    this.name = name;
    this.choice = choice;
  }
}

class Game {
  constructor(player1, player2, size) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board(size);
    this.turn = 0;
  }

  nextPlayer() {
    return this.turn % 2 ? this.player2 : this.player1;
  }

  start() {
    this.board.element.addEventListener('click', this.onMove);
  }

  onMove = (event) => {
    const cell = this.board.inlineCells.find(cell => cell.element === event.target);
    if (cell && !cell.hasValue()) {
      const player = this.nextPlayer();
      cell.setValue(player.choice);
      this.turn++;
    }
    const winRow = this.findWinRow();
    if (winRow) {
      // setTimeout(()=>alert('winer'),0);
    }
  };

  findWinRow() {
    const horizontalRows = this.getHorizontals();
    let winRow = horizontalRows.find(row => row.every(value => value) && new Set(row).size === 1);
    if (winRow) {
      return winRow;
    }
    const verticals = this.getVerticals();
    winRow = verticals.find(row => row.every(value => value) && new Set(row).size === 1);
    return winRow;
  }

  getHorizontals() {
    return this.board.cellsMap.map(row => row.map(cell => cell.value));
  }

  getVerticals() {
    const size = this.board.cellsMap.length;
    const verticals = [];
    for (let i = 0; i < size; i++) {
      const column = this.board.cellsMap.map(row => row[i].value);
      verticals.push(column);
    }
    return verticals;
  }
}

function start(size) {
  const container = document.querySelector('.game-container');

  const p1 = new Player('Player1', 'X');
  const p2 = new Player('Player2', '0');
  const game = new Game(p1, p2, size);
  container.append(game.board.element);
  game.start();
}




const ALL_IMAGES = [1,2,3,4,5,6];

const EASY = 3;
const MEDIUM = 4;
const HARD = 5;

const gameImages = ALL_IMAGES.slice(0, MEDIUM);

[...gameImages, ...gameImages, ...gameImages, ...gameImages]



