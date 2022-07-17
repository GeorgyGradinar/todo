import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TaskComponent } from './mini-version/components/task/task.component';
import { InputComponent } from './mini-version/components/input/input.component';
import { FullVersionComponent } from './full-version/full-version.component';
import { MiniVersionComponent } from './mini-version/mini-version.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    InputComponent,
    FullVersionComponent,
    MiniVersionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
