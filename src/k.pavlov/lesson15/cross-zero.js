class Cell {
    constructor() {
        this.element = document.querySelector('div');
        this.element.classList.add('cell');

    }
    set(value) {
        this.value = value;
        this.element.classList.add(value);
    }
}


class Board {
    cellsMap = [];
    
    constructor(size) {
        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                row.push(new Cell());
            }
            this.cellsMap.push(row)
        }
    }
}