import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  @Output() removeTask: EventEmitter<number> = new EventEmitter<number>();

  public removeById(): void {
    this.removeTask.emit();
  }
}
