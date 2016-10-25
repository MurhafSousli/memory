import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'colors-bar',
  templateUrl: './colors-bar.component.html',
  styleUrls: ['./colors-bar.component.sass']
})
export class ColorsBarComponent implements OnInit {

  sCount;
  dimensions: any;

  // @Input() sectionCount(sectionCount) {
  //   this.sCount = Array(5).fill().map((x, i)=>i);
  // };
  //
  // @Input() colors;

  constructor() {
  }

  ngOnInit() {
    this.generate();
  }

  generate() {
    let randomize = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let dimensions = [10, 10, 10];
    let sum = 100;
    let i = 0;
    while (i < dimensions.length) {
      let dimSum = dimensions.reduce((a, b) => a + b, 0);
      if (i + 1 == dimensions.length)
        dimensions[i] = sum - dimSum;
      else {
        dimensions[i] = randomize(dimensions[i], sum - dimSum);
      }
      i++;
    }
  }

}
