function sortMyString(s) {
  let splited = s.split("");
  let sOdd = [];
  let sEven = [];
  for (let i = 0; i < splited.length; i++)
    if (i % 2 === 0) sEven.push(splited[i]);
    else sOdd.push(splited[i]);
  return sEven.join("") + " " + sOdd.join("");
}


console.log(sortMyString("CodeWars"))