import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import {Status} from "../../task";

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

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: ['rgb(229,118,118)','rgb(136,134,206)', 'rgb(121,227,207)']
          },
        ]
      },
    });
  }
}
