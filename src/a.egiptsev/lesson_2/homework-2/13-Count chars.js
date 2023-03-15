// 13 Count chars
function consonantCount(str) {
  return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
}
console.log(consonantCount("string"));
