import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { CourseService } from '../course.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public courseID;

  constructor(private route: ActivatedRoute, private course: CourseService) {
  }

  ngOnInit() {
    /*let kk = this.route.snapshot.params['id'];
    this.courseID = kk;*/
    this.route.params.subscribe((parms: Params) => {
      const id = parms['id'];
      this.courseID = id;
      console.log(id);
    })
  }
}
