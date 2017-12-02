import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.css']
})
export class TeachComponent implements OnInit {
  followOrUnfollow: string = "follow";
  numbers: number = 1;
  constructor() { }

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
