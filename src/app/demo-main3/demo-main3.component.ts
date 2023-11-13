import { Component } from '@angular/core';
import { bounceAnimation, flashAnimation, pulseAnimation } from 'angular-animations';

@Component({
  selector: 'app-demo-main3',
  templateUrl: './demo-main3.component.html',
  styleUrls: ['./demo-main3.component.css'],
  animations: [
    pulseAnimation({ duration: 5000 }),
  ]
})
export class DemoMain3Component {
  animState = false;
  animDone() {
    this.animState = !this.animState;
  }

}
