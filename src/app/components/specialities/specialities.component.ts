import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.scss']
})
export class SpecialitiesComponent implements OnInit {

  specialities = [
    {
      "logo": "../../../assets/images/intuitive acj.png",
      "title": "Intuitive",
      "text": "For surgeons, by surgeons. Software that intuitively follows your practice workflow."
    },
    {
      "logo": "../../../assets/images/smart acj.png",
      "title": "Smart",
      "text": "Using the power of artificial intelligence to your advantage."
    },
    {
      "logo": "../../../assets/images/Saffordable acj.png",
      "title": "Affordable",
      "text": "No expensive capital equipment required."
    },
    {
      "logo": "../../../assets/images/research acj.png",
      "title": "Proven",
      "text": "With a body of research to support our software."
    },
    {
      "logo": "../../../assets/images/secureacj.png",
      "title": "Secure",
      "text": "Your data is your own."
    },
    {
      "logo": "../../../assets/images/c arm acj.png",
      "title": "C-arm",
      "text": "One click away from your implant position during Hip Replacement."
    },
    {
      "logo": "../../../assets/images/data acj.png",
      "title": "Data",
      "text": "Data capture that facilitates clinical efficacy"
    },
    {
      "logo": "../../../assets/images/universal acj.png",
      "title": "All you need",
      "text": "All the tools the arthroplasty surgeon needs."
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
