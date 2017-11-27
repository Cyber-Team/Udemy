import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin: string = "SignIn";
  firstName: string;
  password: any;
  data: any = [];
  constructor(private router: Router) {}

  formSubmit(){
    if(this.data.firstName == "admin" && this.data.password == "admin"){
      this.router.navigate(['./cart']);
    }else{
       this.data.firstName = '';
       this.data.password= '';
    }
  }



  ngOnInit() {

  }
  SignChange(){
    if(this.signin === 'SignIn'){
      this.signin = 'Please enter';
    }else{
      this.signin = 'SignIn';
    }
  }

}
