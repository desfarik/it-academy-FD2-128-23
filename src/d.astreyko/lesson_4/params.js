function showMessage(from, text) { // параметры: from, text
  console.log(from + ': ' + text);
}

const name = 'Anna';
const text = 'Hi';

showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', 'и тебе привет!'); // Аня: Привет! (*)
showMessage(name, text);

function showMessage2(from, text) {
  const styledFrom = '*' + from + '*'; // немного украсим "from"
  alert(styledFrom + ': ' + text);

  alert(`*${from}*: ${text}`);
}
