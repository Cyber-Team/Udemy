import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  myBlog:any;
  itemCount:number;
  btnText: string = "Add";
  goatText: string = "";
  goatName: string = "";
  goals = [];
  name = [];
  goatImg: string;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../assets/json/blog.json')
      .map(response => response.json())
      .subscribe(res => this.myBlog = res);

    this.itemCount = this.goals.length;
  }
  addComment(){
      this.goals.push(this.goatText);
      this.goatText='';
      this.itemCount = this.goals.length;
      this.name.push(this.goatName);
      this.goatName='';
      // console.log(this.goatImg);
  }
}
