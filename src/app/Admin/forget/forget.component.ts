import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private router: Router, private userSVC: UserServiceService) { }

  ngOnInit() {
  }

}
