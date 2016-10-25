import {Component, Input} from '@angular/core';
import {Card} from "../cards/card.class";
import {MemoryService} from "../memory/memory.service";

@Component({
  selector: 'memory-card',
  templateUrl: './memory-card.component.html',
})
export class MemoryCardComponent {

  @Input() card:Card;

  constructor(private memory:MemoryService) { }

}
