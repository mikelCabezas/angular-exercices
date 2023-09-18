export class Employee {
    id: number
    name: string
    surname: string
    department: string
    since: number
    salary: number

    constructor(id: number, name: string, surname: string, department: string, since: number, salary: number) {
        this.id = id
        this.name = name
        this.surname = surname
        this.department = department
        this.since = since
        this.salary = salary
    }

}