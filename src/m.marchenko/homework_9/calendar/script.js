const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
let floatingDate;
let _TASK_DATA = JSON.parse(localStorage.getItem("data")) || [];
renderCalender(currentDate);
renderTodolist(currentDate);

function renderCalender(date) {
  const element = document.querySelector('.calendar');
  element.innerHTML = `
  ${renderWeekDays()}
  ${renderCalenderDays(date)}
  ${visualInput(date)}
  `;
}

function renderTodolist(date) {
  const element = document.querySelector('.todolist-container');
  element.innerHTML = `
  ${renderTaskDay(date)}
  ${renderDailyTasks(date, _TASK_DATA)}
  `;
}

function renderCalenderDays(date) {
  return `<div class="days-container" onclick="chooseDate(event)">
    ${generatePrevMonthDays(date)}
    ${generateMonthDays(date)}
    ${generateNextMonthDays(date)}
  </div>`;
}

function renderTaskDay(date) {
  return `<div class = 'todolist-header'>
            <p class="todolist-curr-day">${WEEK_DAYS[date.getDay()].slice(0,3)}, ${MONTHS[date.getMonth()]} ${date.getDate()}</p>
          </div>`;
}

function renderDailyTasks(date, array) {
  localStorage.setItem("data", JSON.stringify(array));
  let html = '';
  let dateMs = new Date(date).getTime();
  let filteredArray = arraySortById(array, dateMs);
  if (filteredArray.length === 0) {
    html += `<div class="todolist-main">
              <div class="todolist-task">
                <p class="task">No tasks for today.</p>
              </div>
            </div>`
  } else {
    filteredArray.forEach(element => {
      html += `<div class="todolist-main">
                <div class="todolist-task">
                  <div class="task-body">
                    <p class="time">${element[1]}</p>
                    <p class="task">${element[2]}</p>
                  </div>
                </div>
              </div>`
    })
  }
  return html;
}

function renderWeekDays() {
  return `<div class = 'weekdays-container'>
            ${WEEK_DAYS.map(day => `<div class = 'week-day date-container'><p>${day}</p></div>`)
            .join('')}
          </div>`;
}

function userChoiceDate(value) {
  let userChoiceYear = value.slice(0,4);
  let userChoiceMonth = value.slice(5);
  let date = new Date(userChoiceYear, +userChoiceMonth-1)
  renderCalender(date);
}

function generatePrevMonthDays(date) {
  let html = '';
  const month = MONTHS[date.getMonth()-1] || 'December';
  const currentDay = new Date();
  const dayCount = getFirstDay(date).getDay();
  const prevMonth = getPrevMonth(date);
  const daysInMonth = getDaysInMonth(prevMonth);
  const days = [];
  for (let i = dayCount; i > 0; i--) {
    days.push(daysInMonth - i+1);
  }
  for (let day = 0; day <= days.length-1; day++) {
    let dateMs = prevMonth.setDate(days[day]);
    let weekDay = new Date(dateMs).getDay();
    if (day === 0) {
      html += `<div class="day past-day past-months" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${month.slice(0,3) + ' ' + days[day]}</p></div>`; 
    } else {
      html += `<div class="day past-day past-months" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${days[day]}</p></div>`;
    }
  }
  return html;
}

function generateNextMonthDays(date) {
  let html = '';
  const month = MONTHS[date.getMonth()+1]  || 'January';
  const currentDay = new Date(new Date().setHours(0, 0, 0, 0));
  const lastDAyOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);
  const dayCount = 13 -lastDAyOfMonth.getDay();
  const nextMonth = new Date(date.getFullYear(), date.getMonth()+1);
  const days = [];
  for (let i = 1; i <= dayCount; i++) {
    days.push(i);
  }
  for (let day = 0; day <= days.length-1; day++) {
    let dateMs = nextMonth.setDate(days[day]);
    if (day === 0) {
      html += `<div class="day past-day future-months" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${month.slice(0,3) + ' ' + days[day]}</p></div>`; 
    } else {
      html += `<div class="day past-day future-months" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${days[day]}</p></div>`;
    }
  }
  return html;
}

