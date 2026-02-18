import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
  standalone: true
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: number[]): any {
    console.log("value is : "+value+"arg is : "+args)
    if(args.length > 0) {
      return value*args[0];
    } else {
      return value*10
    }
  }

}
