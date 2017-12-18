import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Icourse } from '../Interfaces/icourse';
import { CourseService } from './course.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  myLise: Icourse[];
  search: string;
  starsCount: number;

  constructor(private router: Router, private http: Http, private _course: CourseService) {}

  ngOnInit() {
    // services added
    this._course.getData()
      .subscribe(res => this.myLise = res);

    this._course.newCourse.subscribe(
      //data =>console.log(data)
      //data =>this.myLise.push(data)
      data => this.myLise = [data, ...this.myLise]
    )
  }
  onSelect(numbers){
    this.router.navigate(['course', numbers.id]);
    console.log(JSON.stringify(numbers));
  }

}

