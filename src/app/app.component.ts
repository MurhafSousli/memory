import { Component } from '@angular/core';
import {MemoryService} from "./memory/memory.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Memory Game';

  constructor(private memory: MemoryService){

  }
  ngOnInit(){
  }

}
