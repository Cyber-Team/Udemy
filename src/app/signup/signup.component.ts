import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }
  formSubmi(){
    if(this.data.name == "" && this.data.email == "" && this.data.pass == ""){
       console.log("success");
    }else{
     // this.wrong = "*Please enter correct input";
      this.router.navigate(['./cart']);
    }
  }
}
