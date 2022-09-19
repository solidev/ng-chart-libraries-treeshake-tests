import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import bb, {bar} from "billboard.js";

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

    var chart = bb.generate({
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 130, 100, 140, 200, 150, 50]
        ],
        type: bar(), // for ESM specify as: bar()
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },
      bindto: "#barChart_1"
    });

    setTimeout(function() {
      chart.load({
        columns: [
          ["data3", 130, -150, 200, 300, -200, 100]
        ]
      });
    }, 1000);

    var chart2 = bb.generate({
      data: {
        columns: [
          ["data1", -100, 100, 200, [-100, 0],
            [0, 100],
            [100, 200]
          ],
          ["data2", 100, 300, 500, [0, 100],
            [100, 300],
            [200, 500]
          ]],
        type: bar(), // for ESM specify as: bar()
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },
      bindto: "#barChart_2"
    });

    setTimeout(function() {
      chart.load({
        columns: [
          ["data3", 200, 500, 800, [100, 200], [300, 500], [500, 800]],
        ],
        type: bar(), // for ESM specify as: bar()
      });
    }, 1000);
  }

}
