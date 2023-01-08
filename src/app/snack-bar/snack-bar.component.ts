import { Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

  constructor(public snackBar: MatSnackBar) {}

  public openSnackBar() {
    this.snackBar.open('Delete', 'X', {
      duration: 2000,

    });
  }

}
