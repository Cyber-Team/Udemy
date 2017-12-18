import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(public courseService: CourseService) { }

  ngOnInit() {
  }

  onCourseSubmit(data):void{
       // console.log(data);
        this.courseService.addCourse(data);
  }
}
