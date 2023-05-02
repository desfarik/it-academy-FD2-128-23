const smallCalendarWrapper = document.querySelector(".small-calendar-wrapper");
const smallCalendar = document.querySelector(".small-calendar");
const calendarDate = document.querySelector(".calendar-date");

let currentYear;

smallCalendar.addEventListener("click", (event) => {
  onClickMonth(event);
});

function showSmallCalendar() {
  currentYear = currentMonth.getFullYear();
  smallCalendarWrapper.classList.toggle("show");
  calendarDate.classList.toggle("active");
  renderSmallCalendar(currentMonth);
}

function renderCurrentYear(date) {
  const elementCurrentYear = document.querySelector(".current-year");
  const year = date.getFullYear();
  elementCurrentYear.textContent = `${year}`;
}

function goToPrevYear() {
  currentMonth = new Date(
    currentMonth.getFullYear() - 1,
    currentMonth.getMonth()
  );
  renderSmallCalendar(currentMonth);
}

function goToNextYear() {
  currentMonth = new Date(
    currentMonth.getFullYear() + 1,
    currentMonth.getMonth()
  );
  renderSmallCalendar(currentMonth);
}

function renderSmallCalendar(date) {
  renderCurrentYear(date);
  smallCalendar.innerHTML = generateMonth(date);
}

function generateMonth(date) {
  const year = date.getFullYear();
  const monthNumber = date.getMonth();
  let html = "";
  for (let i = 0; i < 12; i++) {
    const className =
      year === currentYear && monthNumber === i
        ? "month small-calendar-current-month"
        : "month";
    html += `<div class="${className}" data-year="${year}" data-month="${i}">${MONTHS[
      i
    ].slice(0, 3)}</div>`;
  }
  return html;
}

function onClickMonth(event) {
  const target = event.target;
  const year = target.dataset.year;
  const month = target.dataset.month;
  currentMonth = new Date(year, month);
  if (!target.classList.contains("month")) {
    return;
  }
  smallCalendarWrapper.classList.remove("show");
  calendarDate.classList.remove("active");
  renderCalender(currentMonth);
}
