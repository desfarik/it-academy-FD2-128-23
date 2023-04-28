function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function run() {
  console.log('1');
  await wait(1000);
  console.log('after 1sec');

  await wait(1000);
  console.log('after 1sec');

  await wait(1000);
  console.log('after 1sec');
}

function run() {
  console.log('1');
  wait(1000)
    .then(() => {
      console.log('after 1sec');
      wait(1000)
        .then(() => {
          console.log('after 1sec');
        });
    });
}

function run3() {
  console.log('1');
  setTimeout(() => {
    console.log('after 1sec');

    setTimeout(() => {
      console.log('after 1sec');

      setTimeout(() => {
        console.log('after 1sec');
      }, 1000);
    }, 1000);

  }, 1000);
}


