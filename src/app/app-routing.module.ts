import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullVersionComponent} from "./full-version/full-version.component";
import {MiniVersionComponent} from "./mini-version/mini-version.component";
import {TaskDetailComponent} from "./task-detail/task-detail.component";

const routes: Routes = [
  {path: '', component: MiniVersionComponent},
  {path: 'mini', component: MiniVersionComponent},
  {path: 'full', component: FullVersionComponent},
  {path: 'details/:id', component: TaskDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
