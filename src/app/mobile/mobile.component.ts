import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  myLis: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../assets/json/data.json')
      .map(response => response.json())
      .subscribe(res => this.myLis = res);
  }

}
