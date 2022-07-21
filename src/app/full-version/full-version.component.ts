import {Component, OnInit} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";
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
      const task: Task = { name: name, id: Math.random(), status: Status.ToDo};
      this.tasks.push(task)
      this.addToLocalStorage();
    } else {
      this.hasError = true;
      setTimeout(() => {
        this.hasError = false;
      }, 2000);
    }
  }

  public todo(): Task[] {
    return this.tasks.filter((task: Task) => task.status === Status.ToDo);
  }

  public inProgress(): Task[] {
    return this.tasks.filter((task: Task) => task.status === Status.InProgress);
  }

  public isDone(): Task[] {
    return this.tasks.filter((task: Task) => task.status === Status.Done);
  }

  drop(event: CdkDragDrop<Task[]>, status: Status) {
    let task: Task | undefined = this.tasks.find((item: Task) => item.id === event.item.data.id);
    if (task) {
      task.status = status
      this.addToLocalStorage();
    }
  }

  public countTaskStatus(status: Status): number {
    return this.tasks.filter((task: Task) => task.status === status).length;
  }

  public removeById(id: number): void {
    this.tasks = this.tasks.filter(tasks => tasks.id != id)
    this.addToLocalStorage();
  }

  public removeByStatus(status: Status):void{
    this.tasks = this.tasks.filter((task: Task) => task.status !== status);
    this.addToLocalStorage();
  }
}



