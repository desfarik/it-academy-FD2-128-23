function showMessage(from, text = "текст не добавлен", smile) {
  let myVar;
  console.log(myVar);
  console.log( from + ": " + text  + ' ' + smile);
}


showMessage('anna', '', ':)');
showMessage('anna', undefined, ':)');
showMessage('anna', null, ':)');
showMessage('anna');
