function strCount(obj){
let result = 0;
for (let i in obj) {
if (typeof obj[i] == 'string') result++;
if (typeof obj[i] == 'object') result+=strCount(obj[i]);
}
return result;
}
console.log(strCount({
      first:  "1",
      second: "2",
      third:  false,
      fourth: ["anytime",2,3,4],
      fifth:  null,
      sixth:  undefined,
      seventh:{}
    }));