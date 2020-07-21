import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter } from "@angular/core";
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: "app-resume-template1",
  templateUrl: "./resume-template1.component.html",
  styleUrls: ["./resume-template1.component.scss"],
})
export class ResumeTemplate1Component implements OnInit {
  @Output() template1 = new EventEmitter<boolean>();
  constructor(private hostElement: ElementRef) {
    console.log(this.hostElement.nativeElement.outerHTML);
  }

  ngOnInit() { }

  closeComponent() {
    this.template1.emit(false);
  }
  public convetToPDF() {
    var data = document.getElementById('page-wrap');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Resume-File.pdf'); // Generated PDF
    });
  }
}
