const First_Names = ['Роман', 'Тихон', 'Лев', 'Полина', 'Илья', 'Иван', 'Дарья', 'Михаил', 'Руслан'];
const Second_Names = ['Захаров',
    'Андреева',
    'Попова',
    'Ершов',
    'Горшкова',
    'Григорьева',
    'Беляева',
    'Денисова',
    'Акимов',
    'Плотников'];
const City = ['Minsk', 'Brest', 'Grodno', 'Vitebsk', 'Mogilev', 'Gomel'];
const Kurs = [1, 2, 3, 4];
const age = [16, 40];

function generateRandom(size, from, to) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(randomNumber(from, to))
    }
    return array;
}

function randomNumber(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
}

function generateRandomItem(array) {
    let index = randomNumber(0, array.length - 1)
    return array[index]

}

function generateRandomStudent() {


    return {
        age: randomNumber(16, 40),
        Kurs: randomNumber(1, 4),
        name: generateRandomItem(First_Names),
        secondName: generateRandomItem(Second_Names),
        town: generateRandomItem(City),

    };
}

function getGroup(n) {
    const group = [];
    for (let i = 0; i < n; i++) {
        group.push(getGroup[i])
    }
}

let students = getGroup(50);

// console.log(generateRandomStudent())

function showAllStudents(students) {
    let sorted = students.slice().sort(function (student1, student2) {
        let fullName = student1.Second_Names+student1.First_Names
    })
    console.table((students, ['First_Names', 'Second_Names', 'age', 'Kurs']))
}