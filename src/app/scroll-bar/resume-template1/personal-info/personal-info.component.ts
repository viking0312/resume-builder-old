import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.scss"],
})
export class PersonalInfoComponent implements OnInit {
  @Input() personalInfo = {
    name: "",
    role: "",
    cell: "",
    email: "",
    dob: "",
    address: "",
    description: "",
  };
  @Output() personalInfoObj = new EventEmitter();
  personalData = {
    name: "",
    role: "",
    cell: "",
    email: "",
    dob: "",
    address: "",
    description: "",
  };
  constructor() {}

  ngOnInit() {
    this.personalData = JSON.parse(JSON.stringify(this.personalInfo));
  }

  saveChanges() {
    this.personalInfoObj.emit(this.personalData);
  }

  clearData() {
    this.personalData = {
      name: "",
      role: "",
      cell: "",
      email: "",
      dob: "",
      address: "",
      description: "",
    };
  }
}
