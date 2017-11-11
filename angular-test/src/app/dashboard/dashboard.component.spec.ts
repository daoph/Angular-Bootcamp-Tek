import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroService }        from '../model';
import { FakeHeroService }    from '../model/testing';

import { By }     from '@angular/platform-browser';
import { Router } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardModule }    from './dashboard.module';

// declare RouterStub class
class RouterStub {
  navigateByUrl(url: string) { return url; }
}



let comp: DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterState } from '@angular/router/src/router_state';

describe('DashboardComponent (shallow)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas:      [NO_ERRORS_SCHEMA]
    });
  });
  
  beforeEach( async(() => {
    // async test module config
TestBed.configureTestingModule({
  providers: [
    { provide: HeroService, useClass: FakeHeroService },
    {provide: Router,   useClass: RouterStub }
  ]
})
  .compileComponents().then(() => {fixture = TestBed.createComponent(DashboardComponent);
  comp = fixture.componentInstance;
});
  }));
  
  // Test #1
  it('should NOT have heroes before ngOnInit', () => {
    expect(comp.heroes.length).toBe(0,
      'should not have heroes before ngOnInit');
  });

  // Test #2
  it('should NOT have heroes immediately after ngOnInit', () => {
    fixture.detectChanges(); // runs initial lifecycle hooks

    expect(comp.heroes.length).toBe(0,
      'should not have heroes until service promise resolves');
  });

  describe('after get dashboard heroes', () => {

     // Trigger component so it gets heroes and binds to them
     beforeEach( async(() => {
	   // async binding to Heroes
      fixture.detectChanges();
      fixture.whenStable().then(() => fixture.detectChanges());
     }));

	// Test #3
    it('should HAVE heroes', () => {
      expect(comp.heroes.length).toBeGreaterThan(0,
        'should have heroes after service promise resolves');
    });

	// Test #4
    it('should DISPLAY heroes', () => {
      // Find and examine the displayed heroes
      // Look for them in the DOM by css class
      const heroes = fixture.debugElement.queryAll(By.css('dashboard-hero'));
      expect(heroes.length).toBe(4, 'should display 4 heroes');
    });

    function click() {
      // get first <dashboard-hero> DebugElement
      const heroEl = fixture.debugElement.query(By.css('dashboard-hero'));
      heroEl.triggerEventHandler('selected', comp.heroes[0]);
	  
    }

	// Test #5
    it('should tell ROUTER to navigate when hero clicked',
      inject([Router], (router: Router) => { 

	    // create spy
        const spy = spyOn(router, 'navigateByUrl');

        click(); // trigger click on first inner <div class="hero">

        // args passed to router.navigateByUrl()
        const navArgs = spy.calls.first().args[0];

        // expecting to navigate to id of the component's first hero
        const id = comp.heroes[0].id;
        expect (navArgs).toBe('/heroes/' + id,
      'should nav to HeroDetail for first hero');
		
      })
	);

  });
  
});