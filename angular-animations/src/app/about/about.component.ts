import { Component, OnInit, HostBinding } from '@angular/core';
import { Animations } from '../animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [ Animations.page ]
})

export class AboutComponent implements OnInit {

  @HostBinding('@routeAnimation')
  anyProperty = 'anything';

  constructor() { }

  ngOnInit() {
  }

}
