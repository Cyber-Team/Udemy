import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {_ParseAST} from "@angular/compiler";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name:string;
  email: string;
  constructor(public route:ActivatedRoute) {
    this.route.params.subscribe(params=>{
      this.name = params['id'];
    })
  }

  ngOnInit() {
  }

}
