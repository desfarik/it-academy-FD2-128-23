function getLastDayOfMonth(year, month) {
    const lastDay = new Date(year, month+1 , 0)
    return lastDay.getDate()

    const monthDate = new Date(year, month);
    const nextMonth = new Date(year, month + 1);
    const difference = nextMonth - monthDate;
    return difference / (24 * 3600 * 1000);
}

console.log(getLastDayOfMonth(2020, 1))