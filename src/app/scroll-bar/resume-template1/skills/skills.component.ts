import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  @Input() skillsInfo = {};
  @Output() skillsObj = new EventEmitter();
  skills = {};
  skillKeys: string[];
  newKey: string;
  newSkills: string[];

  //maulik: [String] = ["what"];

  constructor() {}

  ngOnInit() {
    this.skills = JSON.parse(JSON.stringify(this.skillsInfo));
    this.skillKeys = Object.keys(this.skills);
  }

  addSkill() {
    this.skillKeys.push(this.newKey);
    this.skills[this.newKey] = this.newSkills;
    this.newKey = "";
    this.newSkills = [];
  }

  saveChanges() {
    this.skillsObj.emit(this.skills);
  }
  clearData() {
    this.skills = {};
    this.skillKeys = [];
  }
  deleteRow(key: string) {
    delete this.skills[key];
    this.skillKeys = Object.keys(this.skills);
  }
}
