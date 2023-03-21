const FIRST_NAMES = [
  'Даниил', 'Николай', 'Дарина', 'Анна', 'Сергей', 'София', 'Лев', 'Яна', 'Егор', 'Георгий'
];
const LAST_NAMES = [
  'Акимов', 'Воронова', 'Соколова', 'Рудакова', 'Кольцов', 'Филатов', 'Кожевникова', 'Макеева', 'Седов', 'Иванова',
];
const CITIES = ['Минск', 'Брест', 'Витебск', 'Гомель', 'Гродно', 'Могилев'];

function generateNumber(from, to) {
  return Math.floor(Math.random() * (to+1 - from) + from);
}

function getRandomItem(array) {
  let index = generateNumber(0, array.length - 1);
  return array[index];
}

class Student {
/*  constructor({ age, stage, name, secondName, town }) {
    this.age = age;
    this.stage = stage;
    this.name = name;
    this.secondName = secondName;
    this.town = town;
  }*/

  constructor(options) {
    this.age = options.age;
    this.stage = options.stage;
    this.name = options.name;
    this.secondName = options.secondName;
    this.town = options.town;
  }
  getFullName() {
    return this.secondName + ' ' + this.name;
  }
}

function generateRandomStudent() {
  return new Student({
    age: generateNumber(16, 40),
    stage: generateNumber(1, 4),
    name: getRandomItem(FIRST_NAMES),
    secondName: getRandomItem(LAST_NAMES),
    town: getRandomItem(CITIES)
  });
}

function getGroup(n) {
  const group = [];
  for (let i = 0; i < n; i++) {
    group.push(generateRandomStudent());
  }
  return group;
}

let students = getGroup(50);
function sortsByFullName(students) {
  return students.slice()
    .sort(function (student1, student2) {
      let fullName1 = student1.getFullName();
      let fullName2 = student2.getFullName();
      return (fullName1 > fullName2) ? 1 : -1;
    })

}
function showAllStudents(students) {
  let sorted = sortsByFullName(students)

  console.table(sorted, ['secondName', 'name', 'age', 'stage', 'town']);
}

function showYuangStudent(students) {
  let sorted = students.filter((student) => {
    return student.age <= 18;
  }).sort((student1, student2) => {
    return student1.age - student2.age;
  })
  console.table(sorted, ['secondName', 'name', 'age', 'stage', 'town']);

}

function showStudentsByStage(students) {
  let sorted = []

  for (let stage = 1; stage <=4; stage++) {
    let studentsStage = students.filter(student => student.stage === stage)
    sorted.concat(sortsByFullName(studentsStage))
    sorted.push(...sortsByFullName(studentsStage))
  }
  // let studentsStage1 = students.filter(student => student.stage === 1)
  // let studentsStage2 = students.filter(student => student.stage === 2);
  // let studentsStage3 = students.filter(student => student.stage === 3);
  // let studentsStage4 = students.filter(student => student.stage === 4);
  // let sorted = [...sortsByFullName(studentsStage1),
  //   ...sortsByFullName(studentsStage2),
  //   ...sortsByFullName(studentsStage3),
  //   ...sortsByFullName(studentsStage4),
  // ]
  console.table(sorted, ['secondName', 'name', 'stage']);

}

showAllStudents(students);
showYuangStudent(students);
showStudentsByStage(students)
