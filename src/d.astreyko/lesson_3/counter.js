const num = +prompt('Введи число');

let counter = 0;

for (let i = 1; i<=num; i++) {
  if(i % 3 === 0) {
    counter++;
    console.log(i);
  }
}

console.log(`count: ${counter}`);
