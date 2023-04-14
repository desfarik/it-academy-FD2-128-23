function formatDate(date) {
  const diff = new Date() - date;
  if(diff < 1000) {
    return 'now'
  }
  if (diff < 60_000) {
    const sec = Math.floor(diff /1000);
    return `${sec}s. ago`
      }
  if (diff < 3600_000) {
    const min = Math.floor(diff /60000);
    return `${min}m. ago`
  }
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}

console.log(formatDate(new Date()));
console.log(formatDate(new Date(Date.now() - 500)));
console.log(formatDate(new Date(Date.now() - 30_000)));
console.log(formatDate(new Date(Date.now() - 300_000)));
console.log(formatDate(new Date(Date.now() - 5_000_000)));
