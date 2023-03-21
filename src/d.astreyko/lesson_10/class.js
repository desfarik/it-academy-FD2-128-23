class Animal {
  skinColor;

  constructor(gender, age) {
    this.gender = gender;
    this.age = age;
  }

  eat(food) {
    console.log(`Сьел ${food}`);
  }

  changeGender(newGender) {
    this.gender = newGender;
  }

  walk(metres) {
    console.log(`Прошел ${metres}`);
  }
}

const user = {
  name: 'ivan',
  changeName(name) {
    this.name = name;
  }
}

const animal1 = new Animal();
const animal2 = new Animal('women', 3);
animal1.age = 3;
animal1.changeGender('women');
console.log(animal1.gender);


class CoffeeMachine {
  engine = new Engine();

  start(){
    this.engine.start();
  }

  stop() {

  }
}

