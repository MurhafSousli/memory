import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MemoryService} from "./memory/memory.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Memory';

  constructor(private memory: MemoryService, private router:Router){

  }

  ngOnInit(){
  }

  newGame(){
    this.router.navigate(['']);
    this.memory.newGame();
  }

  about(){
    this.router.navigate(['/about']);
    // this.memory.isOver = true;
  }

}
