function openDialogWindow(event) {
event.preventDefault();
  return new Promise((resolve) => {
    let dialogWindow = document.createElement("div");
    dialogWindow.classList.add('current_dialog_window');
    document.body.append(dialogWindow);
    dialogWindow.innerHTML = `
        <div class="window_wrapper">
            <div class="window">
                <button type="button" class="dialog_btn_cross close_button"></button>
                <img src="images/todo.svg"> 
                <h1>Add your task for today:</h1>
                <form action="" method="get" onsubmit="addTask(event)">
                    <input id="input" type="text" placeholder="Your task" required onkeydown="if(event.keyCode==13){return false;}">
                </form>
                <div class="control_buttons">
                    <button type="button" class="dialog_btn_cancel close_button">Cancel</button>
                    <button type="button" class="dialog_btn_add">Add</button>
                </div>
            </div>
        </div>
        `;
    dialogWindow.addEventListener('click', function(event) {
        if(event.target.classList.contains('dialog_btn_add')){
            let taskValue = document.querySelector('#input');
            dialogWindow.remove();
            setTimeout(() => resolve(taskValue.value));
        }
        if(event.target.classList.contains('close_button')) {
            dialogWindow .remove();
            setTimeout(() => resolve());
        }
    });
  });
}
