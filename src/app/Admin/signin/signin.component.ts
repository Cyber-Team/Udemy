import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
/*import { CartService } from '../../services/cart/cart.service';*/
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  /*signin: string = "SignIn";
  firstName: string;
  wrong: string = "";
  data: any = [];
  msg:any="";*/
email: string;
password1: string;
  constructor(private router: Router, private userSVC: UserServiceService) {}

  /*formSubmit(){
    if(this.data.firstName == "admin@admin.com" && this.data.password == "password"){
      this.router.navigate(['cart',this.data.firstName]);
    }else{
       this.data.firstName = '';
       this.data.password= '';
       this.wrong = "*Please enter correct input";
      this.msg = "*Please enter correct input";
    }
  }*/

  ngOnInit() {

  }
  /*SignChange(){
    if(this.signin === 'SignIn'){
      this.signin = 'Please enter';
    }else{
      this.signin = 'SignIn';
    }
  }*/
 login(){
   this.userSVC.login(this.email, this.password1);
   this.userSVC.verifyUser();
 }
 signup(){
   this.router.navigate(['/signup']);
 }
 cancel(){
   this.router.navigate(['']);
 }
}
