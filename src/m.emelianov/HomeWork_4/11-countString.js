function strCount(object) {
    let count = 0;
      for (let key in object) {
        if (typeof object[key] === 'string') {
          count++;
        }
        if (typeof object[key] === 'object') {
          count += strCount(object[key]);
        }
      }
      return count;
      }


console.log(strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",2,3,4],
    fifth:  null,
    sixth:  undefined,
    seventh:{name: "alisa", status:'wor' }
}))
