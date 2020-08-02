import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-edit-experience-dialog",
  templateUrl: "./edit-experience-dialog.component.html",
  styleUrls: ["./edit-experience-dialog.component.scss"],
})
export class EditExperienceDialogComponent implements OnInit {
  @Input() experiences: any;
  @Output() experienceObj = new EventEmitter();
  experienceInfo: any;
  newexperiences: any;
  addKeys: any;
  experienceTempInfo: any;

  //maulik: [String] = ["what"];

  constructor() {}

  ngOnInit() {
    //console.log("maulik" + JSON.stringify(this.skills));
    //this.experienceInfo = this.experiences;
    this.experienceInfo = JSON.parse(JSON.stringify(this.experiences));
  }
  addexperiences() {
    this.newexperiences = {
      fromDate: "",
      toDate: "",
      institute: "",
      degree: "",
      keyPoints: [],
    };
    this.experienceInfo.push(this.newexperiences);
    //this.newexperiences = [];
  }

  newElement(addKeys, key) {
    key.keyPoints.push(addKeys);
    this.addKeys = "";
  }

  deleteRow(key: string, keys) {
    const index: number = keys.keyPoints.indexOf(key);
    if (index !== -1) {
      keys.keyPoints.splice(index, 1);
    }
    // this.skillKeys = Object.keys(this.experienceInfo.keyPoints);
  }

  saveChanges() {
    console.log("Inside saveChanges");
    console.log(this.experienceInfo);
    this.experienceObj.emit(this.experienceInfo);
  }

  clearData() {
    this.experienceInfo = {
      fromDate: "",
      toDate: "",
      institute: "",
      degree: "",
      index: 0,
      keyPoints: [],
    };
  }
}
