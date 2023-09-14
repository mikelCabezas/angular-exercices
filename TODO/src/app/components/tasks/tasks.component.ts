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
    const task: Task = {
      name: this.taskName,
      status: false
    }

    this.tasksList.push(task)
    this.taskName = ''
  }

  deleteTask(index: number): void {
    this.tasksList.splice(index, 1)
  }

  updateTask(task: Task, index: number) {
    this.tasksList[index].status = !task.status
  }
}
