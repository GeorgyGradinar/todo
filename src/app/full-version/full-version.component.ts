import {Component, OnInit} from '@angular/core';
import {Status, Task} from "../task";

@Component({
  selector: 'app-full-version',
  templateUrl: './full-version.component.html',
  styleUrls: ['./full-version.component.scss']
})
export class FullVersionComponent implements OnInit{
  public readonly kayLocalStorage: string = 'todos';
  public tasks: Task[] = [];
  public readonly status: typeof Status = Status;
  public hasError: boolean = false;

  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem(this.kayLocalStorage) || '[]');
  }

  public addToLocalStorage(): void {
    localStorage.setItem(this.kayLocalStorage, JSON.stringify(this.tasks));
  }

  public saveTask(name: string): void {
    if (name.trim()) {
      const task: Task = { name: name, detail:'', id: Math.random(), status: Status.ToDo};
      this.tasks.push(task)
      this.addToLocalStorage();
    } else {
      this.hasError = true;
      setTimeout(() => {
        this.hasError = false;
      }, 2000);
    }
  }

  public get todo(): Task[] {
    return this.tasks.filter((task: Task) => task.status === Status.ToDo);
  }

  public get inProgress(): Task[] {
    return this.tasks.filter((task: Task) => task.status === Status.InProgress);
  }

  public get isDone(): Task[] {
    return this.tasks.filter((task: Task) => task.status === Status.Done);
  }

  public countTaskStatus(status: Status): number {
    return this.tasks.filter((task: Task) => task.status === status).length;
  }

  public updateAllTasks($event: Task[]): void {
    this.tasks = $event;
    this.addToLocalStorage();
  }
}



