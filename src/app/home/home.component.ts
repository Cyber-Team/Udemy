import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myLi: any[];
titl: string;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://udemy-35149.firebaseio.com/.json')
      .map(response => response.json())
      .subscribe(res => this.myLi = res);
  }

}
