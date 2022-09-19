import {Routes} from "@angular/router";

export const ROUTES: Routes= [
  {
    path: 'linechart',
    loadComponent: () => import("./line/line.component").then((m) => m.LineComponent)
  },
  {
    path: 'barchart',
    loadComponent: () => import("./bars/bars.component").then((m) => m.BarsComponent)
  }
]
