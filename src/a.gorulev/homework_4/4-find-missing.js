function findMissing(arr1, arr2) {
  arr1.sort(); 
  arr2.sort();
  for (var i = 0; i < arr1.length; i++)
    if (arr1[i] != arr2[i]) 
      return arr1[i];
}

findMissing([1, 2, 3], [1, 3])