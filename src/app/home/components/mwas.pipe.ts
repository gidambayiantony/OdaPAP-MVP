import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mwas'
})
export class MwasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
