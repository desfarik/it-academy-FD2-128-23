let num=+prompt("введите  число");

let counter = 0;

for (let i=1; i <=num; i++) {
    if (i % 3 === 0) {
        counter++;
    }
   }
console.log(counter);
