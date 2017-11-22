import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myLi: any;
  titl: string;
  error: string;
  url: string;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../assets/json/home.json')
      .map(response => response.json())
      .subscribe(res => this.myLi = res);
  }

}
