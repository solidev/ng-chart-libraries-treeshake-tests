import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  Chart,
  LineElement,
  LineController,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle, CategoryScale, PointElement,
} from 'chart.js';



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
    Chart.register(
      LineElement,
      LineController,
      CategoryScale,
      LinearScale,
      PointElement,
      Legend,
      Title,
      Tooltip,
      SubTitle
    );
    const labels = ['J', 'F', 'M', "A", 'M', 'J', 'J'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    const config = {
      type: 'line',
      data: data,
    };
    new Chart('chart', config as any)
  }
}

