function maxTriSum(numbers){
  let noRep = [...new Set(numbers)];
  function compareNumeric(a, b) {
   if (a > b) return -1;
   if (a < b) return 1;
 }
//  сортировка max=>min, суммирование 3 первых
  return noRep.sort(compareNumeric).slice(0,3)
  .reduce((partialSum, a) => partialSum + a, 0);
 }

maxTriSum([3,8,6,8,2,3]);