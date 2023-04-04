function killer(suspectInfo, dead){
    for (const key in suspectInfo){
        let person = 0;
        for(let i = 0;i < dead.length;i++){
          if(suspectInfo[key].includes(dead[i])){
            person++
          }
           if(person === dead.length){
             return key
           }
        }
      }return person;
}
let suspectInfo ={
    James: ["Jacob", "David", "Lucas"],
    Johnny: ["Bill", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
};
let dead =["Lucas", "Bill"];
console.log(killer(suspectInfo, dead));