function generateMonthDays(date) {
  floatingDate = new Date(date);
  const month = MONTHS[floatingDate.getMonth()];
  const currentDay = new Date();
  const daysInMonth = getDaysInMonth(floatingDate);
  let html = '';
  if (floatingDate.getMonth() < currentDay.getMonth()) {
    for (let day = 1; day <= daysInMonth; day++) {
      let dateMs = floatingDate.setDate(day);
      if (day === 1) {
        html += `<div class="day past-day" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${month.slice(0,3) + ' ' + day}</p></div>`; 
      } else {
        html += `<div class="day past-day" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${day}</p></div>`;
      }
    }
  }
  if (floatingDate.getMonth() > currentDay.getMonth()) {
    for (let day = 1; day <= daysInMonth; day++) {
      let dateMs = floatingDate.setDate(day);
      if (day === 1) {
        html += `<div class="day future-day" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${month.slice(0,3) + ' ' + day}</p></div>`; 
      } else {
        html += `<div class="day future-day" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${day}</p></div>`;
      }
    }
  }
  if (floatingDate.getMonth() === currentDay.getMonth()) {
    for (let day = 1; day <= daysInMonth; day++) {
      let dateMs = floatingDate.setDate(day);
      if (day === currentDay.getDate()) {
        html += `<div class="day current-day" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${month.slice(0,3) + ' ' + day}</p></div>`; 
      } else {
        if (day === 1) {
          html += `<div class="day past-day" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${month.slice(0,3) + ' ' + day}</p></div>`; 
        } 
        else if (day < currentDay.getDate()) {
          html += `<div class="day past-day" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${day}</p></div>`;
        } 
        else {
          html += `<div class="day" id="${dateMs}" ondblclick="addTask(${dateMs})"><p>${day}</p></div>`;
        }
      }
    }
  }
  return html;
}
function goToPrev() {
  let date = new Date(floatingDate.getFullYear(), floatingDate.getMonth() - 1)
  renderCalender(date);
}
function goToNext() {
  let date = new Date(floatingDate.getFullYear(), floatingDate.getMonth() + 1)
  renderCalender(date);
}
function goToCurr() {
  let date = new Date(new Date().setHours(0, 0, 0, 0));
  renderCalender(date);
}

let target = '';

function chooseDate(event) {
  if (event.target.tagName === 'P') {
    let day = parseInt(event.target.innerText.match(/\d+/));
    let date;
    if (event.target.parentElement.classList.contains('future-months')) {
      date = new Date(floatingDate);
      let renderDate = date.setMonth(date.getMonth()+1, day);
    }
    else if (event.target.parentElement.classList.contains('past-months')) {
      date = new Date(floatingDate);
      let renderDate = date.setMonth(date.getMonth()-1, day);
    }
    else {
      date = new Date(floatingDate);
      let renderDate = date.setDate(day);
    }
    renderTodolist(date)
    if (target !== '') {
      target.classList.remove('choosen')
      target = event.target.parentElement
      target.classList.add('choosen')
    } else {
      target = event.target.parentElement
      target.classList.add('choosen')
    }
  }
  if (event.target.tagName === 'DIV') {
    let day = parseInt(event.target.firstChild.innerText.match(/\d+/));
    let date;
    if (event.target.classList.contains('future-months')) {
      date = new Date(floatingDate);
      let renderDate = date.setMonth(date.getMonth()+1, day);
    }
    else if (event.target.classList.contains('past-months')) {
      date = new Date(floatingDate);
      let renderDate = date.setMonth(date.getMonth()-1, day);
    }
    else {
      date = new Date(floatingDate);
      let renderDate = date.setDate(day);
    }
    renderTodolist(date)
    if (target !== '') {
      target.classList.remove('choosen')
      target = event.target
      target.classList.add('choosen')
    }
    else {
      target = event.target
      target.classList.add('choosen')
    }
  }
}

function visualInput(date) {
  let dateStr = document.querySelector('input')
  let year = date.getFullYear();
  let month = String(date.getMonth()+1);
  dateStr.setAttribute('value', year + '-' + month.padStart(2, '0'))
}

function addTask(id) {
  document.body.classList.toggle("freeze");
  let task = []
  let dialog = document.createElement('div');
  document.body.append(dialog);
  dialog.innerHTML = `
    <div class="dialog-container">
      <div class="add-task-dialog">
        <p class="dialog-task-text">Choose time and write task</p>
        <div class="dialog-inputs">
          <input required type="time" id="add-task-time">
          <input required id="add-task-text">
        </div>
        <div class="buttons">
          <button class="decline-button" onclick="closeDialog()">Cancel</button>
          <button class="accept-button">Add task</button>
        </div>
      </div>
    </div>
  `;
  dialog.addEventListener('click', function (event) {
    if (event.target.classList.contains('accept-button')) {
      const inputText = dialog.querySelector('#add-task-text');
      const inputTime = dialog.querySelector('#add-task-time');
      task.push(id, inputTime.value, inputText.value)
      _TASK_DATA.push(task)
      console.log(_TASK_DATA);
      closeDialog();
    }
  });
}

function closeDialog() {
  document.body.classList.toggle("freeze");
  let dialog = document.querySelector('.dialog-container');
  dialog.remove();
}