import { Component } from '@angular/core';
import {jelloAnimation } from 'angular-animations';

@Component({
  selector: 'app-demo-main4',
  templateUrl: './demo-main4.component.html',
  styleUrls: ['./demo-main4.component.css'],
  animations: [
    jelloAnimation({ duration: 2000 }),
  ]
})
export class DemoMain4Component {
  animState = false;
  animDone() {
    this.animState = !this.animState;
  }
}
