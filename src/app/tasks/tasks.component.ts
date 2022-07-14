import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input() task: Task;
  @Output() removeTasks: EventEmitter<number> = new EventEmitter<number>();

  public removeById(): void {
    this.removeTasks.emit();
  }
}
