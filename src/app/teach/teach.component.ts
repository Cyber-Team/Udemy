import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './shared/employee.service';
@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.css'],
  providers: [EmployeeService]
})
export class TeachComponent implements OnInit {
  followOrUnfollow: string = "follow";
  numbers: number = 1;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }
  toggledFanSwitch() {
    if(this.followOrUnfollow === 'follow') {
      this.followOrUnfollow = 'unfollow';
      this.numbers = 2;
    } else {
      this.followOrUnfollow = 'follow';
      this.numbers = 1;
    }
  }
}
