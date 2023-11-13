import { Component } from '@angular/core';
import {flipOutXAnimation } from 'angular-animations';

@Component({
  selector: 'app-demo-main5',
  templateUrl: './demo-main5.component.html',
  styleUrls: ['./demo-main5.component.css'],
  animations: [
    flipOutXAnimation({ duration: 2000 }),
    
  ]
})
export class DemoMain5Component {
  animState = false;
  animDone() {
    this.animState = !this.animState;
  }
}
