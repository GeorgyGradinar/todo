import {Component} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly kayLocalStorage: string = 'todos';
  public tasks: Task[] = [];
  public hasError: boolean = false;

  public ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem(this.kayLocalStorage) || '[]');
  }

  public addToLocalStorage(): void {
    localStorage.setItem(this.kayLocalStorage, JSON.stringify(this.tasks));
  }

  public saveTask(name: string): void {
    if (name.trim()) {
      const task: Task = {isDone: false, name: name, id: Math.random()};
      this.tasks.push(task)
      this.addToLocalStorage();
    } else {
      this.hasError = true;
      setTimeout(() => {
        this.hasError = false;
      }, 2000);
    }
  }

  public countDoneTask(): number {
    return this.tasks.filter(tasks => tasks.isDone).length;
  }

  public toggleStatus(id: number): void {
    this.tasks[id].isDone = !this.tasks[id].isDone;
    this.addToLocalStorage();
  }

  public removeById(id: number): void {
    this.tasks = this.tasks.filter(tasks => tasks.id != id)
    this.addToLocalStorage();
  }

  public removeAll(): void {
    this.tasks = [];
    localStorage.clear();
  }

  public removeDone(): void {
    this.tasks = this.tasks.filter(tasks => !tasks.isDone);
    this.addToLocalStorage();
  }

  public closeError(): void {
    this.hasError = false;
  }
}

