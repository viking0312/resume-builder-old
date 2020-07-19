import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
import { ResumeTemplate1Component } from './scroll-bar/resume-template1/resume-template1.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollBarComponent,
    ResumeTemplate1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
