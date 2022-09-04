import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  about: boolean = false;
  contact: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToContact() {
    const elmntToView = document.getElementById("contact-us");
    if(elmntToView != null) {
      elmntToView.scrollIntoView(); 
    }
    this.contact = true;
    this.about = false;
  }

  goToAbout() {
    const elmntToView = document.getElementById("specialities");
    if(elmntToView != null) {
      elmntToView.scrollIntoView(); 
    }
    this.about = true;
    this.contact = false;
  }
}
