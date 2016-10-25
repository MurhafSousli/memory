import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value < 20){
      return "WOW so nice";
    }
    if(value <30){
      return "You can do better";
    }
    else
      return "Alzheimer";
  }

}
