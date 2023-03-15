var ArrowFunc = function(arr) {
    return arr.map(i => String.fromCharCode(i)).join('');
  }

  console.log(ArrowFunc([66, 67, 68, 69, 70]))