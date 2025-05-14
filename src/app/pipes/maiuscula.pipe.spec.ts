import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maiuscula'
})
export class MaiusculaPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.toUpperCase() : '';
  }
}