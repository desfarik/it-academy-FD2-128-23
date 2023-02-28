let counter = 0;
counter++;
console.log(counter);

let accessAllowed = age > 18 ? true : false;
let accessAllowed = age > 18;

function getMessage(age) {
  let message;
  if (age < 3) {
    message = 'Здравствуй, малыш!';
  } else if (age < 18) {
    message = 'Привет!';
  } else if (age < 100) {
    message = 'Здравствуйте!';
  } else {
    message = 'Какой необычный возраст!';
  }
  return message;
}
const message = getMessage2(2);

function getMessage2(age) {
  if (age < 3) {
    return 'Здравствуй, малыш!';
  }
  if (age < 18) {
    return 'Привет!';
  }
  if (age < 100) {
    return 'Здравствуйте!';
  }
  return 'Какой необычный возраст!';
}

console.log(message)

/*
(company == 'Netscape') ?
  alert('Верно!') : alert('Неправильно.');

(company == 'Netscape')
  ? alert('Верно!')
  : alert('Неправильно.');*/


