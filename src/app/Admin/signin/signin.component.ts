import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password1: string;
  constructor(private router: Router, private userSVC: UserServiceService) {}

  ngOnInit() {

  }

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
