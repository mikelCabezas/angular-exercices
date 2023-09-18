import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employees';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  employeesList: Employee[] = [
    { id: 0, name: 'Lara', surname: 'Amadine', position: 'Frontend Developer', since: 2019, salary: 2800 }
  ]
}
