import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner-inline.component';

describe('BannerComponent (inline template)', () => {

  let comp:    BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ BannerComponent ],   //declare the test component.
    providers: [ 
      { provide: ComponentFixtureAutoDetect, useValue: true }
    ]
  });

  fixture = TestBed.createComponent(BannerComponent);

  comp = fixture.componentInstance; //Bannercomponenet test instance

  //quesry for the title <h1> by CSS element selector
  de = fixture.debugElement.query(By.css('h1'));
  el = de.nativeElement;
});

it('should display original title', () => {
fixture.detectChanges();
  expect(el.textContent).toContain(comp.title);
});

it('should display a different test title', () => {
  comp.title = 'Test Title';
 fixture.detectChanges();
  expect(el.textContent).toContain('Test Title');
});

it('should still see original title after comp.title change', () => {
  const oldTitle = comp.title;
  comp.title = 'Test Title';
  // Displayed title is old because Angular didn't hear the change : (
    expect(el.textContent).toContain(oldTitle);
});
  

});
