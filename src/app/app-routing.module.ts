import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullVersionComponent} from "./full-version/full-version.component";
import {MiniVersionComponent} from "./mini-version/mini-version.component";
import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {D3Component} from "./d3/d3.component";
import { CommonModule } from '@angular/common';
import {ChartComponent} from "./chart/chart.component";

const routes: Routes = [
  {path: '', component: MiniVersionComponent},
  {path: 'mini', component: MiniVersionComponent},
  {path: 'full', component: FullVersionComponent},
  {path: 'details/:id', component: TaskDetailComponent},
  {path: 'd3', component: D3Component},
  {path: 'chart', component: ChartComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
