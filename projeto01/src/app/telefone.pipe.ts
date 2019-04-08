import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    if(value.length==0) return "";
    return value.substr(0, 4)+"-"+value.substr(4, 4);
  }

}
