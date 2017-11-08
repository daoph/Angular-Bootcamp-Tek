import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Magazine } from './magazine/magazine.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ Magazine ],
  bootstrap:    [ Magazine ]
})
export class AppModule { }
