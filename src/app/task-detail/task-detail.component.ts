import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Status, Task} from "../task";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";
import {AppComponent} from "../app.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})

export class TaskDetailComponent implements OnInit {
  public readonly kayLocalStorage: string = 'todos';
  public task?: Task;
  public tasks: Task[] = [];
  public status: typeof Status = Status;
  public taskId: number;
  public blockNameTask: boolean = true;
  public blockDetailTask: boolean = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              public isFullVersion:AppComponent,
              public snackBar: MatSnackBar
  ) {
  }

  @ViewChild('nameTask2') nameTaskElement!: ElementRef<HTMLInputElement>;
  public focusOnInputName(): void {
    this.nameTaskElement.nativeElement.focus();
  }

  @ViewChild('detailTask2') detailTaskElement!: ElementRef<HTMLInputElement>;
  public focusOnInputDetail(): void {
    this.detailTaskElement.nativeElement.focus();
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.params['id'];
    this.tasks = JSON.parse(localStorage.getItem(this.kayLocalStorage) || '[]');
    this.task = this.tasks.find(tasks => tasks.id == this.taskId);
  }

  public addToLocalStorage(): void {
    localStorage.setItem(this.kayLocalStorage, JSON.stringify(this.tasks));
  }

  public clickOutInput(): void {
    this.blockNameTask = true;
    this.blockDetailTask = true;
    this.updateTask();
  }

  public updateTask(): void {
    this.tasks = this.tasks.filter(tasks => tasks.id != this.taskId);
    if (this.task) {
      this.tasks.push(this.task);
    }
    this.addToLocalStorage();
  }

  public toggleTaskStatus(status: Status): void {
    if (this.task) {
      this.task.status = status;
      this.addToLocalStorage();
    }
  }

  public remove(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks = this.tasks.filter(tasks => tasks.id != this.taskId);
        this.addToLocalStorage();
        this.snackBar.open('Deleted', '', {
          duration: 3000
        });
        if (this.isFullVersion.isFullVersion){
          this.router.navigate(['/full']);
        }else {
          this.router.navigate(['/mini']);
        }
      }
    })
  }

  public exit(): void{
    if (this.isFullVersion.isFullVersion){
      this.router.navigate(['/full']);
    }else {
      this.router.navigate(['/mini']);
    }
  }
}
