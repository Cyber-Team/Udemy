import { Component, OnInit, trigger, state, style, transition, animate, keyframes  } from '@angular/core';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.css'],
  animations: [
    trigger('myTrigger',[
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.4)'
      })),
      //  transition('small => large', animate('500ms ease-in')),
      // transition('large => small', animate('500ms ease-out'))
      transition('small <=> large', animate('500ms'))
    ])
  ]
})
export class TeachComponent implements OnInit {
  followOrUnfollow: string = "follow";
  numbers: number = 1;
  state: string = 'small';
  constructor() { }

  ngOnInit() {
  }
  toggledFanSwitch() {
    /*animation*/
    this.state = (this.state === 'small' ? 'large' : 'small');
    /*animation end*/
    if(this.followOrUnfollow === 'follow') {
      this.followOrUnfollow = 'unfollow';
      this.numbers = 2;
    } else {
      this.followOrUnfollow = 'follow';
      this.numbers = 1;
    }

  }

}
