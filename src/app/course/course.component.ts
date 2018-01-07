import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Icourse } from '../Interfaces/icourse';
import { CourseService } from './course.service';
import { UtilService } from '../services/util.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  myLise : Icourse[];
  search: string;
  starsCount: number;
  courseCount: number;
  sortField: string = 'cost';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'Price',
    'Discount',
    'Author'
  ];
  constructor( private router: Router,
               private http: Http,
               private _course: CourseService,
               public utilService: UtilService ) {}

  ngOnInit() {
    // services added
    this._course.getData()
      .subscribe(res => this.myLise = res);

    this._course.newCourse.subscribe(
      data => this.myLise = [data, ...this.myLise]
    );
   // this.courseCount = this.myLise.length;
  }
  onSelect(numbers){
    this.router.navigate(['course', numbers.id]);
    console.log(JSON.stringify(numbers));
  }
  deleteItem(numbers){
    this.myLise.splice(numbers, 1);
  }

}

