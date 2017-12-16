import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CourseService {

  constructor(private http:Http) { }

  getData(){
    return this.http.get('../assets/json/course.json')
      .map(response => response.json());
  }
}
