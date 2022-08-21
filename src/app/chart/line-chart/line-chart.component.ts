import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartOptions} from "chart.js";
import {Status} from "../../task";
import {
  CHARTJS_LINE_GRADIENT_COLOR_START,
  CHARTJS_LINE_GRADIENT_COLOR_STOP,
  CHARTJS_BAR_BORDER_COLOR
} from "../../const";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() data: number[] = [];
  @ViewChild('myCanvas') canvas!: ElementRef;
  public readonly status: typeof Status = Status;
  public countTasks: number[] = [];
  public labels = [Status.ToDo, Status.InProgress, Status.Done];
  public width: number
  public height: number
  public gradient: any;
  public lineChartLegend = false;

 public ngOnInit(): void {
    this.countTasks.push(...this.data);
  }

  public getGradient(ctx: any, chartArea: any): void {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!this.gradient || this.width !== chartWidth || this.height !== chartHeight) {
      this.width = chartWidth;
      this.height = chartHeight;
      this.gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      this.gradient.addColorStop(0, CHARTJS_LINE_GRADIENT_COLOR_START);
      this.gradient.addColorStop(1, CHARTJS_LINE_GRADIENT_COLOR_STOP);
    }
    return this.gradient;
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.labels,
    datasets: [
      {
        data: this.countTasks,
        label: 'Tasks ',
        tension: 0.5,
        borderColor: CHARTJS_BAR_BORDER_COLOR,
        borderWidth: 1,
        fill: {
          target: 'origin',
          // @ts-ignore
          above: (context: any) => {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            return this.getGradient(ctx, chartArea);
          },
        },
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
}
