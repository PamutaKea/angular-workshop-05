import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName',
})
export class ProductNamePipe implements PipeTransform {
  transform(input: string, target: string): string {
    target = input.replace(/ /g, '-');
    return target;
  }
}
