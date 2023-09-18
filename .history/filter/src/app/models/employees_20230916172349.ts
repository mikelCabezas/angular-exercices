export class Employee {
    name: string;
    surname: string;
    department: string;
    since: number;
    salary: number;

    constructor(name: string, surname: string, department: string, since: number, salary: number) {
        this.name = name;
        this.surname = surname;
        this.department = department;
        this.since = since;
        this.salary = salary;
    }

}