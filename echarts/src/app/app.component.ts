import { Component } from '@angular/core';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterLinkWithHref,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
}
