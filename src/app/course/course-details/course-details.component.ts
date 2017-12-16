import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public courseID;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let kk = this.route.snapshot.params['id'];
    this.courseID = kk;
  }

}
