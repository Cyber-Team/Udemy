import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  myBlog:any;
  itemCount:number = 4;
  btnText: string = "Add";
  goatText: string = "";

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../assets/json/blog.json')
      .map(response => response.json())
      .subscribe(res => this.myBlog = res);
  }
}
