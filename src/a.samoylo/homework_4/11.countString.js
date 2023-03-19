function strCount(obj){
    let total = 0;
    for (key in obj) {
      if (typeof obj[key] == 'string') total++;
      if (typeof obj[key] == 'object') total += strCount(obj[key]);
    }
    return total;
  }