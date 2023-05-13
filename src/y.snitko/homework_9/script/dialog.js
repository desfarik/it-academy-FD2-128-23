const DEFAULT_TEXT = 'Do you really want to add this item?';
function openDialog(action, text = DEFAULT_TEXT) {
  let dialog = document.createElement('div');
  document.body.append(dialog);
  dialog.innerHTML = `
    <div class="dialog_container">
    <p class="dialog-text">${text}</p>
    <input id="dialogInput">
    <div class="btn-container">
        <button class="cancel-btn" onclick="closeDialog()">Cancel</button>
        <button class="confirm-btn">Confirm</button>
    </div>
    </div>
  `;

  dialog.addEventListener('click', function (event) {
    if (event.target.classList.contains('confirm-btn')) {
      const input = dialog.querySelector('#dialogInput');
      action(input.value);
      closeDialog();
    }
  });
}

function closeDialog() {
  let dialog = document.querySelector('.dialog_container');
  dialog.remove();
}
