function getWeekDay(date) {
  const week = ['','пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  const weekDay = date.getDay();
  return week[weekDay === 0? 7:weekDay];
}
//   switch (weekDay){
//     case 0: return 'вс';
//     case 1: return 'пн';
//     case 2: return 'вт';
//     case 3: return 'ср';
//     case 4: return 'чт';
//     case 5: return 'пт';
//     case 6: return 'сб';
//   }
//


console.log(getWeekDay(new Date()));
console.log(getWeekDay(new Date(2023,0,1,1)));
console.log(new Date(2023,0,1,1));
console.log(getWeekDay(new Date(2022,1,2)));
