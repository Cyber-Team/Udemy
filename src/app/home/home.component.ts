import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {
  myLi: any;
  titl: string;
  error: string;
  url: string;

  state: string = 'small';
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../assets/json/home.json')
      .map(response => response.json())
      .subscribe(res => this.myLi = res);
  }
  toggleState(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
