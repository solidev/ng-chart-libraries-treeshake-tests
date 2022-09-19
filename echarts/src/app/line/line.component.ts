import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  GridComponentOption
} from 'echarts/components';
import {
  LineChart,
  LineSeriesOption
} from 'echarts/charts';
import {
  UniversalTransition
} from 'echarts/features';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use(
  [GridComponent, LineChart, CanvasRenderer, UniversalTransition]
);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
  >


@Component({
  selector: 'app-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);
    let option: EChartsOption;

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
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };

    option && myChart.setOption(option);

  }
}

