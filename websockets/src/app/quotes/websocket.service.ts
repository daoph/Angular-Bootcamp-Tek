import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import * as io from 'socket.io-client';

@Injectable()
export class WebsocketService {
  socket: SocketIOClient.Socket;
  url: string = 'ws://localhost:4000';
  getMessages() {
    let observable = new Observable( 
     (observer: Subscriber<string>) => {
      this.socket = io(this.url);
      this.socket.emit('getquotes', 'start');
      this.socket.on('newquote', (data: string) => {
        observer.next(data);
      });
    });
    return observable;
  }
  stopMessages(){ this.socket.disconnect();}
}


