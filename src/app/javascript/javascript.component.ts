import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  myLii: any[];
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../assets/json/javascript.json')
      .map(response => response.json())
      .subscribe(res => this.myLii = res);
  }

}
