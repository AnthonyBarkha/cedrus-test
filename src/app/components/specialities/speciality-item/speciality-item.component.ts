import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-speciality-item',
  templateUrl: './speciality-item.component.html',
  styleUrls: ['./speciality-item.component.scss']
})
export class SpecialityItemComponent implements OnInit {

  @Input() speciality: any;

  constructor() { }

  ngOnInit(): void {
  }

}
