import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CourseService {

  constructor(private http:Http) { }

  getData(){
    return this.http.get('../assets/json/course.json')
      .map(response => response.json());

    /*return this.http.get('https://angular-2a612.firebaseio.com/'. JSON)
      .map(response => response.json());
    */

  }
}
