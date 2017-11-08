import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuotesModule } from './quotes/quotes.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, QuotesModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }
