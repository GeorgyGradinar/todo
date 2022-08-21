import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import {Status} from "../../task";
import {CHARTJS_DOUGHTNUT_BACKGROUND_COLOR} from "../../const";

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {
  @Input() data:number[]=[];
  public chart: Chart;
  public readonly status: typeof Status = Status;
  public labels= [Status.ToDo, Status.InProgress, Status.Done];

  public ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: CHARTJS_DOUGHTNUT_BACKGROUND_COLOR
          },
        ]
      },
    });
  }
}
