let sum: number | string | boolean;
let sum2: number | string | boolean;

type SumType = number | string | boolean;

let sum3: SumType;
let sum4: SumType;
let sum5: SumType;

type City = {
    name: string;
    age: number;
}

type Person = {
    name: string,
    age: number,
    city?: City,
}

const person: Readonly<Person> = {name: "ivan", age: 23};

console.log(person.age);

interface Person2 {
    name: string,
    age: number,
}


interface Worker extends Person2 {
    salary: number,
}

type Worker2 = Omit<Person, 'age' | 'city'>
type Worker3 = Pick<Person, 'age' | 'city'>

let worker: Worker3;

worker.age = 23;

sum = 2;
sum = '23';
sum = true;
