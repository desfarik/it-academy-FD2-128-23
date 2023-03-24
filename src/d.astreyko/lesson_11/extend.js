class Worker {

  constructor(name, position, moneyPerDay) {
    this.name = name;
    this.position = position;
    this.moneyPerDay = moneyPerDay;
  }

  calcSalary(day) {
    return day * this.moneyPerDay;
  }
}

class Boss extends Worker {
  constructor(name, moneyPerDay) {
    super(name, 'BOSS', moneyPerDay);
  }

  calcSalary(day) {
    return super.calcSalary(day) * 5;
  }
}

const fabricWorkers = [new Worker(), new Boss(), new Boss()];

fabricWorkers.reduce((allSallary, worker) => allSallary + worker.moneyPerDay * 250, 0);

class Player {
  constructor(name, cards) {
    this.name = name;
    this.card = cards;
  }

  askForCard() {
    return confirm('Вам нужна карта или нет? Ваши карты такие-то очков сотолько');
  }
}

class Croupier extends Player {

  constructor(cards) {
    super('Croupier', cards);
  }

  askForCard() {
    if (score < 15) {
      return true;
    } else {
      return false;
    }
  }
}

new Croupier([]);
