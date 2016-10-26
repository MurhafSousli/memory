import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  g = ['g1.jpg', 'g2.jpg'];
  a = ['a1.jpg', 'a2.jpg'];
  y = ['y1.jpg', 'y2.jpg', 'y3.jpg']

  transform(value: any, args?: any): any {
    if(value < 20){
      return this.getImage(this.g);
    }
    if(value <30){
      return this.getImage(this.y);
    }
    else
      return this.getImage(this.a);
  }

  getImage(arr: string[]){
    return "memory../../assets/img/" + this.getRandomImg(arr);
  }

  getRandomImg(arr: string[]){
    return arr[Math.floor(Math.random()*arr.length)];
  }

}
