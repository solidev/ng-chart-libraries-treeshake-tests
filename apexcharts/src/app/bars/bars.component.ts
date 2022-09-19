import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      series: [{
        data: [{
          x: 'category A',
          y: 10
        }, {
          x: 'category B',
          y: 18
        }, {
          x: 'category C',
          y: 13
        }]
      }]
    }
    const chart = new ApexCharts(document.querySelector("#bars"), options);
    chart.render();

  }

}
