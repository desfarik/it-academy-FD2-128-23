const tasksDate = document.querySelector(".tasks-date");
const taskContainer = document.querySelector(".task-container");
let list = [];
let items = restoreItems();

function onClickDay(event) {
  let target = event.target;
  if (target.tagName === "SPAN") {
    target = target.closest(".day");
  }
  if (!target.classList.contains("day")) {
    return;
  }
  resetList();
  showDialog(target);
  resetPrevSelectedDay();
  target.classList.add("selected");
  toggleActiveToday(target);
  showSelectedDate(target);
  renderItems();
  toggleButtonClear();
}

function showDialog(element) {
  if (element.classList.contains("selected")) {
    openDialog((event) => addItem(event), TITLE_DIALOG, NAME_INPUT);
  }
}

function addItem(event) {
  event.preventDefault();
  createNewItem();
  toggleButtonClear();
  crossOutItemDay();
}

function createNewItem() {
  const textarea = document.querySelector(".textarea");
  const elementTime = document.querySelector(".time");
  const newItem = {
    text: textarea.value,
    time: elementTime.value,
    id: Date.now(),
    done: false,
    idDay: tasksDate.dataset.date,
    get idSort() {
      return this.time.slice(0, 2) + this.time.slice(-2);
    },
  };
  items.push(newItem);
  items.sort((item1, item2) => item1.idSort - item2.idSort);
  storeItems();
  renderItem(newItem);
  addTaskDay();
}

function storeItems() {
  localStorage.setItem("items", JSON.stringify(items));
}

function restoreItems() {
  return JSON.parse(localStorage.getItem("items")) || [];
}

function generateItemElement(item) {
  const itemElement = document.createElement("div");
  const dataId = tasksDate.dataset.date;
  itemElement.classList.add("task");
  if (item.done) {
    itemElement.classList.add("done");
  }
  itemElement.dataset.sortId = item.idSort;
  itemElement.dataset.id = dataId;
  itemElement.id = item.id;
  itemElement.innerHTML = `<div class="task-content">
  <span class="task-content-time">${item.time}</span>
  <span class="task-content-text">${item.text}</span>
  </div>
  <div>
  <button class="button button-task above material-symbols-outlined" onclick="crossOutItem(event)">done</button>
  <button class="button button-task above material-symbols-outlined" onclick="deleteItem(event)">close</button>
  </div>`;
  return itemElement;
}

function renderItem(item) {
  list.push(generateItemElement(item));
  list
    .sort((id1, id2) => id1.dataset.sortId - id2.dataset.sortId)
    .forEach((element) => taskContainer.append(element));
}

function deleteItem(event) {
  const parent = event.target.closest(".task");
  const idToDelete = +parent.id;
  items = items.filter((item) => item.id !== idToDelete);
  storeItems();
  parent.remove();
  list.map((element, i) => {
    if (element === parent) {
      list.splice(i, 1);
    }
  });
  deleteItemDay();
}

function deleteItemDay() {
  const elementSelected = document.querySelector(".selected");
  const elementContentDay = elementSelected.querySelector(".day-content");
  const idElement = elementSelected.dataset.date;
  const itemsDay = getItemsDay(idElement);
  if (!itemsDay.length) {
    elementContentDay.innerHTML = "";
    elementContentDay.classList.add("hidden");
    toggleButtonClear();
    return;
  }
  elementContentDay.innerHTML = generateContentDay(itemsDay);
  crossOutItemDay();
  renderQuantityTasks(elementSelected, itemsDay);
}

function generateContentDay(items) {
  let html = "";
  let itemsDay;
  if (items.length === 2) {
    itemsDay = items.slice(0, 2);
  } else {
    itemsDay = items.slice(0, 1);
  }
  itemsDay.forEach((item) => {
    html += getContentDay(item);
  });
  return html;
}

function getContentDay(item) {
  return `<span class="day-task" data-id="${item.id}">${item.time} ${item.text}</span>`;
}

function clearList() {
  const elementSelected = document.querySelector(".selected");
  const elementContentDay = elementSelected.querySelector(".day-content");
  const elementMoreDay = elementSelected.lastElementChild;
  const idToDelete = elementSelected.dataset.date;
  items = items.filter((item) => item.idDay !== idToDelete);
  storeItems();
  elementContentDay.classList.add("hidden");
  elementMoreDay.classList.add("hidden");
  toggleButtonClear();
  resetList();
}

function resetList() {
  taskContainer.textContent = "";
  list = [];
}

function toggleButtonClear() {
  const buttonClear = document.querySelector(".button-clear");
  const elementSelected = document.querySelector(".selected");
  const idElement = elementSelected.dataset.date;
  const itemsDay = getItemsDay(idElement);
  if (itemsDay.length) {
    buttonClear.classList.remove("hidden");
  } else {
    buttonClear.classList.add("hidden");
  }
}

function crossOutItem(event) {
  const parent = event.target.closest(".task");
  const itemId = +parent.id;
  const item = items.find((item) => item.id === itemId);
  item.done = !item.done;
  storeItems();
  parent.classList.toggle("done");
  crossOutItemDay();
}

function crossOutItemDay() {
  const elementSelected = document.querySelector(".selected");
  const idElement = elementSelected.dataset.date;
  const itemsDay = getItemsDay(idElement);
  markDoneTaskDay(elementSelected, itemsDay);
}

function markDoneTaskDay(element, items) {
  items.forEach((item) => {
    const doneItemDay = element.querySelector(`span[data-id="${item.id}"]`);
    if (!doneItemDay) {
      return;
    }
    if (item.done) {
      doneItemDay.classList.add("through");
    } else {
      doneItemDay.classList.remove("through");
    }
  });
}

function getItemsDay(id) {
  return items.slice().filter((item) => item.idDay === id);
}

function addTaskDay() {
  const elementSelected = document.querySelector(".selected");
  const idElement = elementSelected.dataset.date;
  const itemsDay = getItemsDay(idElement);
  renderContentDay(elementSelected, itemsDay);
  renderQuantityTasks(elementSelected, itemsDay);
}

function renderContentDay(element, items) {
  const elementContentDay = element.querySelector(".day-content");
  elementContentDay.classList.remove("hidden");
  elementContentDay.innerHTML = generateContentDay(items);
}

function renderQuantityTasks(element, items) {
  const elementMoreDay = element.lastElementChild;
  elementMoreDay.innerHTML = `+ ещё ${items.length - 1}`;
  if (items.length > 2) {
    elementMoreDay.classList.remove("hidden");
  } else {
    elementMoreDay.classList.add("hidden");
  }
}

function renderItems() {
  const elementSelected = document.querySelector(".selected");
  const idElement = elementSelected.dataset.date;
  const itemsDay = getItemsDay(idElement);
  itemsDay.forEach((item) => {
    renderItem(item);
  });
}

function renderContentDays() {
  items.forEach((item) => {
    const element = document.querySelector(`div[data-date="${item.idDay}"]`);
    if (!element) {
      return;
    }
    const itemsDay = getItemsDay(element.dataset.date);
    renderContentDay(element, itemsDay);
    markDoneTaskDay(element, itemsDay);
    renderQuantityTasks(element, itemsDay);
  });
  toggleButtonClear();
}
