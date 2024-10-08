import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: string, currency: string = 'COP'): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency }).format(+value);
  }

}