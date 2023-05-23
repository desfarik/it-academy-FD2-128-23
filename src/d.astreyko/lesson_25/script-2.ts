class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log('hello from ' + this.name)
    }
}

function calcSalary(days: number, salaryPerDay: number): number {
    return days * salaryPerDay;
}

interface Person {
    name: string;
    age: number;
    sayHello: () => void;
    calcSalary: (days: number, salaryPerDay: number) => number;
}

const person: Person = {
    name: '23',
    age: 23,
    sayHello: () => {
    },
    calcSalary: (day, perDay) => {
        return 2
    }
}


let user1: User;

const user = new User('ivan', 23);
user1 = user;
user1.sayHello();
