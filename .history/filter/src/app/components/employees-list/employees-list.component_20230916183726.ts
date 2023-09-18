import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employees';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  employeesList: Employee[] = [
    { id: 0, name: 'Lara Amadine', position: 'Frontend Developer', since: 2019, salary: 2800 },
    { id: 1, name: 'Rodrigo Astro', position: 'Backend Developer', since: 2020, salary: 2750 },
    { id: 2, name: 'Lucas Vinter', position: 'Frontend Developer', since: 2019, salary: 2800 },
    { id: 3, name: 'Peter Pan', position: 'Fullstack Developer', since: 2022, salary: 2650 },
    { id: 4, name: 'Nadia Martínez', position: 'Fullstack Developer', since: 2020, salary: 2750 },
    { id: 4, name: 'Annie Wheel', position: 'Backend Developer', since: 2022, salary: 2650 }
  ]
  activeRadio = 'All'
  getAllDevelopers(): number {
    return this.employeesList.length
  }
  getFrontendDevelopers(): number {
    return this.employeesList.filter(developer => developer.position === 'Frontend Developer').length
  }

  getBackendDevelopers(): number {
    return this.employeesList.filter(developer => developer.position === 'Backend Developer').length
  }

  getFullstackDevelopers(): number {
    return this.employeesList.filter(developer => developer.position === 'Fullstack Developer').length
  }


}
