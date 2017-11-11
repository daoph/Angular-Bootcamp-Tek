import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h3>App Component</h3>
  <input type=button [routerLink]="['/home']" value="Home">
  <input type=button [routerLink]="['/message']" value="Message">
  <router-outlet>`,
})
export class AppComponent  { 
  // name = 'Angular';
  // developer: string = '';
  // message: string = 'Enter a name and click update.';
  // updateMessage(){
  //   this.message = this.developer + 'is debugging ' + this.name + 'exceptions!';
  }

