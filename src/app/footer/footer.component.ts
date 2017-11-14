import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private http: Http,
              private router: Router) { }

  ngOnInit() {
  }
  preventNormal(event: MouseEvent){
    this.router.navigate(['training']);
  }
  preventNorma(event: MouseEvent) {
    this.router.navigate(['contact']);
  }
}


