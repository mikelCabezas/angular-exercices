export class Employee {
    id: number
    name: string
    position: string
    since: number
    salary: number

    constructor(id: number, name: string, position: string, since: number, salary: number) {
        this.id = id
        this.name = name
        this.position = position
        this.since = since
        this.salary = salary
    }

}