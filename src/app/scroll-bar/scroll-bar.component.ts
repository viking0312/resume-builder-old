import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-scroll-bar",
  templateUrl: "./scroll-bar.component.html",
  styleUrls: ["./scroll-bar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ScrollBarComponent implements OnInit {
  template1: any = false;
  constructor() {}

  ngOnInit() {}

  images = [
    { img: "../../assets/images/mockup-image-1.png" },
    { img: "../../assets/images/mockup-image-1.png" },
    { img: "../../assets/images/mockup-image-1.png" },
    { img: "../../assets/images/mockup-image-1.png" },
    { img: "../../assets/images/mockup-image-1.png" },
    { img: "../../assets/images/mockup-image-1.png" },
    { img: "../../assets/images/mockup-image-1.png" },
    { img: "../../assets/images/mockup-image-1.png" },
    { img: "../../assets/images/mockup-image-1.png" },
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    infinite: false,
    arrows: true,
  };

  openResume() {
    this.template1 = true;
  }

  onVoted(agreed: boolean) {
    this.template1 = agreed;
  }
}
