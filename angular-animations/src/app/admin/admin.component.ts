import { Component, OnInit, HostBinding } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-admin',
  template: `
  <div>
<h3>Administration View!</h3>
<p>Admin function01</p>
<p>Admin function02</p>
<p>...</p>
</div>`
  ,
  styleUrls: ['./admin.component.css'],
  animations: [ Animations.page ]
})

export class AdminComponent implements OnInit {

  @HostBinding('@routeAnimation')
  anyProperty = 'anything';

  constructor() { }

  ngOnInit() {
  }

}