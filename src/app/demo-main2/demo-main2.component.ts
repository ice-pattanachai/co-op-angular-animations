import { Component } from '@angular/core';
import { bounceAnimation, flashAnimation } from 'angular-animations';

@Component({
  selector: 'app-demo-main2',
  templateUrl: './demo-main2.component.html',
  styleUrls: ['./demo-main2.component.css'],
  animations: [
    bounceAnimation({ duration: 2000 }),
    flashAnimation({ duration: 5000 }),

  ]
})
export class DemoMain2Component {
  animState = false;
  animDone() {
    this.animState = !this.animState;
  }
}
