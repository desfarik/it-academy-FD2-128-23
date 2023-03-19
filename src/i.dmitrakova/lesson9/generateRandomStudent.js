let firstNames = ['Ivan', 'Dima', 'Lesha', 'Sasha', 'Victor', 'Anna', 'Ira', 'Pavel', 'Tanya', 'Vitya', 'Dasha'];
let lastNames = ['Inavov', 'Hoorikov', 'Ninova', 'Sobaka', 'Korvich', 'Samer', 'Popov', 'Lokishov', 'Dmitriev', 'Kirov', 'Kitov'];
let cities = ['Minsk', 'Gomel', 'Pskov', 'Brest', 'Svetlogorsk', 'Krakov', 'Mogilev'];
let cours = [1, 2, 3, 4];

const randomIndex = Math.floor(Math.random() * (firstNames.length - 1)); 
const result = firstNames[randomIndex]; 
console.log(result);
let newObject = {

}
function getRandomAge(min, max) {
    return Math.random();
  }
  console.log(getRandomAge(16, 40))
 
function returnName(firstNames){
    const randomIndex = Math.floor(Math.random() * (firstNames.length - 1)); 
    const result = firstNames[randomIndex]; 
    return result
}
function returnName(lastNames){
    const randomIndex = Math.floor(Math.random() * (lastNames.length - 1)); 
    const result = lastNames[randomIndex]; 
    return result
}
console.log(returnName())


function generationRandomStudent(){
    return {
        age: generationNumber(),
        name: getRandomItem()
    }
}


