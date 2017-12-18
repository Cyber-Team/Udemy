import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../course.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @ViewChild('newCourseForm') newCourseForm: NgForm;
  constructor(public courseService: CourseService) { }

  ngOnInit() {
  }

  onCourseSubmit(data):void{
       // console.log(data);
        this.courseService.addCourse(data);
        // for reset values in form
        this.newCourseForm.reset();
  }
}
