import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Icourse} from '../Interfaces/icourse';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  myLise: Icourse[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../assets/json/course.json')
      .map(response => response.json())
      .subscribe(res => this.myLise = res);
  }

}
