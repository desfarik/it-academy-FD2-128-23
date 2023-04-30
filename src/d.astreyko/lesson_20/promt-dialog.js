function openPromtDialog(action, text, confirmButtonText = 'Add') {
  let dialog = document.createElement('div');
  document.body.append(dialog);
  dialog.innerHTML = `
  <div class="dialog_container">
<div class="are_you_sure">
  <button class="x_button" onclick="closeDialog()">x</button>
  <p class="small_text">${text}</p>
  <input id="dialogInput">
  <div class="buttons">
    <button class="gray_button" onclick="closeDialog()">Cancel</button>
    <button class="confirm-button">Add</button>
  </div>
</div>
</div>
  `;
  dialog.addEventListener('click', function (event) {
    if (event.target.classList.contains('confirm-button')) {
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

