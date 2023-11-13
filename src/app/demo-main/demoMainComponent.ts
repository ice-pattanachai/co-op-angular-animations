import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import {
  bounceAnimation,
  flashAnimation
} from 'angular-animations';


@Component({
  selector: 'app-demo-main',
  templateUrl: './demo-main.component.html',
  styleUrls: ['./demo-main.component.css'],
  animations: [
    bounceAnimation({ duration: 2000 }),
    flashAnimation({ duration: 2000 }),
  ]
})
export class DemoMainComponent {
  animState = false;
  animDone() {
    this.animState = !this.animState;
  }
}
