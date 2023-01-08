import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Status, Task} from "../../task";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationModalComponent} from "../../confirmation-modal/confirmation-modal.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-status-tasks',
  templateUrl: './status-tasks.component.html',
  styleUrls: ['./status-tasks.component.scss']
})
export class StatusTasksComponent {
  public readonly status: typeof Status = Status;

  @Input() public tasks: Task[];
  @Input() public allTaskStatus: Task[];
  @Input() public statusTask: Status;
  @Input() public title: string;
  @Input() public countTask: number;

  @Output() public updateAllTasks: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {
  }

  public drop(event: CdkDragDrop<Task[]>, status: Status): void {
    let task: Task | undefined = this.tasks.find((item: Task) => item.id === event.item.data.id);
    if (task) {
      task.status = status;
      this.updateAllTasks.emit(this.tasks);
    }
  }

  public removeById(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks = this.tasks.filter(tasks => tasks.id != id);
        this.updateAllTasks.emit(this.tasks);
        this.snackBar.open('Deleted', '', {
          duration: 3000
        });
      }
    })

  }

  public removeByStatus(status: Status): void {
    this.tasks = this.tasks.filter((task: Task) => task.status !== status);
    this.updateAllTasks.emit(this.tasks);
  }
}
