const list = document.querySelector('#list');
let items = restoreItems();
renderAllItems();

function renderAllItems() {
  items.forEach(item => {
    list.append(generateItemElement(item));
  });
}

function deleteTask(taskElement) {
  taskElement.remove();
  const idToDelete = +taskElement.id;
  items = items.filter(item => item.id !== idToDelete);
  storeItems();
}

function doneTask(taskElement) {
  const itemId = +taskElement.id;
  const item = items.find(item => item.id === itemId);
  item.done = !item.done;
  taskElement.classList.toggle('task-done');
  storeItems();
}

function onListContainerClick(event) {
  console.log(event);
  if (event.target.classList.contains('delete-button')) {
    deleteTask(event.target.parentElement);
  }
  if (event.target.classList.contains('done-button')) {
    doneTask(event.target.parentElement);
  }
}

list.addEventListener('click', onListContainerClick);

function generateItemElement(item) {
  const element = document.createElement('li');
  element.id = item.id;
  if (item.done) {
    element.classList.add('task-done');
  }
  element.innerHTML = `
      <span>${item.text}</span>
      <button class="done-button">done</button>
      <button class="delete-button">delete</button>`;
  return element;
}

function addItem(event) {
  event.preventDefault();
  const input = document.querySelector('#input');
  const newItem = {
    id: Date.now(),
    text: input.value,
    done: false,
  };
  items.push(newItem);
  storeItems();

  list.append(generateItemElement(newItem));
  input.value = '';
}

function storeItems() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreItems() {
  return JSON.parse(localStorage.getItem('items')) || [];
}