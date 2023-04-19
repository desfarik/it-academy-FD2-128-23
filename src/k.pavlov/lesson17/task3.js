function getWeekDay(date) {
    const week = ['', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday','saturday', 'sunday']
    const weekDay = date.getDay();
    return week[weekDay === 0 ? 7: weekDay]
}

console.log(getWeekDay(new Date()))
console.log(getWeekDay(new Date(2023, 1, 1)))