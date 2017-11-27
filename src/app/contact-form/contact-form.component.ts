import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

  Hel = [];

  constructor() {

  }

  ngOnInit() {

  }
  addContact(name,compa,email,mess){
     console.log(name,compa,email,mess);
     this.Hel.push(name,compa,email,mess);


  }

}
