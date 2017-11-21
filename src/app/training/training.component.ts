import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Training } from '../training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  myList: any;

  item: string[] = ['american','boom','cap','net'];
  constructor(private http: Http) { }
//http request
  ngOnInit() {
    this.http.get('../assets/json/traning.json')
      .map(response => response.json())
      .subscribe(res => this.myList = res);
  }
}
