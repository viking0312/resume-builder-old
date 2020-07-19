import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-resume-template1",
  templateUrl: "./resume-template1.component.html",
  styleUrls: ["./resume-template1.component.scss"],
})
export class ResumeTemplate1Component implements OnInit {
  @Output() template1 = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  closeComponent() {
    console.log("shikhda gandu");
    this.template1.emit(false);
  }
}
