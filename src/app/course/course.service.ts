import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/map'


@Injectable()
export class CourseService {
  public newCourse = new Subject<any>();
  constructor(private http:Http) { }

  getData(){
    return this.http.get('../assets/json/course.json')
      .map(response => response.json());
  }

  addCourse(data){
    data.pic = 'course';
    this.newCourse.next(data);
  }
}
