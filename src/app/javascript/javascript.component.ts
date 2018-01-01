import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  myLii: any;
  error: string;
  ite: any[] = ["angular","react","vue","node"];
  ites: any[] = ["typescript",'javascripts','graph','webpack'];

  constructor(private http: Http,private dataService: DataService) { }

  ngOnInit() {
    // service call added
    this.dataService.getAllData()
    .subscribe(res => this.myLii = res,
    error => this.error = error.statusText);
  }

}
