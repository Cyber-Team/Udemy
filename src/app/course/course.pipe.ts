import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'course'
})
export class CoursePipe implements PipeTransform {

  transform(myLise: any, search: any): any {
    if(search === undefined) return myLise;
    return myLise.filter(function (numbers) {
      return numbers.nam .toLowerCase().includes(search.toLowerCase());
    })
  }

}
