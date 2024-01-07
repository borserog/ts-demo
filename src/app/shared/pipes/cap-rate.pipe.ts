import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capRate',
  standalone: true
})
export class CapRatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
