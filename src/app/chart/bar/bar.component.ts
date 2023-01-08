import {Component, Input, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {Status} from "../../task";
import {
  CHARTJS_BAR_BACKGROUND_COLOR,
  CHARTJS_BAR_BORDER_COLOR
} from "../../const"

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() data: number[] = [];
  public chart: Chart;
  public readonly status: typeof Status = Status;
  public labels = [Status.ToDo, Status.InProgress, Status.Done];

 public ngOnInit(): void {
    this.chart = new Chart("canvas-bar", {
      type: "bar",
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'All Bars',
            data: this.data,
            backgroundColor: CHARTJS_BAR_BACKGROUND_COLOR,
            borderColor: CHARTJS_BAR_BORDER_COLOR,
            borderWidth: 1
          }
        ]
      },
    });
  }
}
