import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Status, Task} from "../task";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})

export class TaskDetailComponent implements OnInit, AfterViewInit {
  public readonly kayLocalStorage: string = 'todos';
  public task?: Task;
  public tasks: Task[] = [];
  public status: typeof Status = Status;
  public taskId: number;
  public nameTask?: string;
  public detailTask?: string;
  public statusTask?: string;
  public blockNameTask: boolean = true;
  public blockDetailTask: boolean = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
  }

  @ViewChild('nameInput') nameInputElement!: ElementRef<HTMLInputElement>;
  public ngAfterViewInit(): void {
    this.nameInputElement.nativeElement.focus();
  }



  ngOnInit(): void {
    this.taskId = this.route.snapshot.params['id'];
    this.tasks = JSON.parse(localStorage.getItem(this.kayLocalStorage) || '[]');
    this.task = this.tasks.find(tasks => tasks.id == this.taskId);
    this.statusTask = this.task?.status;
    this.nameTask = this.task?.name;
    this.detailTask = this.task?.detail;

  }

  public addToLocalStorage(): void {
    localStorage.setItem(this.kayLocalStorage, JSON.stringify(this.tasks));
  }

  public toggleInputShow(): void {
    this.blockNameTask = true;
    this.blockDetailTask = true;
    this.updateTask();
  }

  public updateTask(): void {
    if (this.task && this.nameTask && this.detailTask) {
      this.task.name = this.nameTask;
      this.task.detail = this.detailTask;
      this.tasks = this.tasks.filter(tasks => tasks.id != this.taskId);
      this.tasks.push(this.task);
    }
    this.addToLocalStorage();
  }

  public toggleTaskStatus(status: Status): void {
    if (this.task) {
      this.task.status = status;
      this.statusTask = status;
      this.updateTask()
    }
  }

  remove(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/mini']);
      }
    });
  }

}
