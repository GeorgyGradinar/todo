import { Component, OnInit } from '@angular/core';
import { Status, Task} from "../task";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public readonly kayLocalStorage: string = 'todos';
  public readonly status: typeof Status = Status;
  public tasks: Task[] = [];

  public data:number[]=[];

  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem(this.kayLocalStorage) || '[]');
    let countTodo = this.tasks.filter((task: Task) => task.status === Status.ToDo).length;
    let countInProgress = this.tasks.filter((task: Task) => task.status === Status.InProgress).length;
    let countDone = this.tasks.filter((task: Task) => task.status === Status.Done).length;
    this.data.push(countTodo)
    this.data.push(countInProgress)
    this.data.push(countDone)
  }

}
