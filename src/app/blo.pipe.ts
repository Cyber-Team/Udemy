import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blo'
})
export class BloPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
