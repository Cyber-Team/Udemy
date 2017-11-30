import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin: string = "SignIn";
  firstName: string;
  // password: any;
  wrong: string = "";
  data: any = [];
  constructor(private router: Router, private _data: CartService) {}

  formSubmit(){
    if(this.data.firstName == "admin" && this.data.password == "admin"){
      this.router.navigate(['./cart']);
    }else{
       this.data.firstName = '';
       this.data.password= '';
       this.wrong = "*Please enter correct input";
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
