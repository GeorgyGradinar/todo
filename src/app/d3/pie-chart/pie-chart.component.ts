import {Component, Input, OnInit} from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import {Statistic, Status} from "../../task";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public readonly status: typeof Status = Status;
  @Input() data: Statistic[] = [];

  public margin = {top: 20, right: 20, bottom: 30, left: 50};
  public width: number;
  public height: number;
  public radius: number;
  public count = 0;
  public arc: any;
  public labelArc: any;
  public labelPer: any;
  public pie: any;
  public color: any;
  public svg: any;

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right ;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) /2;
  }

  ngOnInit(): void {
    this.data.map((count) =>this.count += count.count)
    this.initSvg();
    this.drawPie();
  }

  public initSvg(): void{
    this.color = d3Scale.scaleOrdinal()
      .range(['#FFA500', '#00FF00', '#FF0000', '#6b486b', '#FF00FF', '#d0743c', '#00FA9A']);
    this.arc = d3Shape.arc()
      .outerRadius(this.radius - 5)
      .innerRadius(0);
    this.labelArc = d3Shape.arc()
      .outerRadius(this.radius - 80)
      .innerRadius(this.radius - 80);

    this.labelPer = d3Shape.arc()
      .outerRadius(this.radius - 120)
      .innerRadius(this.radius - 120);

    this.pie = d3Shape.pie()
      .sort(null)
      .value((d: any) => d.count);

    this.svg = d3.select('#pieChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
      .append('g')
      .attr('transform', 'translate(' + Math.min(this.width, this.height) / 2 + ',' + Math.min(this.width, this.height) / 2 + ')');
  }

  public drawPie(): void{
    const g = this.svg.selectAll('.arc')
      .data(this.pie(this.data))
      .enter().append('g')
    g.append('path').attr('d', this.arc)
      .style('fill', (d: any) => this.color(d.data.status) );
    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
      .text((d: any) => d.data.status);
    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelPer.centroid(d) + ')')
      .attr('dy', '.35em')
      .text((d: any) =>Math.round( (d.data.count * 100)/this.count) + '%');
  }
}
