import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularImgComponent } from './angular-img/angular-img.component';
import { DemoMainComponent } from './demo-main/demoMainComponent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMain2Component } from './demo-main2/demo-main2.component';
import { DemoMain3Component } from './demo-main3/demo-main3.component';
import { DemoMain4Component } from './demo-main4/demo-main4.component';
import { DemoMain5Component } from './demo-main5/demo-main5.component';



@NgModule({
  declarations: [
    AppComponent,
    AngularImgComponent,
    DemoMainComponent,
    DemoMain2Component,
    DemoMain3Component,
    DemoMain4Component,
    DemoMain5Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
