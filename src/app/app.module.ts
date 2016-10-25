import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ShareButtonsModule} from 'ng2-sharebuttons';

import {AppComponent} from './app.component';
import {MemoryBoardComponent} from './memory-board/memory-board.component';
import {MemoryCardComponent} from './memory-card/memory-card.component';
import {MemoryService} from "./memory/memory.service";
import {SharedModule} from "./shared/index";
import {HomeComponent} from './home/home.component';
import {CardsService} from "./cards/cards.service";
import {StateComponent} from './state/state.component';
import {RouterModule} from "@angular/router";
import {AboutComponent} from './about/about.component';
import {ResultComponent} from './result/result.component';
import { ResultPipe } from './result/result.pipe';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    MemoryBoardComponent,
    MemoryCardComponent,
    HomeComponent,
    StateComponent,
    AboutComponent,
    ResultComponent,
    ResultPipe,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ShareButtonsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
    ])
  ],
  providers: [MemoryService, CardsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
