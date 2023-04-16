function calc() {
  let a = 0;
  for (let i = 0; i < 1_000_000; i++) {
    a += i;
  }
  return a;
}

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function benchTime(func) {
  const start = Date.now();
  func();
  const end = Date.now();
  console.log('time: ' + (end - start));
}

function benchTimeLog(func) {
  console.time('console.time')
  func();
  console.timeEnd('console.time')
}

function benchPerformance(func) {
  const start = performance.now();
  func();
  const end = performance.now();
  console.log('time: ' + (end - start));
}


benchTimeLog(() => calc());
benchTimeLog(() => fib(30));
benchTime(() => calc());
benchTime(() => fib(30));
benchPerformance(() => calc());
benchPerformance(() => fib(30));
