import { Component, OnInit, HostBinding } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ Animations.page ]
})
export class HomeComponent implements OnInit {

  @HostBinding('@routeAnimation')
  anyProperty = 'anything';
  
  constructor() { }

  ngOnInit() {
  }

}
