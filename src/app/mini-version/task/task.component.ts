import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Status, Task} from "../../task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  public readonly status: typeof Status = Status;
  @Output() removeTask: EventEmitter<number> = new EventEmitter<number>();
  @Output() changeStatus: EventEmitter<void> = new EventEmitter<void>();

  public toggleDoneTask(): void {
    this.changeStatus.emit();
  }

  public removeById(): void {
    this.removeTask.emit();
  }
}
