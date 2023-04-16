function getDateAgo(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
    const timeStamp = date.getTime();
    const daysMs = days * 24 * 3600 * 1000;
    const dayAgo = timeStamp - daysMs
    return new Date(dayAgo)
}

console.log(getDateAgo(new Date(), 41))