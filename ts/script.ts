import { AppleOrOrange, EmployeeInterface, PersonType } from './types';

let apple: AppleOrOrange = 'apple';
let orange: AppleOrOrange = 'orange';
// let fruit: AppleOrOrange = 'fruit';

let stringVariable: string = 'qwerty';
let numberVariable: number = 15;
let booleanVariable: boolean = false;

// avoid
let numberVariable2: Number = 15;
let anyVariable: any = { name: 'Error in disguise' };

// this will crash at runtime
console.log(anyVariable.notExistingProperty);

let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

// notSure.attributeX = '2';


const fruitBasket: AppleOrOrange[] = ['apple', 'orange', 'orange'];

const employees: Array<EmployeeInterface> = []; // use the one above



console.log(stringVariable);
console.log(numberVariable);
console.log(numberVariable2);
console.log(booleanVariable);

let employee = {
    name: 'John',
    age: 35,
    salary: 1500
};

let employeePartial: Partial<EmployeeInterface> = {
    age: 15
};

let personTypeObject: PersonType = {
    age: 13,
    name: 'Mr Person',
};

class EmployeeClass implements EmployeeInterface {
    name: string;
    age: number;
    salary: number;

    constructor(
        name: string, age: number, salary: number
    ) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    printInfo(): void {
        console.log(`Name: ${this.name}, age: ${this.age}, salary: ${this.salary}`);
    }
}

function add(a: number, b: number): number {
    return a + b;
}

let a: number = 5;
let b: number = 10;
let c: number = add(a, b);

console.log(`Result is: ${c}`);

class ExampleClass {

    constructor() {
    }

}

let object = new ExampleClass();

console.log(add (1, 3));

let newEmployee = new EmployeeClass('John', 25, 1500);
newEmployee.printInfo()