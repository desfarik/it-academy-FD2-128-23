function getSecondsToday() {
    const currentTime = Date.now();
    const currentDay = new Date()
    const startOfDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate());
    const diff = currentTime - startOfDay;
    return diff/1000;
}

console.log(getSecondsToday())