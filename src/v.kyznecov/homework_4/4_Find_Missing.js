function findMissing(arr1, arr2) {
arr1.sort();
arr2.sort();
for (let i=0; i< arr1.length; i++)
if(arr1[i]!=arr2[i])
return arr1[i];
}
console.log(findMissing([1, 2, 3], [1, 3]))
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))
console.log(findMissing([7], []))