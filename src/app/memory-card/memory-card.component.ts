import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Card} from "../cards/card.class";
import {MemoryService} from "../memory/memory.service";

@Component({
  selector: 'memory-card',
  templateUrl: './memory-card.component.html'
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoryCardComponent implements OnInit {

  @Input() card:Card;

  constructor(private memory:MemoryService) { }

  ngOnInit() {
  }

}
