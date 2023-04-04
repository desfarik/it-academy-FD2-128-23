function ArrowStyle(array) {
    return array.map((item) => String.fromCharCode(item)).join('');
  }
  
  console.log(ArrowStyle([97]));