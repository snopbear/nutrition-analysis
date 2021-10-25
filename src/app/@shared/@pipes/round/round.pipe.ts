import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
})
export class RoundPipe implements PipeTransform {
  transform(input: number): number {
    return Math.round(input * Math.pow(10, 1)) / Math.pow(10, 1);
  }
}
