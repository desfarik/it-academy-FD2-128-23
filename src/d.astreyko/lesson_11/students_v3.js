const FIRST_NAMES = [
  'Даниил', 'Николай', 'Дарина', 'Анна', 'Сергей', 'София', 'Лев', 'Яна', 'Егор', 'Георгий'
];
const LAST_NAMES = [
  'Акимов', 'Воронова', 'Соколова', 'Рудакова', 'Кольцов', 'Филатов', 'Кожевникова', 'Макеева', 'Седов', 'Иванова',
];
const CITIES = ['Минск', 'Брест', 'Витебск', 'Гомель', 'Гродно', 'Могилев'];

function generateNumber(from, to) {
  return Math.floor(Math.random() * (to + 1 - from) + from);
}

function chanceToVisit(chance) {
  return generateNumber(0, 100) <= chance;
}

function getRandomItem(array) {
  let index = generateNumber(0, array.length - 1);
  return array[index];
}

function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}

function groupBy(array, key) {
  const result = {};
  array.forEach(item => {
    const value = item[key];
    if (result[value]) {
      result[value].push(item);
    } else {
      result[value] = [item];
    }
  });
  return result;
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
    });
}

function showAllStudents(students) {
  let sorted = sortsByFullName(students);

  console.table(sorted, ['secondName', 'name', 'age', 'stage', 'town']);
}

function showYuangStudent(students) {
  let sorted = students
    .filter((student) => {
      return student.age <= 18;
    })
    .sort((student1, student2) => {
      return student1.age - student2.age;
    });
  console.table(sorted, ['secondName', 'name', 'age', 'stage', 'town']);
}

function showStudentsByStage(students) {
  let sorted = [];

  for (let stage = 1; stage <= 4; stage++) {
    let studentsStage = students.filter(student => student.stage === stage);
    sorted.concat(sortsByFullName(studentsStage));
    sorted.push(...sortsByFullName(studentsStage));
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
showStudentsByStage(students);

class Lesson {
  visitedStudents = [];

  constructor(topic) {
    this.topic = topic;
  }

  setVisitedStudents(students) {
    this.visitedStudents = students;
  }

  isStudentVisit(student) {
    return this.visitedStudents.includes(student);
  }
}

const lessons = [
  new Lesson('Operators'),
  new Lesson('Functions'),
  new Lesson('Array'),
  new Lesson('Objects'),
];

lessons.forEach(lesson => {
  lesson.setVisitedStudents(filterVisitedStudents(students));
});

function filterVisitedStudents(students) {
  return students.filter(student => {
    if (student.age < 25) {
      return chanceToVisit(80);
    } else {
      return chanceToVisit(60);
    }
  });
}

function showStudentsToAutomat(lessons, allStudents) {
  const studentsToAutomat = allStudents
    .filter(student => lessons.every(lesson => lesson.isStudentVisit(student)));
  console.table(studentsToAutomat, ['secondName', 'name', 'stage']);
}

function showMissedLessonsStudents(lessons, students) {
  let data = students
    .map(student => {
      const visitedLessons = lessons.filter(lesson => lesson.isStudentVisit(student));
      return {
        name: student.getFullName(),
        missedLessons: lessons.length - visitedLessons.length,
      };
    })
    .filter(student => student.missedLessons > 0)
    .sort(function (student1, student2) {
      return student1.missedLessons - student2.missedLessons;
    });
  console.table(data);
}

function showStudentsVisit(lessons, students) {
  let table = sortsByFullName(students)
    .map(student => {
      let rowData = {
        name: student.getFullName(),
      };
      for (let i = 0; i < lessons.length; i++) {
        const key = 'lesson' + (i + 1);
        rowData[key] = lessons[i].isStudentVisit(student) ? '+' : '-';
      }
      return rowData;
      // return {
      //   name:student.getFullName(),
      //   lesson1:lessons[0].isStudentVisit(student)?'+':'-',
      //   lesson2:lessons[1].isStudentVisit(student)?'+':'-',
      //   lesson3:lessons[2].isStudentVisit(student)?'+':'-',
      //   lesson4:lessons[3].isStudentVisit(student)?'+':'-',
      //
      // }
    });
  console.table(table);
}

function showStageVisit(lessons, students) {
  /*
    return Object.entries(groupBy(students, 'stage'))
      .map(([stage, students]) => {
        let data = {
          stage: 'stage' + stage,
        };
        for (let i = 0; i < lessons.length; i++) {
          const key = 'lesson' + (i + 1);
          data[key] = students.filter(student => !lessons[i].isStudentVisit(student)).length;
        }
        return data;
      });
      */

  let tableData = [];
  for (let i = 1; i <= 4; i++) {
    let stageStudents = students.filter(student => student.stage === i);
    let data = {
      stage: 'stage' + i,
    };
    for (let i = 0; i < lessons.length; i++) {
      const key = 'lesson' + (i + 1);
      data[key] = stageStudents.filter(student => !lessons[i].isStudentVisit(student)).length;
    }
    tableData.push(data);
  }

  console.table(tableData);
}

showStudentsToAutomat(lessons, students);
showMissedLessonsStudents(lessons, students);
showStudentsVisit(lessons, students);
showStageVisit(lessons, students);


