function openDialog(action, title, text) {
  const page = document.querySelector(".page");
  const dialog = document.createElement("div");
  const currentTime = moment().format("HH:mm");
  dialog.classList.add("dialog-container");
  page.append(dialog);
  dialog.innerHTML = `
          <div class="dialog">
          <button
            class="button button-close above material-symbols-outlined"
            onclick="closeDialog()"
          >
            close
          </button>
          <div class="dialog-title">${title}</div>
          <form>
            <div class="form-container">
              <span class="form-title">Время:</span>
              <label>
                <input class="time" type="time" value="${currentTime}" />
              </label>
            </div>
            <div class="form-container">
              <span class="form-title">${text}:</span>
              <textarea class="textarea" name="textarea" required></textarea>
            </div>
            <div class="form-buttons">
              <button class="form-button button-save" type="submit">
                Сохранить
              </button>
              <button class="form-button" type="button" onclick="closeDialog()">
                Отмена
              </button>
            </div>
          </form>
        </div>
  `;
  dialog.addEventListener("submit", (event) => {
    action(event);
    closeDialog();
  });
}

function closeDialog() {
  const dialogContainer = document.querySelector(".dialog-container");
  dialogContainer.remove();
}
