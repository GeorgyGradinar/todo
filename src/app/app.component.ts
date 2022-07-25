import {Component} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isFullVersion: boolean = true;
  public isChecked: boolean = false;
  mode:string = 'nightlight-round'

  changed(event: MatSlideToggleChange): void{
      this.mode = event.checked ? 'light_mode' : 'nightlight-round'
    document.body.classList.toggle('darkMode')
  }
}

