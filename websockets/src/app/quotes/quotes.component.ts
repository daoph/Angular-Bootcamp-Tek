import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'quotes',
  template: `<div>
  WebSocket Status: <span [ngClass]='{closed: status===0, open:status===1}'>
  {{statusText[status]}}</span><br>
  <button (click)='startWebsocketCommunications()'>Start</button>
  <button (click)='stopWebsocketCommunications()'>Stop</button>
  <button (click)='resetMessages()'>Reset</button>
  <p *ngFor="let quote of quotes" >
    {{quote.ticker}},{{quote.price}},{{quote.change}}
  </p>
  </div>
  `,
  styles: [`
  div{background-color:antiquewhite;display: inline-block; padding:5px;}
  button{margin:5px;}
  span{font-weight:bold;}
  p{color:darkmagenta;margin:0px;background-color:#ddd; text-align:center;}
  .closed{color:crimson;}
  .open{color:#0c0;}
  `]
})
export class QuotesComponent  {
  quotes: Array<{}> = [];
  status: number = 0; // 0=closed, 1=open
  statusText: string[] = ['Closed', 'Open'];
  url: string = 'ws://localhost:4000';

  constructor(private webSocketService: WebsocketService){}

  startWebsocketCommunications(){
   let obs: Observable<{}> = this.webSocketService.getMessages();

   this.status = 1; //open
   obs.subscribe( (msg: string) => {
     console.log('msg: ' + msg);
     this.quotes.push(JSON.parse(msg));
   })
    alert('not implemented yet');
  }

  stopWebsocketCommunications(){
    this.webSocketService.stopMessages();
    this.status = 0; //closed
    alert('not implemented yet');
  }

  resetMessages(){
    if (this.status === 1){
      this.stopWebsocketCommunications();
      this.quotes = [];

    }else {
      this.quotes = [];
    }
  }

}
