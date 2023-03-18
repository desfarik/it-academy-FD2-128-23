const object1 = { name: "Anna", age: 20, lastName: "Ivanova", color: "green" };
const object2 = { name: "Ivanov", age: 21, lastName: "Ivanova" };
const questions = [object1, object2];
questions.forEach((obj) => (obj.usersAnswer = null));
console.log(questions);
