import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  GridComponentOption
} from 'echarts/components';
import {
  BarChart,
  BarSeriesOption
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use(
  [GridComponent, BarChart, CanvasRenderer]
);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | BarSeriesOption
  >

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


    var chartDom = document.getElementById('bars')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);

  }

}
