import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../memory/memory.service";

@Component({
  selector: 'memory-board',
  templateUrl: './memory-board.component.html'
})
export class MemoryBoardComponent implements OnInit {

  constructor(private memory:MemoryService) { }

  ngOnInit() {
  }

}
