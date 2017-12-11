import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   email: string;
   password1: string;
   password2: string;
   passwordFail: boolean = false;
  constructor(private userSVC: UserServiceService, private router: Router) { }

  ngOnInit() {
  }
  signUp(){
    if( this.password1 !== this.password2){
      this.passwordFail =  true;
    }else{
      this.passwordFail = false;
      this.userSVC.register(this.email, this.password1);
      this.userSVC.verifyUser();
    }
  }
  cancel(){
    this.router.navigate(['/signin']);
  }
}
