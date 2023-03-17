const FIRST_NAMES = [
  "Даниил", "Николай", "Дарина", "Анна", "Сергей", "София", "Лев", "Яна", "Егор", "Георгий"
]
const LAST_NAMES = [
  "Акимов", "Воронова", "Соколова", "Рудакова", "Кольцов", "Филатов", "Кожевникова", "Макеева", "Седов", "Иванова",
]
const CITIES = ["Минск", "Брест","Витебск","Гомель","Гродно","Могилев"]

function generateNumber(from, to) {
  return Math.floor(Math.random()*(to-from) + from);
}

function getRandomItem(array) {
  let index = generateNumber(0, array.length-1)
  return array[index]
}


function  generateRandomStudent(){
  return {
    age: generateNumber(16,40),
    stage: generateNumber(1,4),
    name: getRandomItem(FIRST_NAMES),
    secondName: getRandomItem(LAST_NAMES),
    town: getRandomItem(CITIES)
  }
}


function getGroup(n) {
  const group = [];
  for(let i=0; i<n; i++) {
    group.push(generateRandomStudent());
  }
  return group;
}
// Your code here

let students = getGroup(50);







function showAllStudents(students) {
  let sorted = students.slice().sort(function (student1,student2){
    let fullName1 = student1.secondName+student1.name;
    let fullName2 = student2.secondName+student2.name;
    return (fullName1>fullName2) ? 1:-1;
  })
  console.table(sorted,['secondName','name','age', 'stage', 'town'])
}

showAllStudents(students)
