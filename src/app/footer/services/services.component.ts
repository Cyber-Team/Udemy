import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
 ServiceList: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../assets/json/service.json')
      .map(response => response.json())
      .subscribe(res => this.ServiceList = res);
  }

}
