import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employees';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  employeesList: Employee[] = [
    { id: 0, name: 'Lara', surname: 'Amadine', position: 'Frontend Developer', since: 2019, salary: 2800 },
    { id: 1, name: 'Rodrigo', surname: 'Astro', position: 'Backend Developer', since: 2020, salary: 2750 },
    { id: 2, name: 'Lucas', surname: 'Vinter', position: 'Frontend Developer', since: 2019, salary: 2800 },
    { id: 3, name: 'Peter', surname: 'Pan', position: 'Fullstack Developer', since: 2022, salary: 2650 },
    { id: 4, name: 'Nadia', surname: 'Martínez', position: 'Fullstack Developer', since: 2020, salary: 2750 },
    { id: 4, name: 'Annie', surname: 'Wheel', position: 'Backend Developer', since: 2022, salary: 2650 }
  ]

  getFrontentDevelopers(): number {
    return this.employeesList.filter(developer => developer.position === 'Frontend Developer').length
  }
}
