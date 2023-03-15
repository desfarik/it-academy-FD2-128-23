function showMessage(message, show) {
  show(message);
}

const showConsole = function (message) {
  console.log(message);
};

const showAlert = (message) => {
  alert(message);
};

const showAlert2 = message => alert(message);

const isBrowser = false;

const show = isBrowser ? showAlert : showConsole;

showMessage('hellog', show);

[1, 2, 3, 4].filter((item) => {
  return item % 2;
});


