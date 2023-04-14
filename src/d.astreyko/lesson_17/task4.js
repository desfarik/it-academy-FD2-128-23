function getDateAgo(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);

  const daysInMilliSecond = days * 24 * 3600 * 1000;
  return new Date(date.getTime() - daysInMilliSecond);
}

console.log(getDateAgo(new Date(), 41));
