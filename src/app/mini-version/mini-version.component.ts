import {Component, OnInit} from '@angular/core';
import {Status, Task} from "../task";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-mini-version',
  templateUrl: './mini-version.component.html',
  styleUrls: ['./mini-version.component.scss']
})
export class MiniVersionComponent implements OnInit {
  public readonly kayLocalStorage: string = 'todos';
  public tasks: Task[] = [];
  public hasError: boolean = false;
  public readonly status: typeof Status = Status;

  constructor(
    public dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem(this.kayLocalStorage) || '[]');

  }

  public addToLocalStorage(): void {
    localStorage.setItem(this.kayLocalStorage, JSON.stringify(this.tasks));
  }

  public saveTask(name: string): void {
    if (name.trim()) {
      const task: Task = {name: name, detail: '', id: Math.random(), status: Status.ToDo};
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
    return this.tasks.filter((task: Task) => task.status === Status.Done).length;
  }

  public toggleStatus(task: Task): void {
    if (task.status === Status.Done) {
      task.status = Status.ToDo;
    } else {
      task.status = Status.Done
    }
    this.addToLocalStorage();
  }

  public removeById(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks = this.tasks.filter(tasks => tasks.id != id);
        this.addToLocalStorage();
      }
    })
  }

  public removeAll(): void {
    this.tasks = [];
    localStorage.clear();
  }

  public removeDone(): void {
    this.tasks = this.tasks.filter((task: Task) => task.status !== Status.Done);
    this.addToLocalStorage();
  }

  public closeError(): void {
    this.hasError = false;
  }
}
