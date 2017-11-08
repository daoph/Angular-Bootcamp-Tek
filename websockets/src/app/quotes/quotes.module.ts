import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent }  from './quotes.component';
import { WebsocketService } from './websocket.service';

@NgModule({
  imports:      [ CommonModule ],
  exports: [ QuotesComponent ],
  declarations: [ QuotesComponent ],
  providers: [ WebsocketService ]
})
export class QuotesModule { }