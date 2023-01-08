import { Component, OnInit } from '@angular/core';
import {Statistic, Status, Task} from "../task";

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit {
  public readonly kayLocalStorage: string = 'todos';
  public data: Statistic[] = [];
  public tasks: Task[] = [];
  constructor() { }

  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem(this.kayLocalStorage) || '[]');
    let countTodo = this.tasks.filter((task: Task) => task.status === Status.ToDo).length;
    let countInProgress = this.tasks.filter((task: Task) => task.status === Status.InProgress).length;
    let countDone = this.tasks.filter((task: Task) => task.status === Status.Done).length;

    if (countTodo){
      let task: Statistic = { status: Status.ToDo, count: countTodo};
      this.data.push(task);
    }
    if (countInProgress){
      const task: Statistic = { status: Status.InProgress, count: countInProgress};
      this.data.push(task);
    }
    if (countInProgress){
      const task: Statistic = { status: Status.Done, count: countDone};
      this.data.push(task);
    }
  }
}
