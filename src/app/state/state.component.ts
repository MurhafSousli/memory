import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../memory/memory.service";

@Component({
  selector: 'state',
  templateUrl: './state.component.html'
})
export class StateComponent implements OnInit {

  constructor(private memory: MemoryService) { }

  ngOnInit() {
  }

}
