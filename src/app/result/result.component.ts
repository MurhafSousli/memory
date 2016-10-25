import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {MemoryService} from "../memory/memory.service";

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent implements OnInit {

  constructor(private memory: MemoryService) { }

  ngOnInit() {
  }

}
