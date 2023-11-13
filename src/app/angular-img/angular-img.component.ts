import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-img',
  templateUrl: './angular-img.component.html',
  styleUrls: ['./angular-img.component.css']
})
export class AngularImgComponent {
  images: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg'
  ];
  currentIndex: number = 0;

  constructor() {
    this.startImageLoop();
  }

  startImageLoop() {
    setInterval(() => {
      console.log(this.images[this.currentIndex]);
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }


}
