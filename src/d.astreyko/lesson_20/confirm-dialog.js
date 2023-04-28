const DEFAULT_TEXT = 'Do you really want to delete this item? This process can\'t be undone.';
function openDialog(action, text = DEFAULT_TEXT){
  let dialog = document.createElement('div');
  document.body.append(dialog);
  dialog.innerHTML =`
  <div class="dialog_container">
<div class="are_you_sure">
  <button class="x_button" onclick="closeDialog()">x</button>
  <span class="img">x</span>
  <p class="large_text">Are you sure?</p>
  <p class="small_text">${text}</p>
  <div class="buttons">
    <button class="gray_button" onclick="closeDialog()">Cancel</button>
    <button class="confirm-button">Confirm</button>
  </div>
</div>
</div>
  `
  dialog.addEventListener('click', function (event){
    if(event.target.classList.contains('confirm-button')){
      action();
      closeDialog();
    }
  })
}

function closeDialog(){
  let dialog = document.querySelector('.dialog_container');
  dialog.remove();
}


