import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  @Input() skills: any;
  @Output() skillsObj = new EventEmitter();
  skillKeys: string[];
  newKey: string;
  newSkills: string[];

  //maulik: [String] = ["what"];

  constructor() {}

  ngOnInit() {
    //console.log("maulik" + JSON.stringify(this.skills));
    this.skillKeys = Object.keys(this.skills);
  }

  addSkill() {
    this.skillKeys.push(this.newKey);
    this.skills[this.newKey] = this.newSkills;
    this.newKey = "";
    this.newSkills = [];
  }

  saveChanges() {
    console.log("what the frick");
    this.skillsObj.emit(this.skills);
  }
  clearData() {
    console.log("clearing dta");
    this.skills = null;
    this.skillKeys = [];
  }
}
