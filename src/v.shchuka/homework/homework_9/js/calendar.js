const currDate = new Date();
const day = currDate.getDate();
const calendar = document.querySelector(".calendar");
const tasks = document.querySelector(".tasks");
const buttonTaskView = document.querySelector(".calendar-header-view");
let currentMonth = new Date();

renderCalender(currentMonth, "prev-month-day");

calendar.addEventListener("click", (event) => {
  onClickDay(event);
});

function renderWeekDays() {
  return `${WEEK_DAYS.map((day) => `<div class='week-day'>${day}</div>`).join(
    ""
  )}`;
}

function generateMonthDays(date, nameClass) {
  if (getFirstDay(currDate).getTime() === getFirstDay(currentMonth).getTime()) {
    return `
    ${generatePrevDaysCurrentMonth(date, nameClass)}
        ${generateCurrentDaysCurrentMonth(date, nameClass)}
        ${generateNextDaysCurrentMonth(date)}
        `;
  } else {
    return `
    ${generatePrevDaysCurrentMonth(date, nameClass, true)}
        `;
  }
}

function generatePrevDaysCurrentMonth(date, nameClass, index) {
  const year = date.getFullYear();
  const monthNumber = date.getMonth();
  const month = MONTHS[monthNumber];
  const daysInMonth = getDaysInMonth(date);
  let html = "";
  const length = index ? daysInMonth : day - 1;
  for (let i = 1; i <= length; i++) {
    const time = new Date(year, monthNumber, i).getTime();
    const newClass =
      i === 1 && nameClass !== "prev-month-day"
        ? "prev-month-day selected"
        : nameClass;
    if (i === 1) {
      html += `<div class="day ${newClass}" data-date="${time}">
    <span>${month.slice(0, 3)} ${i}</span>
    <span class="day-content hidden"></span>
    <span class="day-more hidden"></span>
    </div>`;
    } else {
      html += `<div class="day ${newClass}" data-date="${time}">
    <span>${i}</span>
    <span class="day-content hidden"></span>
    <span class="day-more hidden"></span>
    </div>`;
    }
  }
  return html;
}

function generateCurrentDaysCurrentMonth(date, nameClass) {
  const year = date.getFullYear();
  const monthNumber = date.getMonth();
  const month = MONTHS[monthNumber];
  const time = new Date(year, monthNumber, day).getTime();
  return nameClass === "prev-month-day"
    ? `<div class="day current-day selected" data-date="${time}">
    <span>${month.slice(0, 3)} ${day}</span>
    <span class="day-content hidden"></span>
      <span class="day-more hidden"></span>
      </div>`
    : `<div class="day" data-date="${time}">
    <span>${day}</span>
    <span class="day-content hidden"></span>
    <span class="day-more hidden"></span>
    </div>`;
}

function generateNextDaysCurrentMonth(date) {
  const year = date.getFullYear();
  const monthNumber = date.getMonth();
  const daysInMonth = getDaysInMonth(date);
  let html = "";
  for (let i = day + 1; i <= daysInMonth; i++) {
    const time = new Date(year, monthNumber, i).getTime();
    html += `<div class="day" data-date="${time}">
    <span>${i}</span>
    <span class="day-content hidden"></span>
    <span class="day-more hidden"></span>
    </div>`;
  }
  return html;
}

function getDaysInMonth(date) {
  return getLastDay(date).getDate();
}

function getLastDay(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function renderCalenderDays(date, nameClass) {
  return `
${renderWeekDays()}
    ${generatePrevMonthDays(date, nameClass)}
    ${generateMonthDays(date, nameClass)}
    ${generateNextMonthDays(date)}
    `;
}

function getFirstDay(date) {
  return new Date(date.getFullYear(), date.getMonth());
}

function getPrevMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() - 1);
}

function generatePrevMonthDays(date, nameClass) {
  const prevMonth = getPrevMonth(date);
  const daysInMonth = getDaysInMonth(prevMonth);
  const year = prevMonth.getFullYear();
  const monthNumber = prevMonth.getMonth();
  const month = MONTHS[monthNumber];
  const days = [];
  let dayCount = getFirstDay(date).getDay() - 1;
  if (dayCount < 0) {
    dayCount = 6;
  }
  for (let i = dayCount; i > 0; i--) {
    days.push(daysInMonth - i + 1);
  }
  return days
    .map((day, i) => {
      const time = new Date(year, monthNumber, day).getTime();
      return i === 0
        ? `<div class="day ${nameClass}" data-date="${time}">
        <span>${month.slice(0, 3)} ${day}</span>
          <span class="day-content hidden"></span>
          <span class="day-more hidden"></span>
          </div>`
        : `<div class="day ${nameClass}" data-date="${time}">
        <span>${day}</span>
        <span class="day-content hidden"></span>
        <span class="day-more hidden"></span>
      </div>`;
    })
    .join("");
}

function getLastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function getNextMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1);
}

function generateNextMonthDays(date) {
  const lastDayOfMonth = getLastDayOfMonth(date);
  const nextMonth = getNextMonth(date);
  const year = nextMonth.getFullYear();
  const monthNumber = nextMonth.getMonth();
  const month = MONTHS[monthNumber];
  const days = [];
  let dayCount = 7 - lastDayOfMonth.getDay();
  if (dayCount > 6) {
    dayCount = 0;
  }
  for (let i = 1; i <= dayCount; i++) {
    days.push(i);
  }
  return days
    .map((day) => {
      const time = new Date(year, monthNumber, day).getTime();
      return day === 1
        ? `<div class="day" data-date="${time}">
        <span>${month.slice(0, 3)} ${day}</span>
        <span class="day-content hidden"></span>
        <span class="day-more hidden"></span>
        </div>`
        : `<div class="day" data-date="${time}">
        <span>${day}</span>
        <span class="day-content hidden"></span>
        <span class="day-more hidden"></span>
      </div>`;
    })
    .join("");
}

function goToPrevMonth() {
  currentMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() - 1
  );
  renderCalender(currentMonth);
}

function goToNextMonth() {
  currentMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1
  );
  renderCalender(currentMonth);
}

function renderCalender(currentMonth, className) {
  resetList();
  renderCurrentMonth(currentMonth);
  const nameClass = getNameClassPrevDays(currentMonth, className);
  calendar.innerHTML = renderCalenderDays(currentMonth, nameClass);
  addNameClassPrevDays(nameClass);
  findSelectedDate();
  renderContentDays();
  renderItems();
}

function renderCurrentMonth(currentMonth) {
  const elementCurrentMonth = document.querySelector(".current-month");
  const month = MONTHS[currentMonth.getMonth()];
  const year = currentMonth.getFullYear();
  elementCurrentMonth.textContent = `${month} ${year}`;
}

function getNameClassPrevDays(currentMonth, nameClass) {
  const firstDayCurrentMonth = getFirstDay(currDate).getTime();
  if (currentMonth.getTime() === firstDayCurrentMonth || nameClass) {
    return "prev-month-day";
  } else if (currentMonth.getTime() < firstDayCurrentMonth) {
    return "temp-1";
  } else if (currentMonth.getTime() > firstDayCurrentMonth) {
    return "temp-2";
  }
}

function addNameClassPrevDays(nameClass) {
  const elementDay = document.querySelectorAll(".day");
  if (nameClass === "temp-1") {
    elementDay.forEach((element) => {
      element.classList.add("prev-month-day");
      element.classList.remove("temp-1");
    });
  } else if (nameClass === "temp-2") {
    elementDay.forEach((element) => {
      element.classList.remove("prev-month-day");
      element.classList.remove("temp-2");
    });
  }
}

function goToToday() {
  currentMonth = new Date();
  renderCalender(currentMonth, "prev-month-day");
}

function toggleActiveToday(target) {
  const calendarTodayContainer = document.querySelector(
    ".calendar-today-container"
  );
  if (target.classList.contains("current-day")) {
    calendarTodayContainer.classList.add("active");
  } else {
    calendarTodayContainer.classList.remove("active");
  }
}

function resetPrevSelectedDay() {
  document.querySelector(".selected").classList.remove("selected");
}

function showSelectedDate(target) {
  const date = +target.dataset.date;
  const selectedDate = new Date(date);
  const day = selectedDate.getDate();
  const monthNumber = selectedDate.getMonth();
  const month = MONTHS[monthNumber];
  let weekDayNumber = selectedDate.getDay() - 1;
  if (weekDayNumber < 0) {
    weekDayNumber = 6;
  }
  const weekDay = WEEK_DAYS_ABBREV[weekDayNumber];
  tasksDate.textContent = `${weekDay}, ${month.slice(0, 3)} ${day}`;
  tasksDate.dataset.date = date;
}

function findSelectedDate() {
  const elementCurrentDay = document.querySelector(".selected");
  showSelectedDate(elementCurrentDay);
  toggleActiveToday(elementCurrentDay);
}

function closeSidebar() {
  tasks.classList.add("hidden");
  buttonTaskView.classList.remove("hidden");
}

function openSidebar() {
  tasks.classList.remove("hidden");
  buttonTaskView.classList.add("hidden");
}
