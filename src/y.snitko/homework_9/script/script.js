let currMonth = new Date();
const list = document.querySelector('#list');
const calendar = document.querySelector('.calendar');
let selectedDay = restoreSelectedDay();
let items = restoreItems();
let storeDate = restoreMonth();

currMonth = new Date(storeDate);
renderCalendar(currMonth);
renderCalendarHeader(currMonth);
showStoredDay(selectedDay);

function renderCalendar(date) {
  calendar.innerHTML = `${renderWeek()} ${renderDays(date)}`;
  selectCurrentDate(new Date(), currMonth);
  renderAllItemsDay();
}

function renderCalendarHeader(date) {
  let inputMonth = document.querySelector('#bdayMonth');
  inputMonth.value = `${date.getFullYear()}-${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}`;
}

function renderWeek() {
  return `<div class = "weekdays-container"> ${daysOfWeek
    .map((day) => `<div> ${day} </div>`)
    .join('')} </div>`;
}

function renderDays(date) {
  return `<div class="days-container">
    ${generatePrevMonthDays(date)}
    ${generateMonthDays(date)}
    ${generateNextMonthDays(date)}
    </div>`;
}

function change(event) {
  const selectedMonth = new Date(event.target.value);
  storeMonth(selectedMonth);
  currMonth = selectedMonth;
  renderCalendar(currMonth);
  renderCalendarHeader(currMonth);
}

function generatePrevMonthDays(date) {
  const days = [];
  const dayCount = getFirstDay(date).getDay();
  const prevMonth = getPrevMonth(date);
  const dayInMonth = getDaysInMonth(prevMonth);
  for (let index = dayCount; index > 0; index--) {
    days.push(dayInMonth - index + 1);
  }
  return days
    .map(
      (day) =>
        `<div class="day prev-month-day ${weekendDays(
          prevMonth,
          day
        )}" data-id="${getId(prevMonth, day)}"'>
        <span>${day}</span>
        <ol class="day-tasklist"></ol>
      </div>`
    )
    .join('');
}

function generateMonthDays(date) {
  const dayInMonth = getDaysInMonth(date);
  let html = '';
  for (let index = 1; index <= dayInMonth; index++) {
    let weekendDay = weekendDays(date, index);
    html += `
      <div class="day ${weekendDay} current-month-day" data-id="${getId(
      date,
      index
    )}">
        <span>${index}</span>
        <ol class="day-tasklist"></ol>
      </div>
    `;
  }
  return html;
}

function generateNextMonthDays(date) {
  const lastDaysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const dayCount = 6 - lastDaysOfMonth.getDay();
  let html = '';
  for (let index = 1; index <= dayCount; index++) {
    let weekendDay = weekendDays(date, getDaysInMonth(date) + index);
    html += `
      <div class="day next-month-day ${weekendDay}" data-id="${getId(
      date,
      getDaysInMonth(date) + index
    )}">
      <span>${index}</span>
        <ol class="day-tasklist"></ol>
      </div>
    `;
  }
  return html;
}

function onPrev() {
  currMonth = new Date(currMonth.getFullYear(), currMonth.getMonth() - 1);
  storeMonth(currMonth);
  renderCalendar(currMonth);
  renderCalendarHeader(currMonth);
}

function onNext() {
  currMonth = new Date(currMonth.getFullYear(), currMonth.getMonth() + 1);
  storeMonth(currMonth);
  renderCalendar(currMonth);
  renderCalendarHeader(currMonth);
}

function weekendDays(date, index) {
  let weekendDay = '';
  const dayOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    index
  ).getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    weekendDay += 'weekend-day';
  }
  return weekendDay;
}

function selectCurrentDate(date, month) {
  const days = document.querySelectorAll('.current-month-day');
  for (let day of days) {
    if (
      date.getDate() === +day.textContent &&
      date.getMonth() === month.getMonth()
    ) {
      day.classList.add('current-day');
    }
  }
  return days;
}

function onClickToday() {
  currMonth = new Date();
  localStorage.setItem(
    'selectedDay',
    JSON.stringify({
      dayOfWeek: daysOfWeek[currMonth.getDay()],
      date: currMonth.getDate(),
    })
  );
  storeMonth(currMonth);
  renderCalendar(currMonth);
  renderCalendarHeader(currMonth);
  showStoredDay(selectedDay);
}

function onClickDay(event) {
  let target = event.target.closest('.day');
  let activeDay = document.querySelector('.selected-day');
  if (activeDay) {
    activeDay.classList.remove('selected-day');
  }
  target.classList.add('selected-day');
  chosenDayContainer(target);
  showTasks(target);
}

function chosenDayContainer(target) {
  const day = target.querySelector('span').textContent;
  let dayOfWeek =
    daysOfWeek[
      new Date(currMonth.getFullYear(), currMonth.getMonth(), day).getDay()
    ];
  if (target.classList.contains('prev-month-day')) {
    dayOfWeek =
      daysOfWeek[
        new Date(
          currMonth.getFullYear(),
          currMonth.getMonth() - 1,
          day
        ).getDay()
      ];
  }
  if (target.classList.contains('next-month-day')) {
    dayOfWeek =
      daysOfWeek[
        new Date(
          currMonth.getFullYear(),
          currMonth.getMonth() + 1,
          day
        ).getDay()
      ];
  }
  let showDaysData = {
    dayOfWeek: dayOfWeek,
    date: day,
  };
  showStoredDay(showDaysData);
  localStorage.setItem('selectedDay', JSON.stringify(showDaysData));
}

function showStoredDay(data) {
  const showDay = document.querySelector('.show-day');
  if (selectedDay) {
    showDay.innerHTML = `${data.dayOfWeek}, ${data.date}`;
  }
  return showDay;
}

function showTasks(target) {
  const itemId = target.dataset.id;
  const tasks = items.filter((item) => item.id === itemId);
  list.innerHTML = '';
  if (tasks.length > 0) {
    for (let item of tasks) {
      list.innerHTML += `<li>${item.text}</li>`;
    }
  } else {
    list.innerHTML = 'No tasks for this day';
  }
}

function renderAllItemsDay() {
  const allDays = document.querySelectorAll('.day');
  allDays.forEach((day) => {
    const dayId = day.dataset.id;
    const dayTasks = items.filter((item) => item.id === dayId);
    dayTasks.forEach((task) => {
      const dayTaskList = day.querySelector('.day-tasklist');
      dayTaskList.append(generateItemElementDay(task));
    });
  });
}

function generateItemElement(item) {
  const element = document.createElement('li');
  element.innerHTML = `<span class="task-text">${item.text}</span>`;
  return element;
}

function generateItemElementDay(item) {
  const element = document.createElement('li');
  element.classList.add('day-task');
  element.innerHTML = `${item.text}`;
  return element;
}

function addItem(text) {
  const day = document.querySelector('.selected-day span').textContent;
  const newItem = {
    id: `${currMonth.getFullYear()}${currMonth.getMonth() + 1}${day}`,
    text: text,
  };
  items.push(newItem);
  storeItems();
  const dayAttr = document.querySelector(`[data-id='${newItem.id}']`);
  dayAttr
    .querySelector('.day-tasklist')
    .append(generateItemElementDay(newItem));
}

function openAddItemDialog() {
  openDialog((text) => addItem(text), 'Please, enter a new task!');
}

calendar.addEventListener('click', onClickDay);
