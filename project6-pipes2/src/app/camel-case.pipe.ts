import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    // tslint:disable-next-line: prefer-const
    let values = value.split(' ');
    let result = '';
    // tslint:disable-next-line: prefer-const
    for (let v of values){
      result += this.capitalize(v) + ' ';
    }
    return result;
  }

  capitalize(value: string){
    return value.substring(0, 1).toUpperCase() +
      value.substr(1).toLowerCase();
  }

}
