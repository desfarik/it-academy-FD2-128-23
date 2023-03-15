let global = 1;

function showMessage() {

  const showLocal = 2;

  function showName() {
    let localX2 = 3;
    {
      let localX3 = 4;
      console.log(localX3 + global);
    }
    console.log(localX3);

  }

  showName();
  console.log('hello')
}



for (let i = 0; i <10; i++) {
  showMessage()
}
