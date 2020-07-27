import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { ScrollBarComponent } from "./scroll-bar/scroll-bar.component";
import { ResumeTemplate1Component } from "./scroll-bar/resume-template1/resume-template1.component";
import { SkillsComponent } from "./scroll-bar/resume-template1/skills/skills.component";
import { TagInputModule } from "ngx-chips";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ScrollBarComponent,
    ResumeTemplate1Component,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
