import {Component, Input, OnInit} from '@angular/core';
import {Statistic, Status} from "../../task";
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public readonly status: typeof Status = Status;
  @Input() data: Statistic[] = [];
  public width: number;
  public height: number;
  public margin = {top: 20, right: 20, bottom: 30, left: 40};
  public x: any;
  public y: any;
  public svg: any;
  public g: any;

  constructor() {
    this.width = 300 - this.margin.left - this.margin.right;
    this.height = 300 - this.margin.top - this.margin.bottom;
  }

  public ngOnInit(): void {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  public initSvg(): void {
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '100 0 900 450');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  public initAxis(): void {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.2);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.data.map((d) => d.status));
    this.y.domain([0, this.data.length]);
  }

  public drawAxis(): void {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y).ticks(5, ''))
    .append('text')
    .attr('class', 'axis-title')
    .attr('transform', 'rotate(-50)')
    .attr('dy', '2em')
    .attr('text-anchor', 'end')
    .text('Frequency');
  }

  public drawBars(): void {

    this.g.selectAll('.bar')
      .data(this.data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => this.x(d.status))
      .attr('y', (d: any) => this.y(d.count))
      .attr('width', 50)
      .attr('fill', '#429932')
      .attr('height', (d: any) => this.height - this.y(d.count));
  }
}
