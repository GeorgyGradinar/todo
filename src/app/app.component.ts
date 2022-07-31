import {Component} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isFullVersion: boolean = true;
  public isChecked: boolean = false;
  public mode: string = 'nightlight-round';

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  public changedTheme(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'light_mode' : 'nightlight-round'
    document.body.classList.toggle('darkMode')
  }

  public toggleVersion() {
    this.isFullVersion = !this.isFullVersion;
    if (this.isFullVersion) {
      this.router.navigate(['/full']);
    }else {
      this.router.navigate(['/mini']);
    }
  }
}

