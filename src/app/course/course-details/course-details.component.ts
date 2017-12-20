import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { CourseService } from '../course.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
 // public courseID;
  userId =[];
  userName: string;
  constructor(private route: ActivatedRoute, private course: CourseService) {
  }

  ngOnInit() {
    this.userId = this.route.snapshot.params['numbers.id'];
  }
}
