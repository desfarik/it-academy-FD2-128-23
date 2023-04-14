function getSecondsToday() {
  const currentTime = Date.now();
  const currentDay = new Date();
  const startDate = new Date(currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate());
  const diff = currentTime - startDate;
  return diff / 1000;
}

console.log(getSecondsToday());
