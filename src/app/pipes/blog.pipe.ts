import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blog'
})
export class BlogPipe implements PipeTransform {

  transform(myBlog: any, search: any): any {
    if(search === undefined) return myBlog;
    return myBlog.filter(function (blog) {
       return blog.name.toLowerCase().includes(search.toLowerCase());
    })
  }

}
