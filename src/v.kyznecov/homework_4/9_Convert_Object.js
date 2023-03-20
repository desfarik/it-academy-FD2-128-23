
function convertHashToArray(hash){
let result = [];
for(let key in hash){
result.push([key, hash[key]]) 
}
for(let i = 0; i < result.length; i++){
for(let j = i + 1; j < result.length; j++){
if(result[i] > result[j]){
[result[i], result[j]] = [result[j], result[i]]
}
}
}
   return result
}
console.log(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}))