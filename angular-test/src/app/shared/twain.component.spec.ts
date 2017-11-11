import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';
import { DebugElement }              from '@angular/core';

import { TwainService }   from './twain.service';
import { TwainComponent } from './twain.component';
import { getQueryValue } from '@angular/core/src/view/query';

describe('TwainComponent', () => {

  let comp: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;

  let spy: jasmine.Spy;
  let de: DebugElement;
  let el: HTMLElement;
  let twainService: TwainService; // the actually injected service

  const testQuote = 'Test Quote';

  beforeEach(() => {
    TestBed.configureTestingModule({
       declarations: [ TwainComponent ],
       providers:    [ TwainService ],
    });

    fixture = TestBed.createComponent(TwainComponent);
    comp    = fixture.componentInstance;

    // TwainService actually injected into the component
    twainService = fixture.debugElement.injector.get(TwainService);

    // Setup spy on the `getQuote` method
    spy = spyOn(twainService, 'getQuote').and.returnValue(Promise.resolve(testQuote));
	

    // Get the Twain quote element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.twain'));
    el = de.nativeElement;
  });
  
  // Test #1
  it('should not show quote before OnInit', () => {
    
  expect(el.textContent).toBe('', 'nothing displayed');
  expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
  });

  // Test #2
  it('should still not show quote after component initialized', () => {
   fixture.detectChanges();
   // getQuote service is async => still has not returned with quote
   expect(el.textContent).toBe('...', 'no quote yet');
   expect(spy.calls.any()).toBe(true, 'getQuote called');
  });

  // Test #3
  it('should show quote after getQuote promise (async)', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.textContent).toBe(testQuote);
    });
  }));

  // Test #4
  it('should show quote after getQuote promise (fakeAsync)', 
  fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(el.textContent).toBe(testQuote);
  }));

  // Test #5
  it('should show quote after getQuote promise (done)', done => {
    fixture.detectChanges();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect (el.textContent).toBe(testQuote);
      done();
    });
  });
  
});