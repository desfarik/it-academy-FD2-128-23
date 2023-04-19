function getWeekDay(date) {
    const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday','saturday']
   const weekDay = date.getDay();
    return week[weekDay]
}
    // switch (weekDay) {
    //     case 0:
    //         return 'sunday';
    //     case 1:
    //         return 'monday';
    //     case 2:
    //         return 'tuesday';
    //     case 3:
    //         return 'wednesday';
    //     case 4:
    //         return 'thursday';
    //     case 5:
    //         return 'friday';
    //     case 6:
    //         return 'saturday';
    // }


console.log(getWeekDay(new Date()))
console.log(getWeekDay(new Date(2023, 1, 1)))