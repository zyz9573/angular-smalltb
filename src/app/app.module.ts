import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { CardService } from './card/card.service';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player/player.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent, PlayerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CardService, PlayerService]
})
export class AppModule { }
