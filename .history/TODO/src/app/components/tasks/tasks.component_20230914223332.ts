import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasksList: Task[] = []
  taskName = ''

  constructor() { }

  ngOnInit(): void {

  }

  addTask() {
    // Create task object

    // Add the object to array

    // Reset input
  }
}
