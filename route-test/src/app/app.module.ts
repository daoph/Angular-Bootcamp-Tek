import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { About, Home, News, MySPA } from './all.component';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ About, Home, News, MySPA ],
  bootstrap:    [ MySPA ]
})
export class AppModule { }
