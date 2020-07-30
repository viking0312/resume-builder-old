import {
  Component,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
import sampleTemplate from "../../default-data.json";

@Component({
  selector: "app-resume-template1",
  templateUrl: "./resume-template1.component.html",
  styleUrls: ["./resume-template1.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ResumeTemplate1Component implements OnInit {
  personalInfoObj: any;
  experienceObj = [];
  educationObj = [];
  skillsObj: any;
  skills: any;
  educations: any;
  @Output() template1 = new EventEmitter<boolean>();
  constructor(private hostElement: ElementRef) {
    console.log(this.hostElement.nativeElement.outerHTML);
  }

  ngOnInit() {
    console.log("component loading..");
    this.experienceObj = sampleTemplate.template1.experience;
    this.personalInfoObj = sampleTemplate.template1.personalInfo;
    this.educationObj = sampleTemplate.template1.education;
    this.skillsObj = sampleTemplate.template1.skills;
    this.skills = Object.keys(this.skillsObj);
    this.educations = Object.keys(this.educationObj);
  }

  closeComponent() {
    this.template1.emit(false);
  }
  updateSkills(data) {
    console.log("what the hell" + JSON.stringify(data));
    this.skillsObj = data;
    if (data != null) this.skills = Object.keys(this.skillsObj);
    else this.skills = [];
  }
  updateEducations(data) {
    console.log("what the hell for educations" + JSON.stringify(data));
    this.educationObj = data;
    if (data != null) this.educations = Object.keys(this.educationObj);
    else this.educations = [];
  }
  public convetToPDF() {
    var data = document.getElementById("page-wrap");
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("Resume-File.pdf"); // Generated PDF
    });
  }
}
