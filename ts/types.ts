declare type AppleOrOrange = 'apple'|'orange';

declare type PersonType = {
    name: string;
    age: number;
}

declare interface PersonInterface {
    name: string;
    age: number;
}

declare interface EmployeeInterface extends PersonInterface {
    salary: number;
    isAdmin?: boolean;
}

// result: Employee { name, age, salary, isAdmin }




export enum USER_ROLE {
    USER,
    ADMIN,
    MASTER
}



export { AppleOrOrange, EmployeeInterface, PersonType };