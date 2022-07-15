import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() addNewTask: EventEmitter<string> = new EventEmitter<string>();

  public saveTask(nameInput: HTMLInputElement): void {
    this.addNewTask.emit(nameInput.value);
    nameInput.value = '';
  }
}
