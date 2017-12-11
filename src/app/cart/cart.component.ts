import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {_ParseAST} from "@angular/compiler";
import {UserServiceService} from '../Admin/user-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  /*name:string;
  email: string;*/
  theUser: string;

  constructor(private userSVC: UserServiceService, private  router: Router) {
    /*this.route.params.subscribe(params=>{
      this.name = params['id'];
    })*/
  }

  ngOnInit() {
    this.theUser = this.userSVC.loggedInUser;
  }
logout(){
    this.userSVC.logout();
    this.router.navigate(['']);
}
}
