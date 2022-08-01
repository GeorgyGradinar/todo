import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TaskComponent} from './mini-version/task/task.component';
import {InputComponent} from './input/input.component';
import {FullVersionComponent} from './full-version/full-version.component';
import {MiniVersionComponent} from './mini-version/mini-version.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';
import { StatusTasksComponent } from './full-version/status-tasks/status-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    InputComponent,
    FullVersionComponent,
    MiniVersionComponent,
    TaskDetailComponent,
    ConfirmationModalComponent,
    StatusTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
