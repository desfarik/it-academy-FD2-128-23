function mergeArrays(arr1, arr2) {
  // слияние, -повторы
  let merge = arr1.concat(arr2);
  let noRep = [...new Set(merge)];
   function compareNumeric(a, b) {
   if (a > b) return 1;
   if (a < b) return -1;
 }
//  сортировка по возрастанию
   return noRep.sort(compareNumeric);
 }
 
 mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]);