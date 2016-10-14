import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MemoryBoardComponent } from './memory-board/memory-board.component';
import { MemoryCardComponent } from './memory-card/memory-card.component';
import {MemoryService} from "./memory/memory.service";
import {SharedModule} from "./shared/index";
import { HomeComponent } from './home/home.component';
import {CardsService} from "./cards/cards.service";


@NgModule({
  declarations: [
    AppComponent,
    MemoryBoardComponent,
    MemoryCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [MemoryService, CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
