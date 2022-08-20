import {Component, Input, OnInit} from '@angular/core';
import { Chart } from "chart.js";
import {Status} from "../../task";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() data:number[]=[];
  public chart: Chart;
  public readonly status: typeof Status = Status;
  public labels= [Status.ToDo, Status.InProgress, Status.Done];

  ngOnInit() {
    this.chart = new Chart("canvas-bar", {
      type: "bar",
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'none',
            data: this.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1
          }
        ]
      },
    });
  }
}
