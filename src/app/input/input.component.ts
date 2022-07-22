import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() addNewTask: EventEmitter<string> = new EventEmitter<string>();
  public newName: string;

  public saveTask(): void {
    this.addNewTask.emit(this.newName);
    this.newName = '';
  }
}
