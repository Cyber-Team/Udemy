import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Icourse} from '../Interfaces/icourse';
import {CourseService} from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  myLise: Icourse[];
  search: string;
  starsCount: number;
  constructor(private http: Http, private _course: CourseService) { }

  ngOnInit() {
    // services added
    this._course.getData()
      .subscribe(res => this.myLise = res);
  }

}

