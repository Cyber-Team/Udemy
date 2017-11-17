import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.css']
})
export class TeachComponent implements OnInit {
  followOrUnfollow: string = "follow";
  constructor() { }

  ngOnInit() {
  }
  toggledFanSwitch() {
    if(this.followOrUnfollow === 'follow') {
      this.followOrUnfollow = 'unfollow';
    } else {
      this.followOrUnfollow = 'follow';
    }
  }
}
