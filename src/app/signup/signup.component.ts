import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data: any = [];
  name: string;
  email: string;
  pass: any;
  wrong: string = "";
  constructor() { }

  ngOnInit() {
  }
  formSubmi(){
    // console.log(this.data.name);
    // console.log(this.data.email);
    if(this.data.name == "" || this.data.email == "" || this.data.pass == ""){
       console.log("success");
    }else{
      this.wrong = "*Please enter correct input";
    }
  }
}
