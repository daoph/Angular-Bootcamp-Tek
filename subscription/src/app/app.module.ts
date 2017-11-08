import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FancyCheckbox }  from './fancyCheckbox/fancyCheckbox.component';

import { SubscriptionForm } from './subscriptionForm/subscriptionForm.component';
import { FancyText } from './fancyText/fancyText.component';
import { PlayerSubscribe } from './playerSubscribe/playerSubscribe.component';




@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ PlayerSubscribe, SubscriptionForm, FancyText, FancyCheckbox],
  bootstrap:    [ PlayerSubscribe ]
})
export class AppModule { }
