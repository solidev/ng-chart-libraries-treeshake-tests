import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';


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
    const TESTER = document.getElementById('tester');
    Plotly.newPlot(TESTER, [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }], {
      margin: {t: 0}
    });
  }
}

