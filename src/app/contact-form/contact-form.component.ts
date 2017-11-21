import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

  constructor() {
    /*this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      company: ['', Validators.required]
    });*/
  }

  ngOnInit() {
  }

}
